"use client";
import React from "react";
// formik
import { useFormik } from "formik";
// Yup
import * as Yup from "yup";
// @Mui
import {
  Box,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import MUIPhoneNumberInput from "./MUIPhoneNumberInput";
// __apis__
import { inquiryRequester } from "@/__apis__/inquires";
// recoil
import { useSetRecoilState } from "recoil";
// atoms
import alertAtom from "@/recoil/atoms/alertAtom";
// components
import Iconify from "./Iconify";
import useLocales from "@/hooks/useLocales";

// -------------------------------------------------------------------

function ContactUsForm() {
  const triggerAlert = useSetRecoilState(alertAtom);

  const { translate, currentLang } = useLocales();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: async (values, { resetForm }) => {
      await inquiryRequester(values)
        .then((response) => {
          triggerAlert({
            triggered: true,
            type: "success",
            message:
              "We received your inquiry, We will get back to you shortly",
          });
          resetForm();
        })
        .catch((error) => {
          triggerAlert({
            triggered: true,
            type: "error",
            message: "Something wrong happened",
          });
        });
    },
  });

  const {
    errors,
    values,
    getFieldProps,
    setFieldValue,
    isSubmitting,
    dirty,
    handleSubmit,
    touched,
  } = formik;

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label={translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.fields.firstName"
            )}
            value={values.firstName}
            onChange={(event) => setFieldValue("firstName", event.target.value)}
            {...getFieldProps("firstName")}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.fields.lastName"
            )}
            value={values.lastName}
            onChange={(event) => setFieldValue("lastName", event.target.value)}
            {...getFieldProps("lastName")}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.fields.email"
            )}
            value={values.email}
            onChange={(event) => setFieldValue("email", event.target.value)}
            {...getFieldProps("email")}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify sx={{ width: 25, height: 25 }} icon="mage:email" />
                  </InputAdornment>
                ),
              },
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MUIPhoneNumberInput
            {...getFieldProps("phoneNumber")}
            value={values.phoneNumber}
            setValueHandler={(value) =>
              setFieldValue("phoneNumber", `${value}`)
            }
            label={translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.fields.phoneNumber"
            )}
          />
          <FormHelperText error>
            {Boolean(touched.phoneNumber) && errors.phoneNumber}
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.fields.message"
            )}
            fullWidth
            multiline
            rows={4}
            value={values.message}
            onChange={(event) => setFieldValue("message", event.target.value)}
            {...getFieldProps("message")}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            onClick={handleSubmit}
            loading={isSubmitting}
            disabled={!dirty}
            variant="contained"
            sx={{ float: "right", ml: currentLang.value === "ar" ? -3 : 0 }}
            size="large"
            endIcon={
              <Iconify
                icon="iconamoon:send-fill"
                sx={{
                  mr: currentLang.value === "ar" ? 1 : 0,
                  transform:
                    currentLang.value === "ar" ? "rotate(180deg)" : "none",
                }}
              />
            }
          >
            {translate(
              "pagesTranslations.contactUsPageTranslations.contactUsForm.actionButton"
            )}
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUsForm;
