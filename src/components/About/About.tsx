import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import mindelo from "../../assets/mindelo.png";

const About: React.FC = () => {
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
      color: "#4f4c4c",
      marginTop: "36px",
    },
    cta: {
      height: "50px",
      width: "250px",
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
      color: "#ffffff",
      marginTop: "50px",
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
        height: "460px",
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
          width: "55%",
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
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "85%",
            height: "80%",
            margin: "30px 20px 20px 50px",
          }}
        >
          <Typography sx={typographyStyle.headline}>Sobre nós</Typography>
          <Typography sx={typographyStyle.subheadline}>
            A V&H investimentos é uma empresa jovem e dinâmica sediada em São
            Vicente, Cabo Verde. Fundada com o objetivo de oferecer soluções de
            mobilidade de excelência, a V&H investimentos se destaca por sua
            frota de veículos aliando conforto, segurança e estilo.
          </Typography>
          <Button sx={typographyStyle.cta}>Venha nos conhecer</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
