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
import {
  createSubscriptionRequest,
  personalTrainingRequester,
} from "@/__apis__/personalTraining";
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
      price: "",
      region: "",
      paymentMethod: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phoneNumber: Yup.string().required("Whatsapp number is required"),
    }),
    onSubmit: async (values) => {
      await personalTrainingRequester({
        ...values,
        duration: popUp.duration === 1 ? "1-month" : "3-months",
      })
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
          setActiveStep(0);
          createSubscription();
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

  const {
    handleSubmit,
    dirty,
    isSubmitting,
    values,
    setFieldValue,
    errors,
    resetForm,
  } = formik;

  const createSubscription = useCallback(async () => {
    const parts = values.fullName.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ");
    const formData = new FormData();
    formData.append("related_team", "2");
    formData.append("first_name", firstName);
    formData.append("last_name", lastName || "");
    formData.append("phone_number", values.phoneNumber);
    formData.append("email", values.email);
    formData.append("status", "initial-subscription");
    formData.append("related_package", popUp.relatedPackage);
    formData.append("related_package_price", popUp.relatedPackagePrice);
    formData.append("country_code", popUp.region.toLowerCase());
    formData.append("price", popUp.price);
    formData.append("currency", popUp.region === "EG" ? "EGP" : "USD");
    formData.append("duration", popUp.duration);
    formData.append("duration_unit", "month");
    formData.append("payment_option", "payment-gateway");
    await createSubscriptionRequest(formData)
      .then((response) => {
        triggerAlert({
          triggered: true,
          type: "success",
          message: "Subscription created successfully",
        });
      })
      .catch((error) => {
        console.log("error", error);
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error creating subscription",
        });
      })
      .finally(() => {
        resetForm();
      }, []);
  }, [popUp, values]);

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
