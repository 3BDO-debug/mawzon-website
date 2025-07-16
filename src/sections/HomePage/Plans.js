"use client";
import React, { useActionState, useCallback, useEffect, useState } from "react";
// @Mui
import {
  alpha,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PlanCard from "@/components/PlanCard";
import useLocales from "@/hooks/useLocales";
// recoil
import { useRecoilValue } from "recoil";
// atoms
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
import { packagesFetcher, pricesFetcher } from "@/__apis__/packages";

// ------------------------------------------------------------

function Plans() {
  const theme = useTheme();

  const [selectedDuration, setSelectedDuration] = useState(1);

  const { translate, currentLang } = useLocales();

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const [packagesData, setPackagesData] = useState([]);

  const fetchPackages = useCallback(async () => {
    await packagesFetcher()
      .then((response) => {
        setPackagesData(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    const fetchPricesForAll = async () => {
      try {
        const updatedPackages = await Promise.all(
          packagesData.map(async (pkg) => {
            if (pkg.pricesData) return pkg;
            try {
              const priceData = await pricesFetcher(pkg.id);
              return { ...pkg, pricesData: priceData };
            } catch (e) {
              console.error(`Failed to fetch price for package ${pkg.id}`, e);
              return { ...pkg, pricesData: "" };
            }
          })
        );
        setPackagesData(updatedPackages);
      } catch (error) {
        console.log("General fetch error", error);
      }
    };

    if (packagesData.length > 0 && !packagesData[0]?.pricesData) {
      fetchPricesForAll();
    }
  }, [packagesData]);

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ position: "relative" }}>
          {/* Gradient */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `radial-gradient(50% 50% at 50% 50%,${alpha(
                theme.palette.primary.main,
                0.3
              )} 0,transparent 100%)`,
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
          <Grid container>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center">
                <Typography variant="overline">
                  {translate("componentsTranslations.plans.title")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center">
                <Typography align="center" variant="h2">
                  {translate("componentsTranslations.plans.subtitle")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                {translate("componentsTranslations.plans.description")}
              </Typography>
              <Typography align="center">
                {translate("componentsTranslations.plans.description2")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <ButtonGroup>
                  <Button
                    size="large"
                    onClick={() => setSelectedDuration(1)}
                    variant={selectedDuration === 1 ? "contained" : "outlined"}
                    sx={{
                      transform:
                        currentLang.value === "ar"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        transform:
                          currentLang.value === "ar"
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      {translate(
                        "componentsTranslations.plans.durationButtons.button1"
                      )}
                    </span>
                  </Button>
                  <Button
                    size="large"
                    onClick={() => setSelectedDuration(3)}
                    variant={selectedDuration === 3 ? "contained" : "outlined"}
                    sx={{
                      transform:
                        currentLang.value === "ar"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        transform:
                          currentLang.value === "ar"
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      {translate(
                        "componentsTranslations.plans.durationButtons.button2"
                      )}
                    </span>
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" mt={8} justifyContent="center">
                <Grid container rowSpacing={6} columnSpacing={6}>
                  {[...packagesData].reverse().map((item, index) => {
                    const matchedPrice = item.pricesData?.find((priceObj) => {
                      const countryCode = priceObj.country_code.toLowerCase();
                      const duration = priceObj.related_duration_data?.duration;
                      const id = priceObj?.id;

                      if (userIpRegion === "EG") {
                        return (
                          countryCode === "eg" &&
                          duration === selectedDuration &&
                          id
                        );
                      } else {
                        return (
                          countryCode === "us" &&
                          duration === selectedDuration &&
                          id
                        );
                      }
                    });

                    const features = [...item.related_features_data].reverse();

                    if (item.primary_lng_name === "GOLDEN Plan") {
                      const movedFeature = features[9];
                      features.splice(9, 1); // Remove from index 9
                      features.splice(5, 0, movedFeature); // Insert at index 5
                    }

                    const planKeyMap = {
                      "GOLDEN Plan": "plan3",
                      "ECO Plan": "plan1",
                      "SILVER Plan": "plan2",
                      "THERAPEUTIC Plan": "plan4",
                    };

                    const planKey = planKeyMap[item.primary_lng_name];

                    return (
                      <Grid item xs={12} md={4} key={index}>
                        <PlanCard
                          title={
                            currentLang.value === "ar"
                              ? item.secondary_lng_name
                              : item.primary_lng_name
                          }
                          description={translate(
                            planKey
                              ? `componentsTranslations.plans.${planKey}.planDescription`
                              : ""
                          )}
                          featuresList={features.map((feature) =>
                            currentLang.value === "ar"
                              ? feature.secondary_description
                              : feature.description
                          )}
                          price={matchedPrice ? matchedPrice.price : "N/A"}
                          duration={selectedDuration}
                          type={item.primary_lng_name}
                          relatedPackage={item.id}
                          relatedPackagePrice={
                            matchedPrice ? matchedPrice.id : "N/A"
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Plans;
