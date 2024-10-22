import { Box, Grid2, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../constants";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <Grid2
      id="services"
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
        {t("homepage.services.headline")}
      </Typography>
      <Typography variant="body1">
        {t("homepage.services.subheadline")}
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
                title={
                  t(`homepage.services.content.${index}.title`) || service.title
                }
                description={
                  t(`homepage.services.content.${index}.description`) ||
                  service.description
                }
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
