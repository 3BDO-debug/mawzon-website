"use client";
import React from "react";
// @Mui
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useLocales from "@/hooks/useLocales";

// --------------------------------------------------------------

function CoreValues() {
  const { translate } = useLocales();

  const values = [
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.customerSatisfaction.title"
      ),
      icon: "clients-satisfaction",
      description: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.customerSatisfaction.description"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.transparency.title"
      ),
      icon: "transparency",
      description: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.transparency.description"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.reputation.title"
      ),
      icon: "reputation",
      description: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.reputation.description"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.response.title"
      ),
      icon: "response",
      description: translate(
        "pagesTranslations.aboutUsPageTranslations.coreValues.values.response.description"
      ),
    },
  ];

  return (
    <Box sx={{ pt: 8 }}>
      <Container>
        <Grid container spacing={0} align="center">
          <Grid item xs={12}>
            <Typography variant="overline">
              {translate(
                "pagesTranslations.aboutUsPageTranslations.coreValues.title"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">
              {translate(
                "pagesTranslations.aboutUsPageTranslations.coreValues.subtitle"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
              mt={8}
            >
              {values.map((coreValue, index) => (
                <Grid
                  item
                  xs={12}
                  md={5}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box sx={{ width: 80 }}>
                    <img
                      src={`icons/${coreValue.icon}.png`}
                      alt="Mawzon core value"
                    />
                  </Box>
                  <Typography variant="h6">{coreValue.title}</Typography>
                  <Typography variant="body2">
                    {coreValue.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CoreValues;
