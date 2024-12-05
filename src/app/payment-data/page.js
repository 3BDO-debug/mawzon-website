"use client";
import React from "react";
// @Mui
import { Box, Container, Grid, Stack, Typography, Card } from "@mui/material";
import useLocales from "@/hooks/useLocales";

// -----------------------------------------------------------------------------------

function PaymentDataPage() {
  const { translate } = useLocales();
  return (
    <Box sx={{ py: "4", px: "4" }}>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="overline">
          {translate("pagesTranslations.paymentDataPageTranslations.title")}
        </Typography>
        <Typography variant="h2" align="center">
          {translate("pagesTranslations.paymentDataPageTranslations.subtitle")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "left", md: "center" },
            px: { xs: 2, md: 28 },
          }}
        >
          {translate("pagesTranslations.paymentDataPageTranslations.hook")}
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ px: 6 }}>
        <Grid item xs={12} md={5}>
          <Card sx={{ py: 2, px: 6, my: 4 }}>
            <Typography variant="h4" sx={{ color: "#D93053" }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.collectedData.title"
              )}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.collectedData.1"
              )}
            </Typography>

            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.collectedData.2"
              )}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card sx={{ py: 2, px: 6, my: 4 }}>
            <Typography variant="h4" sx={{ color: "#D93053" }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.paymentDataUsage.title"
              )}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.paymentDataUsage.1"
              )}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.paymentDataUsage.2"
              )}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.paymentDataUsage.3"
              )}
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              {translate(
                "pagesTranslations.paymentDataPageTranslations.paymentDataUsage.4"
              )}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentDataPage;
