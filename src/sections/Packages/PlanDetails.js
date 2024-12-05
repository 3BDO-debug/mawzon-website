"use client";
import React, { useCallback, useEffect } from "react";
// @Mui
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
//
import Iconify from "@/components/Iconify";
import PlanCard from "@/components/PlanCard";
import useLocales from "@/hooks/useLocales";

import { userIpRegionFetcher } from "@/__apis__/userIpRegion";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
import { useSetRecoilState } from "recoil";

// -------------------------------------------------------------

function PlanDetails({
  alternate,
  title,
  description,
  featuresList,
  price,
  duration,
  isFeatured,
  type,
}) {
  const { translate } = useLocales();

  const setUserIpRegion = useSetRecoilState(userIpRegionAtom);

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log("Error fetching user region", error);
        setUserIpRegion(null);
      });
  }, [setUserIpRegion]);

  useEffect(() => {
    fetchUserIpRegion();
  }, []);

  return (
    <Box>
      <Grid
        container
        columnSpacing={12}
        rowSpacing={6}
        flexDirection={alternate ? "row-reverse" : "row"}
      >
        <Grid item xs={12} md={6}>
          <Stack>
            <Typography variant="h2">{title}</Typography>
            <Typography>
              {type === "eco"
                ? translate(
                    "componentsTranslations.plans.plan1.planDescription"
                  )
                : type === "silver"
                ? translate(
                    "componentsTranslations.plans.plan2.planDescription"
                  )
                : translate(
                    "componentsTranslations.plans.plan3.planDescription"
                  )}
            </Typography>
            <Paper
              elevation={12}
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGluc3RydWN0b3J8ZW58MHx8MHx8fDA%3D)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 500,
                mt: 4,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background: "black",
                  zIndex: 1,
                  opacity: 0.4,
                }}
              />
              <Stack
                alignItems="center"
                sx={{ height: "100%", zIndex: 10 }}
                justifyContent="center"
              >
                <IconButton
                  sx={{
                    borderRadius: 9,
                    borderColor: "primary.main",
                    borderWidth: 1.5,
                    borderStyle: "dashed",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <Iconify
                    icon="solar:play-bold-duotone"
                    sx={{ width: 50, height: 50, color: "primary.main" }}
                  />
                </IconButton>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <PlanCard
            title={title}
            description={description}
            featuresList={featuresList}
            price={price}
            type={type}
            isFeatured={isFeatured}
            duration={duration}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlanDetails;
