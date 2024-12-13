"use client";
import React from "react";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
// @Mui
import {
  alpha,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// atoms
import { selectPackagePopUpAtom } from "@/recoil";
//
import Label from "./Label";
import Iconify from "./Iconify";
import useLocales from "@/hooks/useLocales";
import { color } from "framer-motion";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";

// ------------------------------------------------------------------------

function PlanCard({
  isFeatured,
  price,
  duration,
  title,
  description,
  featuresList,
  type,
}) {
  const theme = useTheme();

  const triggerSelectPackagePopUp = useSetRecoilState(selectPackagePopUpAtom);

  const { translate } = useLocales();

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  return (
    <Box>
      <Paper
        sx={{
          px: 3,
          py: 3,
          borderRadius: 2,
          position: "relative",
          background:
            isFeatured &&
            `linear-gradient(to bottom, ${alpha(
              theme.palette.primary.main,
              0.1
            )}, transparent)`,
        }}
        elevation={8}
      >
        <Stack gap={3}>
          <Box>
            <Label color="primary">{title}</Label>
          </Box>
          <Box>
            <Typography variant="body2">{description}</Typography>
          </Box>
          <Box sx={{ backgroundColor: "grey.400", width: "70%", height: 2 }} />
          <Box>
            <Stack direction="row" gap={0.5} alignItems="center">
              <Typography variant="h3">
                {price} {userIpRegion === "EG" ? "EGP" : "USD"}
              </Typography>
            </Stack>
          </Box>
          {/* Features */}
          <Stack gap={3}>
            {featuresList.map((_, index) => (
              <Grid container spacing={1} alignItems="center" key={index}>
                <Grid item xs={1.5}>
                  <Iconify
                    icon={
                      (type !== "golden" && index === 4) ||
                      (type === "eco" && index === 8) ||
                      (type === "eco" && index === 2)
                        ? "ic:round-close"
                        : "material-symbols:check"
                    }
                    sx={{
                      width: 25,
                      height: 25,
                      color:
                        (type !== "golden" && index === 4) ||
                        (type === "eco" && index === 8) ||
                        (type === "eco" && index === 2)
                          ? "red"
                          : "green",
                    }}
                  />
                </Grid>
                <Grid item xs={10.5}>
                  <Typography variant="subtitle2">{_}</Typography>
                </Grid>
              </Grid>
            ))}
          </Stack>
          <Button
            sx={{ alignSelf: "center", width: "50%", mt: 6 }}
            variant="contained"
            onClick={() => {
              triggerSelectPackagePopUp({
                isTriggered: true,
                title: title,
                price: price,
                duration: duration,
                description: description,
                region: userIpRegion,
              });
            }}
          >
            {translate("componentsTranslations.plans.selectPLan")}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default PlanCard;
