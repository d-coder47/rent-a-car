import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FormatQuote, Star } from "@mui/icons-material";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 500,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "anonimous",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classification: 3,
    },
    {
      name: "anonimous",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classification: 4,
    },
    {
      name: "anonimous",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classification: 5,
    },
    {
      name: "anonimous",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classification: 5,
    },
    {
      name: "anonimous",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classification: 3,
    },
  ];

  return (
    <Box
      sx={{
        background: "#F4F4F4",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          marginTop: "35px",
        }}
        variant="h2"
      >
        {t("homepage.testimonials.title")}
      </Typography>

      <Box
        className="testimonials_carrossel"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: {
            xs: "20px",
            sm: "60px",
            md: "70px",
            lg: "100px",
            xl: "110px",
          },
          marginBottom: {
            xs: "40px",
            sm: "110px",
            md: "120px",
            lg: "110px",
            xl: "150px",
          },
        }}
      >
        <Box
          className="slider-container"
          sx={{
            width: "90%",
          }}
        >
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "303px",
                  height: "368px",
                  display: "flex !important",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormatQuote
                  fontSize="large"
                  sx={{
                    color: theme.palette.secondary.main,
                    marginBottom: "30px",
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    marginBottom: "30px",
                    textAlign: "center",
                    color: "#4f4c4c",
                  }}
                >
                  {item.testimonial}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{
                    marginBottom: "10px",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      sx={{
                        color:
                          index + 1 <= item.classification
                            ? "#FE9E00"
                            : "#D9D9D9",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
