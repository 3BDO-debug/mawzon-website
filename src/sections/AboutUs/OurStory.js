"use client";
import React, { useRef, useState } from "react";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// @Mui
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Paper,
} from "@mui/material";
import Image from "next/image";
// assets
import cer2019 from "../../../public/certificates/2019.jpg";
import cer2021 from "../../../public/certificates/early-2021.jpg";
import oct2021 from "../../../public/certificates/oct-2021.jpg";
import mar2022 from "../../../public/certificates/mar-2022.jpg";
import nov2022 from "../../../public/certificates/nov-2022.jpg";
import cer2023 from "../../../public/certificates/2023.jpg";
import grad from "../../../public/certificates/Grad.jpg";
// components
import useLocales from "@/hooks/useLocales";
import { useTheme } from "@emotion/react";
import Iconify from "@/components/Iconify";

// ------------------------------------------------------------

const CertificateCard = ({ title, img }) => {
  return (
    <Box sx={{ px: 5, py: 3 }}>
      <Paper
        sx={{
          // bgcolor: "#dcf6f4",
          px: 3,
          py: 4,
          borderRadius: 7,
          position: "relative",
          "&:hover": {
            border: 1,
            borderColor: "secondary.main",
            "& .certificate-image": {
              height: "auto", // Make image height auto on hover
            },
            "& .review-text": {
              WebkitLineClamp: "unset",
              overflow: "visible",
              whiteSpace: "normal",
            },
          },
        }}
        elevation={20}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Image
              className="certificate-image"
              src={img}
              alt="certificate"
              width={500}
              height={300}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// -----------------------------------------------------------------

function OurStory() {
  const theme = useTheme();

  const carouselRef = useRef();

  const { translate, currentLang } = useLocales();

  const [currentSlide, setCurrentSlide] = useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const totalSlides = 7; // Total number of slides
  const slidesToShow = isMobile ? 1 : 3; // Number of slides shown in the carousel

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    afterChange: (current) => setCurrentSlide(current),
  };

  const indicatorWidth = 150;
  const slideWidth = indicatorWidth / slidesToShow;
  const translateX =
    currentLang.value === "ar"
      ? -(currentSlide % slidesToShow) * slideWidth // Negative value for "ar"
      : (currentSlide % slidesToShow) * slideWidth; // Default positive value

  const story = [
    {
      label: "2019",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.1.title"
      ),
      color: "primary.main",
      img: cer2019,
    },
    {
      label: "2021",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.2.title"
      ),
      color: "#9400FF",
      img: cer2021,
    },
    {
      label: "OCT - 2021",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.3.title"
      ),
      color: "#FFAB00",
      img: oct2021,
    },
    {
      label: "MAR - 2022",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.4.title"
      ),
      color: "#22C55E",
      img: mar2022,
    },
    {
      label: "NOV - 2022",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.5.title"
      ),
      color: "#FF4500",
      img: nov2022,
    },
    {
      label: "2023",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.6.title"
      ),
      color: "#1E90FF",
      img: cer2023,
    },
    {
      label: "2022",
      title: translate(
        "pagesTranslations.aboutUsPageTranslations.ourStory.timeline.7.title"
      ),
      color: "#1E90FF",
      img: grad,
    },
  ];

  return (
    // <Box sx={{ pt: 8 }}>
    //   <Container>
    //     <Grid container spacing={0}>
    //       <Grid item xs={12}>
    //         <Typography variant="overline">
    //           {translate(
    //             "pagesTranslations.aboutUsPageTranslations.ourStory.title"
    //           )}
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Typography variant="h2">
    //           {translate(
    //             "pagesTranslations.aboutUsPageTranslations.ourStory.subtitle"
    //           )}
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Stack direction="row" mt={6} justifyContent="center">
    //           <Timeline position="alternate">
    //             {story.map((_, index) => (
    //               <TimelineItem key={index}>
    //                 <TimelineSeparator>
    //                   <TimelineConnector />
    //                   <TimelineDot sx={{ bgcolor: _.color }} />
    //                 </TimelineSeparator>
    //                 <TimelineContent sx={{ mb: 8 }}>
    //                   <Typography variant="subtitle2" sx={{ color: _.color }}>
    //                     {_.label}
    //                   </Typography>
    //                   <Typography variant="h6" sx={{ py: 1 }}>
    //                     {_.title}
    //                   </Typography>
    //                   <Typography variant="body2" sx={{ mt: 1 }}>
    //                     {_.description}
    //                   </Typography>
    //                   <Image
    //                     src={_.img} // Path to the image (absolute URL or public folder path)
    //                     alt="certificate"
    //                     width={500} // Replace with the desired width
    //                     height={300} // Replace with the desired height
    //                     style={{ width: "100%", height: "auto" }} // Ensure responsiveness
    //                     priority // Optional: Ensures immediate loading for important images
    //                   />
    //                 </TimelineContent>
    //               </TimelineItem>
    //             ))}
    //           </Timeline>
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
    <Box sx={{ width: "100%", py: 10 }}>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="overline">
              {translate(
                "pagesTranslations.aboutUsPageTranslations.ourStory.title"
              )}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "primary.main", mt: 2 }}
          >
            {translate(
              "pagesTranslations.aboutUsPageTranslations.ourStory.subtitle"
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Slider ref={carouselRef} {...settings}>
              {story.map((data, index) => (
                <CertificateCard
                  key={index}
                  title={data.title}
                  img={data.img}
                />
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack
            justifyContent="center"
            direction="row"
            width="100%"
            marginTop={6}
          >
            {/* Left Arrow */}
            <IconButton
              disabled={currentSlide === 0}
              onClick={() => carouselRef?.current.slickPrev()}
            >
              <Iconify
                icon={
                  currentLang.value === "ar"
                    ? "iconamoon:arrow-right-2-light"
                    : "iconamoon:arrow-left-2-light"
                }
                sx={{
                  width: currentSlide === 0 ? 25 : 40,
                  height: currentSlide === 0 ? 25 : 40,
                  transition: "all 0.7s ease-out",
                }}
              />
            </IconButton>
            {/* Indicator */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ ml: 2, mb: 1 }} variant="subtitle1">
                {currentSlide + 1} / {totalSlides}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "grey.400",
                  borderRadius: 1,
                  width: indicatorWidth,
                  height: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "grey.800",
                    borderRadius: 3,
                    width: `${slideWidth}px`,
                    height: 3,
                    transform: `translateX(${translateX}px)`,
                    transition: "all 0.7s ease-out",
                  }}
                />
              </Box>
            </Box>
            {/* Right Arrow */}
            <IconButton
              disabled={currentSlide + 1 === totalSlides}
              onClick={() => carouselRef?.current.slickNext()}
            >
              <Iconify
                icon={
                  currentLang.value === "ar"
                    ? "iconamoon:arrow-left-2-light"
                    : "iconamoon:arrow-right-2-light"
                }
                sx={{
                  width: currentSlide === totalSlides - 1 ? 25 : 40,
                  height: currentSlide === totalSlides - 1 ? 25 : 40,
                  transition: "all 0.7s ease-out",
                }}
              />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurStory;
