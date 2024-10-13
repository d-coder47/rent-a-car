import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

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
        height: {
          xs: "700px",
          sm: "700px",
          md: "700px",
          lg: "783px",
          xl: "783px",
        },
        width: "100%",
        backgroundImage: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: 'url("/src/assets/heroBackground.png")',
          xl: 'url("/src/assets/heroBackground.png")',
        },
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "50%",
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
      </Box>
    </Box>
  );
};

export default Hero;
