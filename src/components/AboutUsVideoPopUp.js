import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import aboutUsVideoPopUpAtom from "@/recoil/atoms/aboutUsVideoPopUpAtom";
import Iconify from "./Iconify";
import useLocales from "@/hooks/useLocales";

function AboutUsVideoPopUp() {
  const [videoPopUp, triggerVideoPopUp] = useRecoilState(aboutUsVideoPopUpAtom);

  const { translate } = useLocales();

  return (
    <Dialog
      open={videoPopUp}
      onClose={() => triggerVideoPopUp(false)}
      fullWidth
    >
      <DialogActions
        sx={{
          bgcolor: "black",
          justifyContent: "space-between",
        }}
      >
        {/* <Typography variant="h2" sx={{ color: "white" }}>
          {translate(
            "pagesTranslations.aboutUsPageTranslations.ourStory.subtitle"
          )}
        </Typography> */}
        <IconButton onClick={() => triggerVideoPopUp(false)}>
          <Iconify icon="uiw:close" sx={{ color: "primary.main" }} />
        </IconButton>
      </DialogActions>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "black",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <video controls autoPlay>
            <source src="/aboutUsVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default AboutUsVideoPopUp;
