"use client";
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
// @Mui
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// assets
import logo from "@/assets/logo.png";
import useLocales from "@/hooks/useLocales";

// ---------------------------------------------------------------

function Footer() {
  const { translate } = useLocales();
  const FOOTER_LINKS = [
    {
      title: translate(
        "componentsTranslations.footerTranslations.mawzon.title"
      ),
      links: [
        {
          label: translate(
            "componentsTranslations.footerTranslations.mawzon.links.home"
          ),
          href: "/",
        },
        {
          label: translate(
            "componentsTranslations.footerTranslations.mawzon.links.aboutUs"
          ),
          href: "/about-us",
        },
        {
          label: translate(
            "componentsTranslations.footerTranslations.mawzon.links.packages"
          ),
          href: "/packages",
        },
        {
          label: translate(
            "componentsTranslations.footerTranslations.mawzon.links.contactUs"
          ),
          href: "/contact-us",
        },
      ],
    },
    {
      title: translate(
        "componentsTranslations.footerTranslations.privacyPolicy.title"
      ),
      links: [
        {
          label: translate(
            "componentsTranslations.footerTranslations.privacyPolicy.links.dataCollection"
          ),
          href: "/data-collection",
        },
        {
          label: translate(
            "componentsTranslations.footerTranslations.privacyPolicy.links.paymentData"
          ),
          href: "/payment-data",
        },
      ],
    },
    {
      title: translate(
        "componentsTranslations.footerTranslations.termsAndConditions.title"
      ),
      links: [
        {
          label: translate(
            "componentsTranslations.footerTranslations.termsAndConditions.links.refundPolicy"
          ),
          href: "/refund-policy",
        },
        /*  { label: "Account Closure", href: "/" },
        { label: "Service Suspend", href: "/" }, */
      ],
    },
  ];

  return (
    <Box sx={{ pb: 4, borderTop: `1px solid lightgray`, pt: 2 }}>
      <Container>
        <Grid container spacing={12}>
          <Grid item md={6}>
            <Stack gap={3}>
              <Stack>
                <Box sx={{ position: "relative", height: 50, width: 150 }}>
                  <Image
                    src={logo}
                    alt="mawzon"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Box sx={{ width: 150 }}>
                  <Typography variant="overline" sx={{ textAlign: "center" }}>
                    By Dr.Shrouk Ali
                  </Typography>
                </Box>
              </Stack>
              <Typography>
                {translate("componentsTranslations.footerTranslations.aboutUs")}
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={3}>
              {FOOTER_LINKS.map((footerLink, index) => (
                <Grid item md={12 / FOOTER_LINKS.length}>
                  <Stack gap={2}>
                    <Typography variant="subtitle2" color="text.primary">
                      {footerLink.title}
                    </Typography>
                    <Stack gap={1}>
                      {footerLink.links.map((link, index) => (
                        <Typography
                          component={Link}
                          href={link.href}
                          variant="caption"
                          sx={{ color: "text.primary" }}
                        >
                          {link.label}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
