"use client";
import React, { useState } from "react";
// @Mui
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// components
import Iconify from "@/components/Iconify";
import useLocales from "@/hooks/useLocales";
import VoiceNotePopUp from "@/components/VoiceNotePopUp";
import CustomAvatar from "@/components/CustomAvatar";

// --------------------------------------------------------------------------

function Hook() {
  const theme = useTheme();

  const { translate } = useLocales();

  const voice1 = "/voiceNotes/voice1.mp3";
  const voice2 = "/voiceNotes/voice2.mp3";
  const voice3 = "/voiceNotes/voice3.mp3";
  const voice4 = "/voiceNotes/voice4.mp3";
  const voice5 = "/voiceNotes/voice5.mp3";

  const [voicePopUp, triggerVoicePopUp] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  return (
    <Box sx={{ pt: 3, pb: 8 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h1" align="center">
                {translate("pagesTranslations.homePageTranslations.hook.title")}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ overflow: "hidden", mt: 4 }}>
              <Grid sx={{ flexWrap: "nowrap" }} container columnSpacing={1}>
                <Grid item md={2}>
                  <Stack>
                    <Avatar
                      onClick={() => {
                        setSelectedVoice(voice1);
                        triggerVoicePopUp(true);
                      }}
                      sx={{
                        width: 100,
                        height: 100,
                        boxShadow: (theme) => theme.shadows[5],
                        cursor: "pointer",
                      }}
                    >
                      <Iconify
                        icon="iconoir:voice"
                        sx={{ fontSize: 60, color: "primary.main" }}
                      />
                    </Avatar>
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Stack gap={2}>
                    <CustomAvatar
                      img="transformations/1.jpeg"
                      width={150}
                      heigth={150}
                      story={translate(
                        "pagesTranslations.homePageTranslations.hook.1"
                      )}
                    />
                    <Stack direction="row" gap={2}>
                      <Avatar
                        onClick={() => {
                          setSelectedVoice(voice3);
                          triggerVoicePopUp(true);
                        }}
                        sx={{
                          width: 45,
                          height: 45,
                          boxShadow: (theme) => theme.shadows[5],
                          cursor: "pointer",
                        }}
                      >
                        <Iconify
                          icon="iconoir:voice"
                          sx={{ fontSize: 40, color: "primary.main" }}
                        />
                      </Avatar>
                      <Avatar
                        onClick={() => {
                          setSelectedVoice(voice4);
                          triggerVoicePopUp(true);
                        }}
                        sx={{
                          width: 70,
                          height: 70,
                          boxShadow: (theme) => theme.shadows[5],
                          cursor: "pointer",
                        }}
                      >
                        <Iconify
                          icon="iconoir:voice"
                          sx={{ fontSize: 60, color: "primary.main" }}
                        />
                      </Avatar>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={4}>
                  <Box sx={{ position: "relative" }}>
                    <CustomAvatar
                      img="transformations/2.jpeg"
                      width={300}
                      heigth={300}
                      story={translate(
                        "pagesTranslations.homePageTranslations.hook.2"
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Stack gap={2}>
                    <Avatar
                      onClick={() => {
                        setSelectedVoice(voice2);
                        triggerVoicePopUp(true);
                      }}
                      sx={{
                        width: 100,
                        height: 100,
                        boxShadow: (theme) => theme.shadows[5],
                        cursor: "pointer",
                      }}
                    >
                      <Iconify
                        icon="iconoir:voice"
                        sx={{ fontSize: 60, color: "primary.main" }}
                      />
                    </Avatar>
                    <CustomAvatar
                      img="transformations/3.jpeg"
                      width={150}
                      heigth={150}
                      story={translate(
                        "pagesTranslations.homePageTranslations.hook.3"
                      )}
                    />
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Avatar
                    onClick={() => {
                      setSelectedVoice(voice5);
                      triggerVoicePopUp(true);
                    }}
                    sx={{
                      width: 100,
                      height: 100,
                      boxShadow: (theme) => theme.shadows[5],
                      cursor: "pointer",
                    }}
                  >
                    <Iconify
                      icon="iconoir:voice"
                      sx={{ fontSize: 60, color: "primary.main" }}
                    />
                  </Avatar>
                </Grid>
                <Grid item md={4}>
                  <Stack direction="row" gap={1}>
                    <CustomAvatar
                      img="transformations/4.jpeg"
                      width={150}
                      heigth={150}
                      story={translate(
                        "pagesTranslations.homePageTranslations.hook.4"
                      )}
                    />
                    <CustomAvatar
                      img="transformations/6.jpeg"
                      width={150}
                      heigth={150}
                      story={translate(
                        "pagesTranslations.homePageTranslations.hook.6"
                      )}
                    />
                  </Stack>
                  <CustomAvatar
                    img="transformations/5.jpeg"
                    width={220}
                    heigth={220}
                    story={translate(
                      "pagesTranslations.homePageTranslations.hook.5"
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <VoiceNotePopUp
        isTriggered={voicePopUp}
        closeHandler={() => triggerVoicePopUp(false)}
        voice={selectedVoice}
      />
    </Box>
  );
}

export default Hook;
