"use client";
import React, { useEffect, useState } from "react";
// @Mui
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
// atoms
import { selectPackagePopUpAtom } from "@/recoil";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
// components
import Iconify from "../Iconify";
import useLocales from "@/hooks/useLocales";

function PaymentOptions({ formik }) {
  const { setFieldValue } = formik;

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    setFieldValue("paymentMethod", paymentMethod);
  }, [paymentMethod]);

  const userIpRegion = useRecoilValue(userIpRegionAtom);
  const { translate, currentLang } = useLocales();
  const [popUp, setPopUp] = useRecoilState(selectPackagePopUpAtom);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            boxShadow: 20,
            border: 2,
            borderColor: paymentMethod === "card" ? "primary.main" : "grey.0",
            cursor: "pointer",
          }}
          onClick={() => setPaymentMethod("card")}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" gap={1}>
              <Iconify
                sx={{ fontSize: 30 }}
                icon="mingcute:bank-card-line"
                color="primary.main"
              />
              <Typography variant="subtitle1">
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.bank"
                )}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            boxShadow: 20,
            border: 2,
            borderColor:
              paymentMethod === "instaPay" ? "primary.main" : "grey.0",
            cursor: "pointer",
          }}
          onClick={() => setPaymentMethod("instaPay")}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" gap={1}>
              <Iconify
                sx={{ fontSize: 30 }}
                icon="arcticons:instapay"
                color="#481470"
              />
              <Typography variant="subtitle1">
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.instaPay"
                )}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            boxShadow: 20,
            border: 2,
            borderColor:
              paymentMethod === "vodafone" ? "primary.main" : "grey.0",
            cursor: "pointer",
          }}
          onClick={() => setPaymentMethod("vodafone")}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" gap={1}>
              <Iconify
                sx={{ fontSize: 30 }}
                icon="simple-icons:vodafone"
                color="error.main"
              />
              <Typography variant="subtitle1">
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.vodafone"
                )}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {(paymentMethod === "instaPay" || paymentMethod === "vodafone") && (
          <Card sx={{ boxShadow: 20 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" gap={1}>
                {paymentMethod === "instaPay" ? (
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Iconify
                      sx={{ fontSize: 40 }}
                      icon="arcticons:instapay"
                      color="#481470"
                    />
                    <Typography variant="h5">
                      {translate(
                        "componentsTranslations.selectPackage.paymentOptions.instaPay"
                      )}
                    </Typography>
                  </Stack>
                ) : (
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Iconify
                      sx={{ fontSize: 40 }}
                      icon="simple-icons:vodafone"
                      color="error.main"
                    />
                    <Typography variant="h5">
                      {translate(
                        "componentsTranslations.selectPackage.paymentOptions.vodafone"
                      )}
                    </Typography>
                  </Stack>
                )}
              </Stack>
              <Typography variant="subtitle2" sx={{ mt: 2 }}>
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.description.part1"
                )}{" "}
                {popUp.price} {userIpRegion === "EG" ? "EGP" : "USD"}{" "}
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.description.part2"
                )}{" "}
                {paymentMethod === "instaPay" ? "01064057657" : "01093239931"}{" "}
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.description.part3"
                )}{" "}
                {paymentMethod === "instaPay"
                  ? translate(
                      "componentsTranslations.selectPackage.paymentOptions.instaPay"
                    )
                  : translate(
                      "componentsTranslations.selectPackage.paymentOptions.vodafone"
                    )}
                .{" "}
                {translate(
                  "componentsTranslations.selectPackage.paymentOptions.description.part4"
                )}
                <Button
                  onClick={() => {
                    window.location.href = "https://wa.link/z7k13k";
                  }}
                  sx={{
                    color: "primary.main",
                    textDecoration: "underline",
                    direction: "ltr",
                  }}
                >
                  +20 109-323-99-31
                </Button>
                .
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}

export default PaymentOptions;
