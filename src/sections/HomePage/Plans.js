"use client";
import React, { useActionState, useEffect, useState } from "react";
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

// ------------------------------------------------------------

function Plans() {
  const theme = useTheme();

  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const { translate, currentLang } = useLocales();

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const [ecoPrice, setEcoPrice] = useState("500");
  const [silverPrice, setSilverPrice] = useState("800");
  const [goldenPrice, setGoldenPrice] = useState("3500");

  useEffect(() => {
    if (userIpRegion === "EG") {
      if (selectedDuration === "1-month") {
        setEcoPrice("500");
        setSilverPrice("800");
        setGoldenPrice("1200");
      } else if (selectedDuration === "3-months") {
        setEcoPrice("1250");
        setSilverPrice("2000");
        setGoldenPrice("3000");
      }
    } else if (userIpRegion !== "EG") {
      if (selectedDuration === "1-month") {
        setEcoPrice("25");
        setSilverPrice("40");
        setGoldenPrice("60");
      } else if (selectedDuration === "3-months") {
        setEcoPrice("60");
        setSilverPrice("100");
        setGoldenPrice("150");
      }
    }
  }, [userIpRegion, selectedDuration]);

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
                    onClick={() => setSelectedDuration("1-month")}
                    variant={
                      selectedDuration === "1-month" ? "contained" : "outlined"
                    }
                    sx={{
                      transform:
                        currentLang.value === "ar"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      // border: 1,
                      // borderColor: "black",
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
                    onClick={() => setSelectedDuration("3-months")}
                    variant={
                      selectedDuration === "3-months" ? "contained" : "outlined"
                    }
                    sx={{
                      transform:
                        currentLang.value === "ar"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      // border: 1,
                      // borderColor: "black",
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
                  <Grid item xs={12} md={4}>
                    <PlanCard
                      title={translate(
                        "componentsTranslations.plans.plan1.title"
                      )}
                      description={translate(
                        "componentsTranslations.plans.plan1.planDescription"
                      )}
                      featuresList={[
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.1"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.2"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.3"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.4"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.5"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.6"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.7"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.8"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.9"
                        ),
                        translate(
                          "componentsTranslations.plans.plan1.featuresList.10"
                        ),
                      ]}
                      price={ecoPrice}
                      duration={selectedDuration}
                      type="eco"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <PlanCard
                      title={translate(
                        "componentsTranslations.plans.plan2.title"
                      )}
                      description={translate(
                        "componentsTranslations.plans.plan2.planDescription"
                      )}
                      featuresList={[
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.1"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.2"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.3"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.4"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.5"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.6"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.7"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.8"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.9"
                        ),
                        translate(
                          "componentsTranslations.plans.plan2.featuresList.10"
                        ),
                      ]}
                      price={silverPrice}
                      isFeatured
                      duration={selectedDuration}
                      type="silver"
                      hidden={true}
                    />
                  </Grid>
                  {/* {selectedDuration === "3-months" && ( */}
                  <Grid item xs={12} md={4}>
                    <PlanCard
                      title={translate(
                        "componentsTranslations.plans.plan3.title"
                      )}
                      description={translate(
                        "componentsTranslations.plans.plan3.planDescription"
                      )}
                      featuresList={[
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.1"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.2"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.3"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.4"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.5"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.6"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.7"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.8"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.9"
                        ),
                        translate(
                          "componentsTranslations.plans.plan3.featuresList.10"
                        ),
                      ]}
                      price={goldenPrice}
                      duration={selectedDuration}
                      type="golden"
                      hidden={true}
                    />
                  </Grid>
                  {/* )} */}
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
