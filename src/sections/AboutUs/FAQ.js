"use client";
import React from "react";
// @Mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// lottie-react
import Lottie from "lottie-react";
// assets
import faqsAnimation from "@/assets/animations/faqs.json";
//
import Iconify from "@/components/Iconify";
import useLocales from "@/hooks/useLocales";

// -------------------------------------------------------------

function FAQ() {
  const { translate } = useLocales();

  const faq = [
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.1.question"
      ),
      content: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.1.answer"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.2.question"
      ),
      content: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.2.answer"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.3.question"
      ),
      content: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.3.answer"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.4.question"
      ),
      content: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.4.answer"
      ),
    },
    {
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.5.question"
      ),
      content: translate(
        "pagesTranslations.aboutUsPageTranslations.faq.5.answer"
      ),
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} md={6}>
            <Grid item xs={12}>
              <Typography variant="overline">
                {translate(
                  "pagesTranslations.aboutUsPageTranslations.faq.title"
                )}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2">
                {translate(
                  "pagesTranslations.aboutUsPageTranslations.faq.subtitle"
                )}
              </Typography>
              <Typography variant="h2">
                {translate(
                  "pagesTranslations.aboutUsPageTranslations.faq.subtitle2"
                )}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mt: 4 }}>
                {faq.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<Iconify icon="ic:baseline-plus" />}
                    >
                      <Typography variant="h6">{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ whiteSpace: "pre-line" }}>
                        {item.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Lottie
                style={{ width: 400 }}
                animationData={faqsAnimation}
                autoPlay
                loop
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FAQ;
