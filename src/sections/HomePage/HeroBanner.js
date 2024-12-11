"use client";
import React, { useCallback, useEffect, useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// framer-motion
import { motion } from "framer-motion";
// recoil
import { themeModeAtom } from "@/recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
// @Mui
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Popover,
} from "@mui/material";
// assets
import tornHole from "@/assets/torn-hole.png";
import useLocales from "@/hooks/useLocales";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
import { userIpRegionFetcher } from "@/__apis__/userIpRegion";
// -----------------------------------------------------------------------------------

function HeroBanner() {
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);

  const handlePopoverOpen = (event, transformation) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(transformation);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent(null);
  };

  const open = Boolean(anchorEl);

  //-----------------------------------

  const transformations = [
    {
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
      before: "/transformations/elham-before.jpeg",
      after: "/transformations/elham-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.5.name"
      ),
    },
    {
      before: "/transformations/doa-before.jpeg",
      after: "/transformations/doa-after.jpeg",
      story: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.6.story"
      ),
      name: translate(
        "pagesTranslations.homePageTranslations.heroBanner.transformations.6.name"
      ),
    },
  ];

  return (
    <Box sx={{ py: 6, position: "relative" }}>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={6}>
          {/* Story Viewer */}
          <Grid item xs={12} md={6} sx={{ mt: 10 }}>
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
            <Box
              sx={{
                position: "relative",
                height: 400,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Image
                src={tornHole}
                alt="torn hole"
                objectFit="cover"
                layout="fill"
              />

              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{
                  overflow: "hidden",
                  gap: 2,
                  position: "absolute",
                  backgroundColor:
                    themeMode.mode === "light" ? "grey.900" : "grey.100",
                  justifyContent: "center",
                  maxHeight: { xs: 500, md: 350 },
                  clipPath: "circle(35% at 50% 50%)",
                  left: "-9%",
                  top: { xs: "10%", md: "12%" },
                  zIndex: 1,
                  transform: "rotate(8deg)",
                }}
              >
                {transformations.map((transformation, index) => (
                  <motion.div
                    drag
                    dragConstraints={{
                      left: -100,
                      top: -100,
                      right: 100,
                      bottom: 100,
                    }}
                  >
                    <Paper
                      elevation={24}
                      key={index}
                      sx={{
                        width: 140,
                        height: 140,
                        borderRadius: 2,
                        objectFit: "cover",
                        cursor: "pointer",
                        transition: "all 0.7s ease-in-out",
                        "&:hover": {
                          scale: 1.1,
                        },
                      }}
                      component="img"
                      src={transformation.after}
                      alt={`${transformation.name} - After`}
                      onMouseEnter={(e) => handlePopoverOpen(e, transformation)}
                      onMouseLeave={(e) => {
                        const relatedTarget = e.relatedTarget;
                        if (!relatedTarget) {
                          handlePopoverClose();
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                PaperProps={{
                  sx: { p: 1, borderRadius: 2 },
                }}
                disableRestoreFocus
              >
                {popoverContent && (
                  <Box sx={{ textAlign: "center", maxWidth: 430 }}>
                    <Stack
                      direction="row"
                      gap={3}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        component="img"
                        src={popoverContent.before}
                        alt={`${popoverContent.name} - Before`}
                        sx={{
                          width: 200,
                          height: "auto",
                          maxHeight: 280,
                          objectFit: "cover",
                          borderRadius: 2,
                          mb: 1,
                        }}
                      />
                      <Box
                        component="img"
                        src={popoverContent.after}
                        alt={`${popoverContent.name} - After`}
                        sx={{
                          width: 200,
                          height: "auto",
                          maxHeight: 280,
                          objectFit: "cover",
                          borderRadius: 2,
                          mb: 1,
                        }}
                      />
                    </Stack>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {popoverContent.name}
                    </Typography>
                    <Typography variant="body2">
                      {popoverContent.story}
                    </Typography>
                  </Box>
                )}
              </Popover>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: -30 } }}>
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
      {/* Page tear */}
    </Box>
  );
}

export default HeroBanner;
