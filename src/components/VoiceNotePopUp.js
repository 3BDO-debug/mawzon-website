import React from "react";
// @mui
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
// lottie-react
import Lottie from "lottie-react";
// componenets
import Iconify from "./Iconify";
// animation
import voiceAnimation from "../assets/animations/voiceAnimation.json";

function VoiceNotePopUp({ isTriggered, closeHandler, voice }) {
  return (
    <Dialog open={isTriggered} onClose={closeHandler} fullWidth>
      <DialogActions>
        <IconButton onClick={closeHandler}>
          <Iconify icon="uiw:close" sx={{ color: "primary.main" }} />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <Lottie animationData={voiceAnimation} />
        <audio controls autoPlay style={{ width: "100%" }}>
          <source src={voice} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </DialogContent>
    </Dialog>
  );
}

export default VoiceNotePopUp;
