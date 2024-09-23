import { Grid2, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <Grid2 container display="flex" flexDirection="column">
      <Typography variant="h1">Serviços</Typography>
      <Typography variant="subtitle1">
        Com uma equipe altamente qualificada e um compromisso inabalável com a
        satisfação do cliente, <br /> a V&H Investimentos se posiciona como a
        escolha ideal para lhe proporcionar conforto, segurança e satisfação ao
        conduzir um veículo.
      </Typography>
      <ServiceCard />
    </Grid2>
  );
};

export default Services;
