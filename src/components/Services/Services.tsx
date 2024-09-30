import { Grid2, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../constants";

const Services = () => {
  return (
    <Grid2
      container
      display="flex"
      flexDirection="column"
      sx={{
        margin: {
          xs: "0px 10px 0px 10px",
          sm: "0px 10px 0px 10px",
          md: "0px 10px 0px 10px",
          lg: "80px 60px 80px 60px",
          xl: "80px 60px 80px 60px",
        },
      }}
    >
      <Typography variant="h1">Serviços</Typography>
      <Typography variant="subtitle1">
        Com uma equipe altamente qualificada e um compromisso inabalável com a
        satisfação do cliente, <br /> a V&H Investimentos se posiciona como a
        escolha ideal para lhe proporcionar conforto, segurança e satisfação ao
        conduzir um veículo.
      </Typography>
      <Grid2 display="flex" gap="1rem" mx="4rem" mt="6rem">
        {SERVICES.map((service) => {
          return (
            <Grid2 size={{ xs: 3 }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </Grid2>
  );
};

export default Services;
