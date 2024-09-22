import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Hero: React.FC = () => {
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
        xl: "45px",
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
      marginTop: "20px",
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
      marginTop: "20px",
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
          background: {
            xs: "red",
            sm: "blue",
            md: "green",
            lg: "yellow",
            xl: "violet",
          },
        }}
      >
        <Box
          sx={{
            marginLeft: "60px",
          }}
        >
          <Typography sx={typographyStyle.headline}>
            Desde passeios diários a escapadelas de fim de semana - temos tudo o
            que precisa!
          </Typography>

          <Typography sx={typographyStyle.subheadline}>
            Aqui na V&H Investimentos, temos veículos para todas as ocasiões.
            Clique no botão abaixo para fazer a sua reserva com conforto,
            rapidez e a garantia de uma experiencia inabalavel.
          </Typography>

          <Button variant="contained" sx={typographyStyle.cta}>
            Escolha o seu veículo agora!
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
