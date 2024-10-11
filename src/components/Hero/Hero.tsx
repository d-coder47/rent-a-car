import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const typographyStyle = {
    headline: {
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "justify",
        xl: "justify",
      },
      color: "#ffffff",
    },
    subheadline: {
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "justify",
        xl: "justify",
      },
      color: "#ffffff",
      marginTop: "36px",
      fontWeight: 700,
    },
    cta: {
      height: "50px",
      borderRadius: "12px",
      textAlign: "justify",
      color: "#ffffff",
      marginTop: "30px",

      textTransform: "none",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#ffffff !important",
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/src/assets/car.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: {
          xs: "600px",
          sm: "700px",
          md: "800px",
          lg: "700px",
          xl: "880px",
        },
        width: "100%",

        boxShadow: "inset 0 0 0 2000px rgb(0, 0, 0, 0.7)",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
          marginTop: "7%",
        }}
      >
        <Box
          sx={{
            width: "75%",

            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "block",
              xl: "block",
            },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              marginLeft: {
                xs: "0px",
                sm: "0px",
                md: "0px",
                lg: "60px",
                xl: "60px",
              },
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "block",
                xl: "block",
              },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1" sx={typographyStyle.headline}>
              {t("homepage.hero.headline")}
            </Typography>

            <Typography variant="subtitle1" sx={typographyStyle.subheadline}>
              {t("homepage.hero.subheadline")}
            </Typography>

            <Button
              variant="contained"
              sx={typographyStyle.cta}
              disableElevation={true}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                }}
              >
                {t("homepage.hero.cta")}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
