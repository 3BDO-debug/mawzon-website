"use client";
import React, { useRef, useState } from "react";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// @Mui
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// react-slick
import Iconify from "./Iconify";
import useLocales from "@/hooks/useLocales";

// -----------------------------------------------------------------

const ReviewCard = ({ category, review, avatar, name, index, role }) => {
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
            borderColor: "primary.main",
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
            <Typography color="primary" variant="overline">
              {category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="text.primary"
              className="review-text"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5,
              }}
            >
              {review}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Iconify
              icon="fa6-solid:quote-left"
              sx={{
                float: "right",
                width: 40,
                height: 40,
                color: "secondary.main",
              }}
            />
          </Grid>
          {/* Personal Info */}
          <Grid item xs={12}>
            <Stack direction="row" gap={2} alignItems="center">
              <Avatar src={avatar} sx={{ width: 60, height: 60 }} />
              <Stack>
                <Typography
                  color="grey.600"
                  variant="overline"
                  sx={{ fontSize: "0.6rem" }}
                >
                  {role}
                </Typography>
                <Typography variant="h6">{name}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// -----------------------------------------------------------------

function Reviews() {
  const theme = useTheme();

  const carouselRef = useRef();

  const { translate, currentLang } = useLocales();

  const [currentSlide, setCurrentSlide] = useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const totalSlides = 15; // Total number of slides
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

  const reviewData = [
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.1.review"
      ),
      avatar: "avatars/avatar1.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.1.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.2.review"
      ),
      avatar: "avatars/avatar2.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.2.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.3.review"
      ),
      avatar: "avatars/avatar3.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.3.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.4.review"
      ),
      avatar: "avatars/avatar4.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.4.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.5.review"
      ),
      avatar: "avatars/avatar5.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.5.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.6.review"
      ),
      avatar: "avatars/avatar6.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.6.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.7.review"
      ),
      avatar: "avatars/avatar7.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.7.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.8.review"
      ),
      avatar: "avatars/avatar8.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.8.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.9.review"
      ),
      avatar: "avatars/avatar9.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.9.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.10.review"
      ),
      avatar: "avatars/avatar10.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.10.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.11.review"
      ),
      avatar: "avatars/avatar11.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.11.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.12.review"
      ),
      avatar: "avatars/avatar12.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.12.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.13.review"
      ),
      avatar: "avatars/avatar13.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.13.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.14.review"
      ),
      avatar: "avatars/avatar14.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.14.name"
      ),
      role: "",
    },
    {
      category: "",
      review: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.15.review"
      ),
      avatar: "avatars/avatar15.jpg",
      name: translate(
        "pagesTranslations.homePageTranslations.reviews.reviewsData.15.name"
      ),
      role: "",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: 10, bgcolor: "#dcf6f4" }}>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="overline">
              {translate(
                "pagesTranslations.homePageTranslations.reviews.title"
              )}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "primary.main" }}
          >
            {translate(
              "pagesTranslations.homePageTranslations.reviews.subtitle"
            )}
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "primary.main" }}
          >
            {translate(
              "pagesTranslations.homePageTranslations.reviews.subtitle2"
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Slider ref={carouselRef} {...settings}>
              {reviewData.map((data, index) => (
                <ReviewCard
                  key={index}
                  category={data.category}
                  review={data.review}
                  avatar={data.avatar}
                  name={data.name}
                  role={data.role}
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

export default Reviews;
