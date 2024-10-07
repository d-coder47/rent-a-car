import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import carImage from "../../assets/car.png";

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
      color: "#000000",
    },
    subheadline: {
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "justify",
        xl: "justify",
      },
      color: "#000000",
      marginTop: "36px",
    },
    cta: {
      height: "50px",
      borderRadius: "12px",
      textAlign: "justify",
      color: "#000000",
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
        display: "flex",
        flexDirection: "row",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
          xl: "space-between",
        },

        marginTop: "5%",
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
            <Typography variant="body1">{t("homepage.hero.cta")}</Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          width: {
            xs: "73%",
            sm: "73%",
            md: "73%",
            lg: "76%",
            xl: "100%",
          },
          overflow: "hidden",
        }}
      >
        <Avatar
          alt="car image"
          src={carImage}
          sx={{
            width: "auto",
            height: {
              xs: "50%",
              sm: "50%",
              md: "50%",
              lg: "58%",
              xl: "75%",
            },
            borderRadius: "0px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
