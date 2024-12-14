"use client";
import React from "react";
// @Mui
import { Box, Grid, Stack, Typography, Card, Container } from "@mui/material";
import useLocales from "@/hooks/useLocales";

// ------------------------------------------------------------------
function page() {
  const { translate } = useLocales();

  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="overline">
          {translate("pagesTranslations.followUpPolicyPageTranslations.title")}
        </Typography>
        <Typography variant="h2" align="center">
          {translate(
            "pagesTranslations.followUpPolicyPageTranslations.subtitle"
          )}
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ px: 6 }}>
        <Grid item xs={12}>
          <Card sx={{ py: 2, px: 6, my: 4 }}>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.1")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.2")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.3")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.4")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.5")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.6")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.7")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.8")}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate("pagesTranslations.followUpPolicyPageTranslations.9")}
            </Typography>
            <Typography sx={{ mt: 3, color: "primary.main" }}>
              {translate(
                "pagesTranslations.followUpPolicyPageTranslations.hook"
              )}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default page;
