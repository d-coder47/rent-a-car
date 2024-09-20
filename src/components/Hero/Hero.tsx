import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Hero: React.FC = () => {
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
        }}
      >
        <Box
          sx={{
            marginLeft: "60px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "58px",
              textAlign: "justify",
              color: "#000000",
            }}
          >
            Desde passeios diários a escapadelas de fim de semana - temos tudo o
            que precisa!
          </Typography>

          <Typography
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "justify",
              color: "#000000",
              marginTop: "20px",
            }}
          >
            Aqui na V&H Investimentos, temos veículos para todas as ocasiões.
            Clique no botão abaixo para fazer a sua reserva com conforto,
            rapidez e a garantia de uma experiencia inabalavel.
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "28px",
              textAlign: "justify",
              color: "#ffffff",
              marginTop: "20px",
              textTransform: "none",
            }}
          >
            Escolha o seu veículo agora!
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          // background: "yellow",
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
