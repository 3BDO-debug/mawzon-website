"use client";
import React from "react";
// @Mui
import { Grid, TextField, FormHelperText, Box } from "@mui/material";
import MUIPhoneNumberInput from "../MUIPhoneNumberInput";
import useLocales from "@/hooks/useLocales";

// -------------------------------------------------------------------------------

function GeneralInfo({ formik }) {
  const { errors, values, getFieldProps, setFieldValue, touched } = formik;

  const { translate, currentLang } = useLocales();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label={translate(
            "componentsTranslations.selectPackage.generalInfo.fullname"
          )}
          value={values.fullName}
          onChange={(event) => setFieldValue("fullName", event.target.value)}
          {...getFieldProps("fullName")}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <MUIPhoneNumberInput
          value={values.phoneNumber}
          setValueHandler={(value) => setFieldValue("phoneNumber", `${value}`)}
          label={translate(
            "componentsTranslations.selectPackage.generalInfo.phoneNumber"
          )}
        />
        <FormHelperText error>
          {Boolean(touched.phoneNumber) && errors.phoneNumber}
        </FormHelperText>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={translate(
            "componentsTranslations.selectPackage.generalInfo.email"
          )}
          value={values.email}
          onChange={(event) => setFieldValue("email", event.target.value)}
          {...getFieldProps("email")}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default GeneralInfo;
