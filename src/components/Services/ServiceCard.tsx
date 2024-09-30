import { Avatar, Grid2, Typography } from "@mui/material";
import React from "react";
import car from "../../assets/servicos/carro.svg";
import { IService } from "../../interfaces";

const ServiceCard = ({ title, description, icon }: IService) => {
  return (
    <Grid2
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap=".5rem"
    >
      <Avatar src={car} />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Grid2>
  );
};

export default ServiceCard;
