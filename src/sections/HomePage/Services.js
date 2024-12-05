"use client";
import React from "react";
// @Mui
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
//
import Iconify from "@/components/Iconify";
import useLocales from "@/hooks/useLocales";

function Services() {
  const { translate } = useLocales();
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="overline">
          {translate("pagesTranslations.homePageTranslations.services.title")}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2" sx={{ color: "secondary.main" }}>
          {translate(
            "pagesTranslations.homePageTranslations.services.subtitle"
          )}
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="game-icons:test-tube-held"
                    sx={{ fontSize: 100, color: "secondary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.1.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.1.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="healthicons:nutrition-outline"
                    sx={{ fontSize: 100, color: "primary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.2.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.2.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="guidance:group-training"
                    sx={{ fontSize: 100, color: "secondary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.3.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.3.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="arcticons:medicinkortet"
                    sx={{ fontSize: 100, color: "primary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.4.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.4.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="mdi:progress-helper"
                    sx={{ fontSize: 100, color: "secondary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.5.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.5.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: "auto" }}>
            <CardContent>
              <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                <Box>
                  <Iconify
                    icon="hugeicons:customer-service"
                    sx={{ fontSize: 100, color: "primary.main" }}
                  />
                </Box>
                <Stack gap={2}>
                  <Typography variant="body2">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.6.name"
                    )}
                  </Typography>
                  <Typography variant="h6">
                    {translate(
                      "pagesTranslations.homePageTranslations.services.servicesData.6.description"
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
