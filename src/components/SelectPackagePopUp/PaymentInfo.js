"use client";
import React, { useState } from "react";
// @Mui
import { Grid, InputAdornment, TextField } from "@mui/material";
//
import CreditCardModel from "./CreditCardModel";
import Iconify from "../Iconify";

// --------------------------------------------------------------------------

function PaymentInfo({ formik }) {
  const [cardFlipped, setCardFlipped] = useState(false);

  const { errors, getFieldProps, setFieldValue, touched, values } = formik;

  const handleExpirationDateChange = (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (input.length > 4) input = input.slice(0, 4); // Limit input to 4 characters

    // Automatically add the slash for MM/YY format
    if (input.length >= 3) {
      input = `${input.slice(0, 2)}/${input.slice(2)}`;
    }
    setFieldValue("expirationDate", input);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CreditCardModel
          isFlipped={cardFlipped}
          cardFullname={values.cardHolderName}
          cardNumber={values.cardNumber || "1111222233334444"}
          expDate={values.expirationDate}
          cvv={values.cvv}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onClick={() => setCardFlipped(false)}
          label="Card Holder Name"
          value={values.cardHolderName}
          onChange={(event) =>
            setFieldValue("cardHolderName", event.target.value)
          }
          {...getFieldProps("cardHolderName")}
          error={touched.cardHolderName && Boolean(errors.cardHolderName)}
          helperText={touched.cardHolderName && errors.cardHolderName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onClick={() => setCardFlipped(false)}
          label="Card Number"
          value={values.cardNumber}
          onChange={(event) => setFieldValue("cardNumber", event.target.value)}
          {...getFieldProps("cardNumber")}
          error={touched.cardNumber && Boolean(errors.cardNumber)}
          helperText={touched.cardNumber && errors.cardNumber}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Iconify
                    sx={{ width: 30, height: 30 }}
                    icon="majesticons:creditcard"
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          onClick={() => setCardFlipped(false)}
          label="Expiration Date"
          value={values.expirationDate}
          onChange={handleExpirationDateChange}
          error={touched.expirationDate && Boolean(errors.expirationDate)}
          helperText={touched.expirationDate && errors.expirationDate}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          onClick={() => setCardFlipped(true)}
          label="CVV"
          value={values.cvv}
          onChange={(event) => setFieldValue("cvv", event.target.value)}
          {...getFieldProps("cvv")}
          error={touched.cvv && Boolean(errors.cvv)}
          helperText={touched.cvv && errors.cvv}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default PaymentInfo;
