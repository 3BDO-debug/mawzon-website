"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// recoil
import { themeModeAtom } from "@/recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
// @Mui
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  CardContent,
  Card,
  Chip,
  useTheme,
  IconButton,
  Icon,
} from "@mui/material";
// assets
import useLocales from "@/hooks/useLocales";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
import { userIpRegionFetcher } from "@/__apis__/userIpRegion";
import Iconify from "@/components/Iconify";
// -----------------------------------------------------------------

const TransfomationsCard = ({
  name,
  before,
  after,
  weigthBefore,
  weightAfter,
  story,
}) => {
  const { currentLang } = useLocales();
  return (
    <Card
      sx={{
        border: 1,
        borderColor: "primary.main",
        mx: 2,
        borderRadius: 6,
        // bgcolor: "#b0eae3",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {name}
        </Typography>
        <Stack
          direction="row"
          gap={4}
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <Box>
            <Box
              component="img"
              src={before}
              sx={{
                width: 200,
                height: 350,
                maxHeight: "auto",
                objectFit: "cover",
                borderRadius: 2,
                mb: 1,
              }}
            />
            <Chip
              label={weigthBefore}
              sx={{
                color: "secondary.main",
                bgcolor: "transparent",
                border: 1,
                borderColor: "secondary.main",
                display: "flex",
              }}
            />
          </Box>
          <Box>
            <Box
              component="img"
              src={after}
              sx={{
                width: 200,
                height: 350,
                maxHeight: "auto",
                objectFit: "cover",
                borderRadius: 2,
                mb: 1,
              }}
            />
            <Chip
              label={weightAfter}
              sx={{
                color: "secondary.main",
                bgcolor: "transparent",
                border: 1,
                borderColor: "secondary.main",
                display: "flex",
              }}
            />
          </Box>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            direction: currentLang.value === "ar" ? "rtl" : "ltr",
            fontWeight: "bold",
            mx: 3,
          }}
        >
          {story}
        </Typography>
      </CardContent>
    </Card>
  );
};

// -----------------------------------------------------------------
function HeroBanner() {
  const theme = useTheme();
  const themeMode = useRecoilValue(themeModeAtom);

  const { translate, currentLang } = useLocales();

  const { push } = useRouter();

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

  //----------------------------------------------

  const carouselRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "10px",
    arrows: false,
  };

  //-----------------------------------

  const transformations = [
    {
      weigthBefore: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.1.before"
      ),
      weightAfter: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.1.after"
      ),
      before: "/transformations/zeinab-before.jpeg",
      after: "/transformations/zeinab-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.1.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.1.name"
      ),
    },
    {
      weigthBefore: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.2.before"
      ),
      weightAfter: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.2.after"
      ),
      before: "/transformations/mawada-before.jpeg",
      after: "/transformations/mawada-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.2.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.2.name"
      ),
    },
    {
      weigthBefore: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.3.before"
      ),
      weightAfter: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.3.after"
      ),
      before: "/transformations/basma-before.jpeg",
      after: "/transformations/basma-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.3.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.3.name"
      ),
    },
    {
      weigthBefore: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.4.before"
      ),
      weightAfter: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.4.after"
      ),
      before: "/transformations/reham-before.jpeg",
      after: "/transformations/reham-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.4.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.4.name"
      ),
    },
    {
      weigthBefore: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.before"
      ),
      weightAfter: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.after"
      ),
      before: "/transformations/nada-before.jpeg",
      after: "/transformations/nada-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.name"
      ),
    },
  ];

  return (
    <Box sx={{ py: 6, position: "relative" }}>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={6}>
          {/* Story Viewer */}
          <Grid item xs={12} md={6} sx={{ mt: 15 }}>
            <Stack sx={{ zIndex: 10 }}>
              <Typography
                sx={{
                  background: "linear-gradient(45deg, #E43554, #E59866)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                variant="h3"
              >
                {translate(
                  "pagesTranslations.homePageTranslations.heroBanner.title.text"
                )}
              </Typography>
              <Typography variant="h3">
                {translate(
                  "pagesTranslations.homePageTranslations.heroBanner.title.hook"
                )}
                <Typography
                  component="span"
                  sx={{
                    background: `${
                      themeMode.mode === "light"
                        ? `linear-gradient(to ${
                            currentLang.value === "ar" ? "left" : "right"
                          }, black 15%, rgba(0, 0, 0, 0.09) 85%)`
                        : `linear-gradient(to ${
                            currentLang.value === "ar" ? "left" : "right"
                          }, #e0e0e0 15%, rgba(224, 224, 224, 0.1) 85%)`
                    }`,

                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  variant="h3"
                >
                  {translate(
                    "pagesTranslations.homePageTranslations.heroBanner.title.hook2"
                  )}
                </Typography>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Slider ref={carouselRef} {...settings}>
                {transformations.map((data, index) => (
                  <TransfomationsCard
                    key={index}
                    name={data.name}
                    story={data.story}
                    before={data.before}
                    after={data.after}
                    weigthBefore={data.weigthBefore}
                    weightAfter={data.weightAfter}
                  />
                ))}
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: -50 } }}>
            <Typography sx={{ mt: 1.5 }}>
              {translate(
                "pagesTranslations.homePageTranslations.heroBanner.description"
              )}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mt: "8%",
              }}
            >
              <Button
                size="large"
                variant="outlined"
                onClick={() => push("/contact-us")}
                sx={{ color: "primary.main", borderColor: "primary.main" }}
              >
                {translate(
                  "pagesTranslations.homePageTranslations.heroBanner.actionButtons.contactUs"
                )}
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => push("/packages")}
              >
                {translate(
                  "pagesTranslations.homePageTranslations.heroBanner.actionButtons.viewPackages"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroBanner;
