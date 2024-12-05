import React from "react";
// next
import Image from "next/image";
// @Mui
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
//
import Iconify from "./Iconify";
import aboutUsVideoPopUpAtom from "@/recoil/atoms/aboutUsVideoPopUpAtom";
import { useSetRecoilState } from "recoil";
import useLocales from "@/hooks/useLocales";

// ----------------------------------------------------------------------------------

function HeroVideo({ description, coverImage, page }) {
  const triggerVideoPopUp = useSetRecoilState(aboutUsVideoPopUpAtom);

  const { translate } = useLocales();

  return (
    <Box sx={{ mt: 4 }}>
      <Container>
        <Stack direction="row" justifyContent="center">
          <Paper
            sx={{
              position: "relative",
              borderRadius: 3,
              py: 12,
              px: 6,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
              }}
            >
              <Grid container rowSpacing={6}>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    sx={{ color: "#FFFFF0" }}
                    align="center"
                  >
                    {page === "aboutUs"
                      ? translate(
                          "pagesTranslations.aboutUsPageTranslations.thumbnail"
                        )
                      : translate("componentsTranslations.plans.thumbnail")}
                  </Typography>
                </Grid>
                {page === "aboutUs" && (
                  <Grid item xs={12}>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                      <IconButton
                        onClick={() => {
                          if (page === "aboutUs") {
                            triggerVideoPopUp(true);
                          }
                        }}
                        sx={{
                          borderRadius: 9,
                          borderColor: "primary.main",
                          borderWidth: 1.5,
                          borderStyle: "dashed",
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Iconify
                          icon="solar:play-bold-duotone"
                          sx={{ width: 50, height: 50, color: "primary.main" }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>

            {/* Background Cover */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={coverImage}
                  style={{ filter: "brightness(0.5)" }}
                  layout="fill"
                  objectFit="cover"
                  alt="what is mawzon ?!"
                />
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroVideo;
