import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import mindelo from "../../assets/mindelo.png";

const About: React.FC = () => {
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
      marginTop: {
        xs: "30px",
        sm: "30px",
        md: "30px",
        lg: "0px",
        xl: "0px",
      },
    },
    subheadline: {
      textAlign: "justify",
      color: "#000",
      marginTop: "36px",
    },
    cta: {
      height: "50px",
      width: "250px",
      borderRadius: "12px",
      textAlign: "justify",
      color: "#ffffff",
      marginTop: {
        xs: "30px",
        sm: "30px",
        md: "30px",
        lg: "50px",
        xl: "50px",
      },
      textTransform: "none",
      background: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        color: "#FFFFFF",
      },
    },
  };

  return (
    <Box
      sx={{
        height: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "460px",
          xl: "460px",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
          xl: "space-between",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "55%",
            xl: "55%",
          },
          height: {
            xs: "100%",
            sm: "100%",
            md: "400px",
            lg: "100%",
            xl: "100%",
          },
        }}
      >
        <Avatar
          alt="mindelo image"
          sx={{ width: "100%", height: "100%", borderRadius: "0px" }}
          src={mindelo}
        />
      </Box>
      <Box
        sx={{
          background: theme.palette.primary.main,
          width: "100%",
          height: {
            xs: "350px",
            sm: "350px",
            md: "350px",
            lg: "100%",
            xl: "100%",
          },
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
            xl: "left",
          },
        }}
      >
        <Box
          sx={{
            width: "85%",
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "80%",
              xl: "80%",
            },
            margin: {
              xs: "0px 0px 10px 0px",
              sm: "0px 0px 10px 0px",
              md: "0px 0px 10px 0px",
              lg: "80px 20px 20px 50px",
              xl: "80px 20px 20px 50px",
            },

            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "block",
              xl: "block",
            },
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={typographyStyle.headline} variant="h2">
            {" "}
            {t("homepage.about.headline")}
          </Typography>
          <Typography sx={typographyStyle.subheadline} variant="body1">
            {t("homepage.about.subheadline")}
          </Typography>
          <Button sx={typographyStyle.cta}>
            <Typography variant="body1">{t("homepage.about.cta")}</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
