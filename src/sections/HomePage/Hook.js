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
                      }}
                    >
                      <Iconify
                        icon="iconoir:voice"
                        sx={{ fontSize: 60, color: "primary.main" }}
                      />
                    </Avatar>
                    {/* <Button
                      startIcon={<Iconify icon="solar:eye-broken" />}
                      sx={{ transform: "translateY(75%)" }}
                      size="small"
                    >
                      View More
                    </Button> */}
                  </Stack>
                </Grid>
                <Grid item md={2}>
                  <Stack gap={2}>
                    <Avatar
                      src="transformations/pic1.jpg"
                      sx={{
                        width: 150,
                        height: 150,
                        boxShadow: theme.shadows[1],
                      }}
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
                    {/* <Box
                      sx={{
                        position: "absolute",
                        zIndex: 10,
                        top: "5%",
                        left: "5%",
                      }}
                    >
                      <Paper
                        elevation={12}
                        sx={{
                          backgroundColor: "background.neutral",
                          borderRadius: 3,
                        }}
                      >
                        <IconButton color="grey.800">
                          <Iconify
                            sx={{ width: 35, height: 35 }}
                            icon="material-symbols:add"
                          />
                        </IconButton>
                      </Paper>
                    </Box> */}
                    <Avatar
                      src="transformations/pic2.jpg"
                      sx={{
                        width: 300,
                        height: 300,
                        zIndex: -1,
                        position: "relative",
                        boxShadow: theme.shadows[1],
                      }}
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
                      }}
                    >
                      <Iconify
                        icon="iconoir:voice"
                        sx={{ fontSize: 60, color: "primary.main" }}
                      />
                    </Avatar>
                    <Avatar
                      src="transformations/pic3.jpg"
                      sx={{
                        height: 150,
                        width: 150,
                        boxShadow: theme.shadows[5],
                      }}
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
                    }}
                  >
                    <Iconify
                      icon="iconoir:voice"
                      sx={{ fontSize: 60, color: "primary.main" }}
                    />
                  </Avatar>
                </Grid>
                <Grid item md={4}>
                  <Avatar
                    src="transformations/pic4.jpg"
                    sx={{
                      width: 300,
                      height: 300,
                      boxShadow: theme.shadows[5],
                    }}
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
