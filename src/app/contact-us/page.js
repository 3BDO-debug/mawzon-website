"use client";
import React from "react";
// lottie-react
import Lottie from "lottie-react";
// @Mui
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// assets
import contactUs from "@/assets/animations/contact-us.json";
//
import ContactUsForm from "@/components/ContactUsForm";
import Iconify from "@/components/Iconify";
import useLocales from "@/hooks/useLocales";

// --------------------------------------------------------------------------

const ContactUsItem = ({ icon, title, value }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
      <Iconify
        sx={{ width: 30, height: 30, color: "primary.main" }}
        icon={icon}
      />
      <Stack>
        <Typography variant="h6">{title}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography
            variant="body2"
            sx={{
              direction: "ltr",
            }}
          >
            {value}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

// --------------------------------------------------------------------------

function ContactUsPage() {
  const { translate } = useLocales();
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Grid container rowSpacing={12} alignItems="center">
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Lottie
                  style={{ width: 550 }}
                  animationData={contactUs}
                  loop
                  autoPlay
                />
              </Grid>
              <Grid item xs={12}>
                <ContactUsItem
                  icon="ic:round-whatsapp"
                  title={translate(
                    "pagesTranslations.contactUsPageTranslations.whatsapp"
                  )}
                  value="+20 109-323-99-31"
                />
              </Grid>
              <Grid item xs={12}>
                <ContactUsItem
                  icon="mage:email"
                  title={translate(
                    "pagesTranslations.contactUsPageTranslations.email"
                  )}
                  value="support@mawzon.com"
                />
              </Grid>
              <Grid item xs={12}>
                <ContactUsItem
                  icon="lets-icons:time"
                  title={translate(
                    "pagesTranslations.contactUsPageTranslations.workingHours"
                  )}
                  value="9:00 AM - 11:59 PM"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="overline">
                  {translate(
                    "pagesTranslations.contactUsPageTranslations.contactUsForm.title"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2">
                  {translate(
                    "pagesTranslations.contactUsPageTranslations.contactUsForm.subtitle"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mt: 3, mb: 6 }}>
                  {translate(
                    "pagesTranslations.contactUsPageTranslations.contactUsForm.hook"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ContactUsForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUsPage;
