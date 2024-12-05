"use client";
import React from "react";
// next
import Image from "next/image";
// recoil
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "@/recoil";
// @Mui
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
// assets
import tearingPaper from "@/assets/tearing-paper.png";
import useLocales from "@/hooks/useLocales";

// ----------------------------------------------------------------

function AboutUsHook() {
  const theme = useTheme();

  const { translate, currentLang } = useLocales();

  const themeMode = useRecoilValue(themeModeAtom);

  return (
    <Box
      sx={{
        position: "relative",
        pt: 4,
        mt: 10,
      }}
    >
      {/* Tearing paper */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          left: { xs: 0, xl: "10%" },
          right: { xs: 0, xl: "10%" },
          top:
            currentLang.value === "ar"
              ? { xs: "-60%", sm: "-100%" }
              : { xs: "-30%", sm: "-50%" },
          zIndex: -1,
        }}
      >
        <Image
          src={tearingPaper}
          style={{ filter: themeMode.mode === "dark" && "invert(0.891)" }}
          objectFit="cover"
          width="100%"
          height={250}
          alt="tearing-paper"
        />
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: themeMode.mode === "light" ? "grey.700" : "grey.200",
              }}
              variant="h4"
              align="center"
            >
              {translate("pagesTranslations.homePageTranslations.aboutUsHook")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUsHook;
