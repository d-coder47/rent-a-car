import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const typographyStyle = {
    headline: {
      fontFamily: "Istok Web",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: {
        xs: "32px ",
        sm: "32px ",
        md: "32px ",
        lg: "36px ",
        xl: "48px",
      },
      lineHeight: "58px",
      textAlign: "justify",
      color: "#000000",
    },
    subheadline: {
      fontFamily: "Istok Web",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: {
        xs: "18px",
        sm: "18px",
        md: "18px",
        lg: "20px",
        xl: "24px",
      },
      lineHeight: "36px",
      textAlign: "justify",
      color: "#000000",
      marginTop: "36px",
    },
    cta: {
      height: "50px",
      borderRadius: "12px",
      fontFamily: "Istok Web",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: {
        xs: "16px",
        sm: "16px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      lineHeight: "28px",
      textAlign: "justify",
      color: "#000000",
      marginTop: "50px",
      textTransform: "none",
    },
  };
  return (
    <Box
      sx={{
        height: "922px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          // background: {
          //   xs: "red",
          //   sm: "blue",
          //   md: "green",
          //   lg: "yellow",
          //   xl: "violet",
          // },
        }}
      >
        <Box
          sx={{
            marginLeft: "60px",
            width: "75%",
          }}
        >
          <Typography sx={typographyStyle.headline}>
            {t("homepage.hero.headline")}
          </Typography>

          <Typography sx={typographyStyle.subheadline}>
            {t("homepage.hero.subheadline")}
          </Typography>

          <Button variant="contained" sx={typographyStyle.cta}>
            {t("homepage.hero.cta")}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "65%",
        }}
      >
        image
      </Box>
    </Box>
  );
};

export default Hero;
