"use client";
import React, { useEffect, useState } from "react";
// @Mui
import { Box, Button, ButtonGroup, Container, Grid } from "@mui/material";
// assets

import heroCover from "@/assets/about-us-page/hero-cover.jpg";
//
import HeroVideo from "@/components/HeroVideo";
import PlanDetails from "@/sections/Packages/PlanDetails";
import useLocales from "@/hooks/useLocales";
import { useRecoilValue } from "recoil";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
import Plans from "@/sections/HomePage/Plans";

// -----------------------------------------------------------------------

function PackagesPage() {
  // const [selectedDuration, setSelectedDuration] = useState("1-month");

  // const { translate, currentLang } = useLocales();

  // const userIpRegion = useRecoilValue(userIpRegionAtom);

  // const [ecoPrice, setEcoPrice] = useState("500");
  // const [silverPrice, setSilverPrice] = useState("800");
  // const [goldenPrice, setGoldenPrice] = useState("3500");

  // useEffect(() => {
  //   if (userIpRegion === "EG") {
  //     if (selectedDuration === "1-month") {
  //       setEcoPrice("500");
  //       setSilverPrice("800");
  //     } else if (selectedDuration === "3-months") {
  //       setEcoPrice("1300");
  //       setSilverPrice("2000");
  //       setGoldenPrice("3500");
  //     }
  //   } else if (userIpRegion !== "EG") {
  //     if (selectedDuration === "1-month") {
  //       setEcoPrice("30");
  //       setSilverPrice("50");
  //     } else if (selectedDuration === "3-months") {
  //       setEcoPrice("75");
  //       setSilverPrice("120");
  //       setGoldenPrice("200");
  //     }
  //   }
  // }, [userIpRegion, selectedDuration]);

  return (
    <>
      <HeroVideo coverImage={heroCover} page="packages"/>
      {/* <Box sx={{ my: 8 }}>
        <Container>
          <Grid container rowSpacing={6}>
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
              <PlanDetails
                title={translate("componentsTranslations.plans.plan1.title")}
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
            <Grid item xs={12}>
              <PlanDetails
                title={translate("componentsTranslations.plans.plan2.title")}
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
                alternate
              />
            </Grid>
            {selectedDuration === "3-months" && (
              <Grid item xs={12}>
                <PlanDetails
                  title={translate("componentsTranslations.plans.plan3.title")}
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
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box> */}
      <Plans />
    </>
  );
}

export default PackagesPage;
