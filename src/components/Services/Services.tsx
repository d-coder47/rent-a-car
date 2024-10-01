import { Box, Grid2, Typography } from "@mui/material";
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
          xs: "30px 2rem",
          sm: "30px 4rem",
          md: "30px 4rem",
          lg: "80px 60px",
          xl: "80px 60px",
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
      <Grid2
        display="flex"
        flexWrap="wrap"
        gap="1rem"
        mx="4rem"
        mt="6rem"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        {SERVICES.map((service) => {
          return (
            <Box
              display="flex"
              sx={{ width: { xs: "100%", sm: "100%", md: "48%", lg: "31%" } }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Box>
          );
        })}
      </Grid2>
    </Grid2>
  );
};

export default Services;
