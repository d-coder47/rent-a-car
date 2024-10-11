import { Box, Grid2, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../constants";

const Services = () => {
  return (
    <Grid2
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
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
      <Typography
        variant="h2"
        sx={{
          marginBottom: "36px",
        }}
      >
        Serviços
      </Typography>
      <Typography variant="body1">
        Com uma equipe altamente qualificada e um compromisso inabalável com a
        satisfação do cliente, a V&H Investimentos se posiciona como a escolha
        ideal para lhe proporcionar conforto, segurança e satisfação ao conduzir
        um veículo.
      </Typography>
      <Grid2
        display="flex"
        flexWrap="wrap"
        gap="3rem"
        mx={{
          xs: "0rem",
          sm: "0rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
        }}
        mt="6rem"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
        }}
      >
        {SERVICES.map((service, index) => {
          return (
            <Box
              key={index}
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
