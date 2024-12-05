import React from 'react';
// @Mui
import { Box, Container, Grid, Stack, Typography, Card } from "@mui/material";


function ServicesSuspensionPage() {
  return (

    <Box sx={{py:'4', px:'4'}}>
    <Stack   sx={{
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                }}
                >
    <Typography variant="overline">Terms & Conditions</Typography>
    <Typography variant="h2" align="center">
                Service Suspension
              </Typography>
              <Typography a variant='h6' sx={{ textAlign: { xs: 'left', md: 'center' }, px: { xs: 2, md: 38 },}}>
              Mawzon reserves the right to suspend services under certain conditions. 
              The following outlines the circumstances under which service
              suspension may occur and how it impacts your account.</Typography>
    </Stack>
    <Grid container spacing={4} sx={{px:6}} >
    <Grid item xs={12} md={7}>
    
      <Card sx={{py: 2, px:6, my:4}}>
        <Typography variant='h4' sx={{color:'#D93053'}}>
        When Services May Be Suspended:
        </Typography>
        <Typography component="li" sx={{mt:2}}>
        Violation of Terms: If a user violates our terms of service, including but not limited to misuse of our platform,providing false information, or abusive behavior towards our staff, we reserve the right to suspend access to services.
        </Typography>

        <Typography component="li" sx={{mt:2}}>
        Non-Payment: Failure to make timely payments for ongoing services may result in suspension 
        of access until payment issues are resolved.
        </Typography>

        <Typography component="li" sx={{mt:2}}>
        Security Concerns: If we detect unusual activity or suspect that your account has been compromised,we may temporarily suspend access to investigate and resolve the issue.
        </Typography>
      </Card>
      <Card sx={{py: 2, px:6, mb:4}}>
        <Typography variant='h4'sx={{color:'#D93053'}}>
        Impact of Service Suspension:

        </Typography>
        <Typography component="li" sx={{mt:2}}>
        During the suspension, you will not be able to access your personalized plans,progress data, or any other premium features.
        </Typography>
        <Typography component="li" sx={{mt:2}}>
        You will still retain access to basic account settings, 
        allowing you to address any issues that may have led to the suspension
        (e.g., payment failures or updating personal details).
        </Typography>

        
      </Card>
    </Grid> 
    <Grid item xs={12} md={5}>
    <Card sx={{py: 2, px:6, my:4}}>
        <Typography variant='h4' sx={{color:'#D93053'}}>
        Reinstating Services:
        </Typography>
        <Typography component="li" sx={{mt:2}}>
        Services will be reinstated upon resolution of the issue that led to suspension.
        In the case of non-payment, services will be resumed once the overdue balance is cleared.
        </Typography>
        <Typography component="li" sx={{mt:2}}>
        If suspension was due to terms of service violations, reinstatement 
        will be at the discretion of Mawzon management following a review.
        </Typography>

        
      </Card>
      </Grid>
    </Grid>           
    
    </Box>

  )
}

export default ServicesSuspensionPage