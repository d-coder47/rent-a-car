import { Avatar, Grid2, Typography } from "@mui/material";
import React from "react";
import car from "../../assets/servicos/carro.svg";

const ServiceCard = () => {
  return (
    <Grid2 display="flex" flexDirection="column" alignItems="center">
      <Avatar src={car} />
      <Typography variant="h2">
        Aluguer e Venda de Veículos – Soluções sob medida para cada momento
      </Typography>
      <Typography variant="body1">
        Seja por alguns dias ou para sempre, a V&H Investimentos oferece a
        solução perfeita para você. Com uma ampla frota de veículos de diversos
        modelos e categorias, garantimos que você encontrará o carro ideal para
        qualquer ocasião – sempre com conforto e estilo.
      </Typography>
    </Grid2>
  );
};

export default ServiceCard;
