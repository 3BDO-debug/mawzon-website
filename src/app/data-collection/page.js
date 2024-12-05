"use client";
import React from "react";
// @Mui
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useLocales from "@/hooks/useLocales";

// -----------------------------------------------------------------------------------

function DataCollectionPage() {
  const { translate } = useLocales();
  return (
    <Box sx={{ py: 4, px: 3 }}>
      <Container>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                backgroundColor: "background.neutral",
              }}
            >
              <Typography variant="overline">
                {translate(
                  "pagesTranslations.dataCollectionPageTranslations.title"
                )}
              </Typography>
              <Typography variant="h2" align="center">
                {translate(
                  "pagesTranslations.dataCollectionPageTranslations.subtitle"
                )}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 6 }} variant="subtitle2">
              {translate(
                "pagesTranslations.dataCollectionPageTranslations.hook"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              {translate(
                "pagesTranslations.dataCollectionPageTranslations.collectedData.title"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.collectedData.1.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.collectedData.1.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.collectedData.2.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.collectedData.2.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.collectedData.3.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.collectedData.3.description"
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              {translate(
                "pagesTranslations.dataCollectionPageTranslations.dataUsage.title"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.dataUsage.1.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.dataUsage.1.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.dataUsage.2.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.dataUsage.2.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.dataUsage.3.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.dataUsage.3.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.dataUsage.4.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.dataUsage.4.description"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="li">
                  <Typography
                    sx={{ fontWeight: "600", textDecoration: "underline" }}
                    component="span"
                  >
                    {translate(
                      "pagesTranslations.dataCollectionPageTranslations.dataUsage.5.title"
                    )}
                  </Typography>
                  {translate(
                    "pagesTranslations.dataCollectionPageTranslations.dataUsage.5.description"
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DataCollectionPage;
