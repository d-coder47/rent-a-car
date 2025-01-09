import {
  Avatar,
  Box,
  Button,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/heroImage.jpg";
import heroCar from "../../assets/heroCar.png";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const navigate = useNavigate();

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
      color: "#ffffff",
      marginTop: "50px",
      textTransform: "none",
      zIndex: 1000,
      background: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
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
          marginTop: "100px",
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

          <Button variant="contained" sx={typographyStyle.cta}>
            <a
              href="/reservation"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography variant="body1">{t("homepage.hero.cta")}</Typography>
            </a>
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
        <Slide in={true} appear={true} timeout={2000} direction="left">
          <Avatar
            alt="car image"
            src={heroCar}
            sx={{
              width: "800px",
              height: "412px",
              borderRadius: 0,
              marginTop: "-12rem",
              position: "absolute",
              zIndex: 99,
              left: 0,
              right: 0,
              margin: "-12rem auto 0 auto",
            }}
          />
        </Slide>
        <Avatar
          alt="car image"
          src={heroImage}
          sx={{
            width: "100%",
            height: "258px",
            borderRadius: 0,
            marginTop: "10rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
