import React from "react";
// @Mui
import { Box, Container, Grid, Stack, Typography, Card } from "@mui/material";

// -----------------------------------------------------------------------------------

function AccountClosurePage() {
  return (
    <Box sx={{ py: "4", px: "4" }}>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="overline">Terms & Conditions</Typography>
        <Typography variant="h2" align="center">
          Account Closure
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "left", md: "center" },
            px: { xs: 2, md: 38 },
          }}
        >
          We value your time with Mawzon, but if you decide to close your
          account, we’ve made the process straightforward. Please note the
          following important details regarding account closure.
        </Typography>
      </Stack>
      <Grid container spacing={4} sx={{ px: 6 }}>
        <Grid item xs={12} md={7}>
          <Card sx={{ py: 2, px: 6, my: 4 }}>
            <Typography variant="h4" sx={{ color: "#D93053" }}>
              How to Close Your Account:
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              To request account closure, please email support@mawzon.com from
              the email associated with your account.
            </Typography>

            <Typography component="li" sx={{ mt: 2 }}>
              You may also close your account through the “Settings” section of
              your profile dashboard, where the option to deactivate and close
              your account is available.
            </Typography>
          </Card>
          <Card sx={{ py: 2, px: 6, mb: 4 }}>
            <Typography variant="h4" sx={{ color: "#D93053" }}>
              What Happens to Your Data:
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              Data Retention: After account closure, we will retain your
              personal and service data for up to 30 days to allow for potential
              account reactivation or legal inquiries. After this period, all
              personal data will be permanently deleted from our servers unless
              otherwise required by law.
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              Service Access: Once your account is closed, you will no longer
              have access to any services, workout plans, or nutrition data
              stored on your account.
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              Subscription Cancellation: If you are subscribed to any ongoing
              service, the subscription will automatically terminate upon
              account closure, and no further charges will be made.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ py: 2, px: 6, my: 4 }}>
            <Typography variant="h4" sx={{ color: "#D93053" }}>
              Reactivating Your Account:
            </Typography>
            <Typography component="li" sx={{ mt: 2 }}>
              If you wish to reactivate your account within the 30-day window
              after closure, contact our support team. After this period,
              reactivation will not be possible, and you will need to create a
              new account.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AccountClosurePage;
