"use client";
import React, { useCallback, useEffect, useState } from "react";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
// Yup
import * as Yup from "yup";
// Formik
import { useFormik } from "formik";
// @Mui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
// __apis__
import { personalTrainingRequester } from "@/__apis__/personalTraining";
// recoil
import { useSetRecoilState } from "recoil";
// atoms
import alertAtom from "@/recoil/atoms/alertAtom";
import { selectPackagePopUpAtom } from "@/recoil";
import userIpRegionAtom from "@/recoil/atoms/userIpRegionAtom";
// components
import Iconify from "../Iconify";
import GeneralInfo from "./GeneralInfo";
import PaymentInfo from "./PaymentInfo";
import { LoadingButton } from "@mui/lab";
import useLocales from "@/hooks/useLocales";
import PaymentOptions from "./PaymentOptions";

// -------------------------------------------------------------------------------

function SelectPackagePopUp() {
  const triggerAlert = useSetRecoilState(alertAtom);

  const [popUp, setPopUp] = useRecoilState(selectPackagePopUpAtom);

  const { translate, currentLang } = useLocales();

  useEffect(() => {
    setFieldValue("planTitle", popUp.title);
    setFieldValue("price", popUp.price);
    setFieldValue("duration", popUp.duration);
    setFieldValue("region", popUp.region);
  }, [popUp]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      planTitle: "",
      duration: "",
      price: "",
      region: "",
      paymentMethod: "",
      // cardHolderName: "",
      // cardNumber: "",
      // expirationDate: "",
      // cvv: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phoneNumber: Yup.string().required("Whatsapp number is required"),
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Email is required"),
      // cardHolderName: Yup.string()
      //   .required("Cardholder name is required")
      //   .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters"),
      // cardNumber: Yup.string()
      //   .required("Card number is required")
      //   .matches(/^\d{16}$/, "Card number must be 16 digits"),
      // expirationDate: Yup.string()
      //   .required("Expiration date is required")
      //   .matches(
      //     /^(0[1-9]|1[0-2])\/\d{2}$/,
      //     "Expiration date must be in MM/YY format"
      //   ),
      // cvv: Yup.string()
      //   .required("CVV is required")
      //   .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await personalTrainingRequester(values)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message: "Your request has been submitted successfully",
          });
          if (values.paymentMethod === "card") {
            window.location.href = response.redirect_url;
          }
          setPopUp({ isTriggered: false });
          resetForm();
          setActiveStep(0);
        })
        .catch((error) => {
          console.log("rrr", error);

          triggerAlert({
            triggered: true,
            type: "error",
            message: "Error submitting request",
          });
        });
    },
  });

  const { handleSubmit, dirty, isSubmitting, values, setFieldValue, errors } =
    formik;

  const [activeStep, setActiveStep] = useState(0);

  const handleClosePopUp = () => {
    setPopUp({ isTriggered: false });
  };

  const renderSteps = useCallback(() => {
    return [
      {
        label: translate(
          "componentsTranslations.selectPackage.generalInfo.title"
        ),
        value: 0,
        component: <GeneralInfo formik={formik} />,
        icon: (
          <Iconify
            sx={{ width: 25, height: 25 }}
            icon="solar:info-circle-broken"
          />
        ),
      },
      {
        label: translate(
          "componentsTranslations.selectPackage.paymentOptions.title"
        ),
        value: 1,
        component: <PaymentOptions formik={formik} />,
        icon: (
          <Iconify
            sx={{ width: 25, height: 25 }}
            icon="majesticons:creditcard-line"
          />
        ),
      },
    ];
  }, [formik]);

  const renderActiveStep = useCallback(() => {
    const activeStepData = renderSteps().find((_) => _.value === activeStep);

    return activeStepData.component;
  }, [activeStep, renderSteps]);

  const handlePrevStep = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveStep((prevState) => prevState + 1);
  }, []);

  return (
    <Dialog open={popUp.isTriggered} onClose={handleClosePopUp} maxWidth="md">
      <DialogTitle>
        {translate("componentsTranslations.selectPackage.title")} {popUp?.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stepper activeStep={activeStep}>
                {renderSteps().map((step, index) => (
                  <Step key={index}>
                    <StepLabel
                      icon={step.icon}
                      sx={{ color: activeStep === index && "primary.main" }}
                    >
                      <Typography
                        color={activeStep === index && "primary.main"}
                        variant="subtitle1"
                      >
                        {step.label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12}>
              {renderActiveStep()}
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep === 0 ? (
          <Button variant="outlined" onClick={handleClosePopUp} color={"error"}>
            {translate(
              "componentsTranslations.selectPackage.actionButtons.cancel"
            )}
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={handlePrevStep}
            startIcon={
              <Iconify
                icon="solar:alt-arrow-left-broken"
                sx={{
                  ml: currentLang.value === "ar" ? 1 : 0,
                  transform:
                    currentLang.value === "ar" ? "rotate(180deg)" : "none",
                }}
              />
            }
          >
            {translate(
              "componentsTranslations.selectPackage.actionButtons.back"
            )}
          </Button>
        )}

        {activeStep === 0 ? (
          <Button
            sx={{ mr: currentLang.value === "ar" ? 1 : 0 }}
            onClick={handleNextStep}
            variant="contained"
            disabled={values.fullName === "" || values.phoneNumber === ""}
            endIcon={
              <Iconify
                icon="solar:alt-arrow-right-broken"
                sx={{
                  mr: currentLang.value === "ar" ? 1 : 0,
                  transform:
                    currentLang.value === "ar" ? "rotate(180deg)" : "none",
                }}
              />
            }
          >
            {translate(
              "componentsTranslations.selectPackage.actionButtons.next"
            )}
          </Button>
        ) : (
          <LoadingButton
            sx={{ mr: currentLang.value === "ar" ? 1 : 0 }}
            onClick={handleSubmit}
            disabled={values.paymentMethod === ""}
            loading={isSubmitting}
            variant="contained"
            endIcon={
              <Iconify
                icon="solar:map-arrow-right-broken"
                sx={{
                  mr: currentLang.value === "ar" ? 1 : 0,
                  transform:
                    currentLang.value === "ar" ? "rotate(180deg)" : "none",
                }}
              />
            }
          >
            {translate(
              "componentsTranslations.selectPackage.actionButtons.submit"
            )}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default SelectPackagePopUp;
