import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/heroImage.svg";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const typographyStyle = {
    headline: {
      textAlign: "center",
      color: "#000000",
    },
    subheadline: {
      textAlign: "center",
      color: "#000000",
      marginTop: "36px",
    },
    cta: {
      height: "50px",
      borderRadius: "12px",
      textAlign: "justify",
      color: "#000000",
      marginTop: "50px",

      textTransform: "none",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#ffffff !important",
      },
    },
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "80%",
            marginTop: "60px",
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
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Avatar
          alt="car image"
          src={heroImage}
          sx={{
            width: "100%",
            height: "423px",
            borderRadius: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
