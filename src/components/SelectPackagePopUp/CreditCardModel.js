"use client";

import React from "react";
import { alpha, Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Iconify from "../Iconify";

function CreditCardModel({
  cardNumber = "1111222233334444",
  cardFullname,
  expDate,
  cvv,
  isFlipped,
}) {
  const theme = useTheme();

  const mappedCardNumber = cardNumber
    .replace(/\D/g, "")
    .match(/.{1,4}/g)
    ?.join(" ")
    .split(" ");

  return (
    <Stack
      sx={{
        perspective: "10000", // Enables 3D perspective for the flip effect
      }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 260,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "text.primary",
            px: 3,
            py: 3,
            borderRadius: 3,
            color: theme.palette.background.paper,
            background:
              "url(https://img.freepik.com/free-vector/elegant-damask-style-pattern-background_1048-11129.jpg?uid=R26163149&ga=GA1.1.1408219499.1731794018&semt=ais_hybrid)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backfaceVisibility: "hidden",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s ease-in-out",
            boxShadow: isFlipped
              ? "0 15px 30px rgba(0, 0, 0, 0.3)"
              : "0 10px 20px rgba(0, 0, 0, 0.2)", // Shadow for depth
          }}
        >
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle2">Credit</Typography>
              <Iconify
                icon="ri:visa-line"
                sx={{
                  color: theme.palette.background.paper,
                  width: 70,
                  height: 70,
                }}
              />
            </Stack>
            <Box sx={{ my: 5 }} />
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                {/* Holder Name */}
                <Typography
                  variant="subtitle1"
                  color={theme.palette.background.paper}
                  sx={{ textTransform: "uppercase" }}
                >
                  {cardFullname}
                </Typography>
                {/* Card Number */}
                <Box sx={{ my: 0 }}>
                  <Stack direction="row" alignItems="center" gap={1}>
                    {mappedCardNumber.map((segment, index) => (
                      <Typography
                        key={index}
                        variant="h4"
                        color={theme.palette.background.paper}
                      >
                        {segment}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
              <Stack alignItems="center">
                <Typography variant="subtitle1">Exp Date</Typography>
                <Typography variant="subtitle2">{expDate}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>

        {/* Back Side */}
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // px: 3,
            py: 3,
            borderRadius: 3,
            backfaceVisibility: "hidden",
            transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            transition: "transform 0.6s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background:
              "url(https://img.freepik.com/free-vector/elegant-damask-style-pattern-background_1048-11129.jpg?uid=R26163149&ga=GA1.1.1408219499.1731794018&semt=ais_hybrid)",
            boxShadow: isFlipped
              ? "0 15px 30px rgba(0, 0, 0, 0.3)"
              : "0 10px 20px rgba(0, 0, 0, 0.2)", // Shadow for depth
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 30,
              background: theme.palette.grey[600],
              mb: 3,
            }}
          />
          <Stack
            sx={{ mt: 8, px: 3 }}
            direction="row"
            justifyContent="flex-end"
            px={3}
          >
            <Stack alignItems="center" gap={1}>
              <Typography color={theme.palette.grey[100]} variant="subtitle1">
                CVV
              </Typography>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: alpha(theme.palette.grey[100], 0.3),
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                }}
              >
                <Typography color={theme.palette.grey[100]}>{cvv}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
}

export default CreditCardModel;
