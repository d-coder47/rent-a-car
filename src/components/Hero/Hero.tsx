import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const typographyStyle = {
    headline: {
      fontFamily: "Istok Web",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: {
        xs: "22px",
        sm: "22px",
        md: "32px ",
        lg: "36px ",
        xl: "48px",
      },
      lineHeight: {
        xs: "32px",
        sm: "32px",
        md: "58px",
        lg: "58px",
        xl: "58px",
      },
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
      fontFamily: "Istok Web",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: {
        xs: "16px",
        sm: "16px",
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
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#FFFFFF",
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
          width: "100%",
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
            width: "75%",
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
          <Typography sx={typographyStyle.headline}>
            {t("homepage.hero.headline")}
          </Typography>

          <Typography sx={typographyStyle.subheadline}>
            {t("homepage.hero.subheadline")}
          </Typography>

          <Button
            variant="contained"
            sx={typographyStyle.cta}
            disableElevation={true}
          >
            {t("homepage.hero.cta")}
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
          width: "65%",
        }}
      >
        image
      </Box>
    </Box>
  );
};

export default Hero;
