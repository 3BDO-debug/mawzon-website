"use client";
import React, { useCallback, useState } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// framer-motion
import { motion } from "framer-motion";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { themeModeAtom } from "@/recoil";
// @Mui
import {
  alpha,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// assets
import logo from "@/assets/logo.png";
import Iconify from "../Iconify";
import SideDrawer from "./SideDrawer";
import HeaderLink from "./HeaderLink";
import useLocales from "@/hooks/useLocales";

// -----------------------------------------------------------------

function Header() {
  const theme = useTheme();
  const [themeMode, setThemeMode] = useRecoilState(themeModeAtom);

  const { translate, currentLang, onChangeLang } = useLocales();

  const router = useRouter();
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const HEADER_LINKS = [
    {
      label: translate(
        "componentsTranslations.headerTranslations.headerLinks.home"
      ),
      href: "/",
    },
    {
      label: translate(
        "componentsTranslations.headerTranslations.headerLinks.aboutUs"
      ),
      href: "/about-us",
    },
    {
      label: translate(
        "componentsTranslations.headerTranslations.headerLinks.packages"
      ),
      href: "/packages",
    },
    {
      label: translate(
        "componentsTranslations.headerTranslations.headerLinks.contactUs"
      ),
      href: "/contact-us",
    },
  ];

  const [sideDrawer, triggerSideDrawer] = useState(false);

  const bubbleVariants = {
    hover: {
      scale: 1.2,
      opacity: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: {
      scale: 1.8,
      opacity: 0.6,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    initial: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              cursor: "pointer",
            }}
          >
            <Stack>
              <Box
                sx={{
                  position: "relative",
                  // flex: {
                  //   xs: 0.35,
                  //   md: 0.15,
                  // },
                  height: 35,
                }}
              >
                <Image
                  layout="fill"
                  src={logo}
                  alt="Mawzon"
                  objectFit="contain"
                />
              </Box>
              <Typography variant="overline">By Dr.Shrouk Ali</Typography>
            </Stack>
          </Box>
          {/* Header Links */}
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            direction="row"
            gap={3}
            alignItems="center"
          >
            {HEADER_LINKS.map((link, index) => (
              <HeaderLink data={link} key={index} />
            ))}
          </Stack>
          {/* Socials & Menu Icon */}
          <Box>
            <Stack direction="row" alignItems="center" gap={2}>
              <Box>
                <IconButton
                  onClick={() =>
                    setThemeMode({
                      ...themeMode,
                      mode: themeMode.mode === "light" ? "dark" : "light",
                    })
                  }
                >
                  <Iconify
                    sx={{
                      width: 30,
                      height: 30,
                      color:
                        themeMode.mode === "light" ? "grey.600" : "#FCE570",
                    }}
                    icon={
                      themeMode.mode === "light"
                        ? "material-symbols-light:dark-mode"
                        : "si:light-mode-line"
                    }
                  />
                </IconButton>
                <IconButton
                  onClick={() =>
                    onChangeLang(currentLang.value === "en" ? "ar" : "en")
                  }
                >
                  <Iconify
                    icon={
                      currentLang.value === "ar"
                        ? "twemoji:flag-united-kingdom"
                        : "emojione-v1:flag-for-flag-saudi-arabia"
                    }
                  />
                </IconButton>
              </Box>
              {isMd && (
                <>
                  <Box
                    onClick={() => {
                      window.open("https://www.instagram.com/dr_shrouk_ali/");
                    }}
                    component={motion.div}
                    variants={bubbleVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    sx={{ cursor: "pointer" }}
                  >
                    <Iconify
                      icon="skill-icons:instagram"
                      sx={{
                        width: 25,
                        height: 25,
                        color: theme.palette.grey[600],
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => {
                      window.open("https://www.facebook.com/DrShroukAli/");
                    }}
                    component={motion.div}
                    variants={bubbleVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    sx={{ cursor: "pointer" }}
                  >
                    <Iconify
                      icon="logos:facebook"
                      sx={{
                        width: 25,
                        height: 25,
                        color: theme.palette.grey[600],
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => {
                      window.open(
                        "https://www.tiktok.com/@dr_shrouk_ali?_t=8pHkI45ew8g&_r=1"
                      );
                    }}
                    component={motion.div}
                    variants={bubbleVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    sx={{ cursor: "pointer" }}
                  >
                    <Iconify
                      icon="logos:tiktok-icon"
                      sx={{
                        width: 25,
                        height: 25,
                        color: theme.palette.grey[600],
                      }}
                    />
                  </Box>
                </>
              )}
              <IconButton
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
                onClick={() => triggerSideDrawer(true)}
              >
                <Iconify icon="jam:menu" sx={{ width: 30, height: 30 }} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* Side drawer */}
      <SideDrawer
        isTriggered={sideDrawer}
        closeHandler={() => triggerSideDrawer(false)}
        links={HEADER_LINKS}
      />
    </Box>
  );
}

export default Header;
