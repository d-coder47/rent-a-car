import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const typographyStyle = {
    headline: {
      textAlign: "center",
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
        marginTop: {
          xs: "5%",
          sm: "5%",
          md: "5%",
          lg: "0%",
          xl: "0%",
        },
      }}
    >
      <Box
        sx={{
          background: "#F4F4F4",
          width: "100%",
          height: {
            xs: "350px",
            sm: "350px",
            md: "350px",
            lg: "100%",
            xl: "100%",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
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
              lg: "80px 60px 20px 60px",
              xl: "80px 60px 20px 60px",
            },

            display: "flex",
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
        </Box>
      </Box>
    </Box>
  );
};

export default About;
