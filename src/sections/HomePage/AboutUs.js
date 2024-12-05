"use client";
import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// framer-motion
import { motion } from "framer-motion";
// @Mui
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// assets
import Logo from "@/components/Logo";
import useLocales from "@/hooks/useLocales";

// ---------------------------------------------------------------

function AboutUs() {
  const theme = useTheme();
  const { push } = useRouter();

  const { translate, currentLang } = useLocales();

  const generateTilesHeight = (index) => {
    let data = {
      height: 100,
      width: 100,
    };

    switch (index) {
      case 3:
        data.height = 100;
        data.width = 100;
        break;
      case 4:
        data.height = 100;
        data.width = 100;
        break;
      default:
        break;
    }

    return data;
  };

  return (
    <Box sx={{ mt: 20, mb: 8 }}>
      <Container>
        <Grid container rowSpacing={6} columnSpacing={12}>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="overline">
                  {translate(
                    "pagesTranslations.homePageTranslations.aboutUs.title"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2">
                  {translate(
                    "pagesTranslations.homePageTranslations.aboutUs.subtitle"
                  )}
                </Typography>
                <Typography
                  sx={{
                    background: `linear-gradient(to right, ${theme.palette.primary.lighter}, ${theme.palette.primary.main})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                  component="span"
                  variant="h2"
                >
                  {translate(
                    "pagesTranslations.homePageTranslations.aboutUs.subtitle2"
                  )}
                  <Box
                    sx={{
                      ml: currentLang.value === "en" ? 1 : 0,
                      mr: currentLang.value === "ar" ? 1 : 0,
                    }}
                    component="span"
                  >
                    <Logo width={150} height={150 * 0.3} />
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography color="primary.main" sx={{ mt: 2 }} variant="h3">
                    {translate(
                      "pagesTranslations.homePageTranslations.aboutUs.name"
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      ml: currentLang.value === "en" ? 3 : 0,
                      mr: currentLang.value === "ar" ? 3 : 0,
                    }}
                  >
                    <ul>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.1"
                        )}
                      </li>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.2"
                        )}
                      </li>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.3"
                        )}
                      </li>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.4"
                        )}
                      </li>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.5"
                        )}
                      </li>
                      <li>
                        {translate(
                          "pagesTranslations.homePageTranslations.aboutUs.description.6"
                        )}
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end" gap={3} mt={4}>
                  <Button
                    size="large"
                    variant="outlined"
                    onClick={() => push("/contact-us")}
                    sx={{ color: "primary.main", borderColor: "primary.main" }}
                  >
                    {translate(
                      "pagesTranslations.homePageTranslations.aboutUs.actionButtons.contactUs"
                    )}
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={() => push("/about-us")}
                  >
                    {translate(
                      "pagesTranslations.homePageTranslations.aboutUs.actionButtons.viewMore"
                    )}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 400,
                overflow: "hidden",
              }}
            >
              {/* The tiles */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  zIndex: 2,
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ borderWidth: 24 }} // Start with no border
                    animate={{ borderWidth: 2 }} // Animate to border thickness of 2
                    transition={{ duration: 3, ease: "easeOut" }} // Set duration of animation
                    sx={{
                      ...generateTilesHeight(index),
                      backgroundColor: "transparent", // Keep this transparent

                      position: "relative",
                      overflow: "hidden",
                      opacity: 1,
                      borderColor: "white",
                      borderStyle: "solid",
                      flex: "0 0 33.33%",
                    }}
                  />
                ))}
              </Box>
              {/* The Image */}
              <Paper
                elevation={24}
                component="img"
                src="coatPic.png"
                sx={{
                  width: "93%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                  borderRadius: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
