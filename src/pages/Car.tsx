import {
  Box,
  Button,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import { HEADER_HEIGHT, PRE_HEADER_HEIGHT } from "../constants";

const Car = () => {
  const { t } = useTranslation();

  const info = {
    "Brand-Name": "Subaru",
    Model: "Ascent",
    Year: 2020,
    Seats: 7,
    Fuel: "Gasoline",
    Mileage: "20-21 MPG (city), 26-27 MPG (highway)",
    Motor: "2.4L Turbocharged Boxer 4-cylinder engine",
    "Colors-Available": "White",
    Description:
      "O Subaru Ascent 2020 é um SUV espaçoso e versátil, ideal para famílias que buscam conforto e segurança. Com capacidade para até oito passageiros, ele conta com tração integral (AWD) de série, proporcionando estabilidade em diferentes terrenos. Seu motor turbo 2.4L entrega uma performance eficiente, combinada com uma economia de combustível competitiva para a categoria. Além disso, o Ascent oferece tecnologias avançadas de assistência ao motorista, como o sistema EyeSight, para maior segurança e tranquilidade na condução.",
  };

  return (
    <Layout>
      <Grid2
        container
        display="flex"
        flexWrap="wrap"
        height={`calc(100vh - ${PRE_HEADER_HEIGHT + HEADER_HEIGHT})`}
        sx={{
          backgroundColor: "#f4f4f4",
        }}
      >
        <Box
          id="car-3d"
          flexBasis={{ xs: "100%", lg: "75%", xl: "80%" }}
          display="flex"
          justifyContent="center"
          height="auto"
        >
          <Box
            component="iframe"
            src="https://reisdanilson47.sirv.com/Subaru/Subaru.spin"
            title="Car in 3D"
            allowFullScreen
            sx={{
              width: "100%",
              height: "auto",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Box>
        <Box
          id="car-info"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="2rem"
          marginTop={{ xs: "1rem", lg: "4rem" }}
          flexBasis={{ xs: "100%", md: "100%", lg: "25%", xl: "20%" }}
        >
          <Typography variant="h2">
            {info["Brand-Name"] + " " + info.Model}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              padding: { xs: "0 4rem", lg: "0 1.5rem" },
            }}
          >
            {info.Description}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              alignSelf: { xs: "start", lg: "center" },
              marginLeft: { xs: "4rem", lg: "1.5rem" },
            }}
          >
            {t("single-car.details")}
          </Typography>
          <List
            sx={{
              marginTop: "-2rem",
              alignSelf: { xs: "start", lg: "center" },
              marginLeft: { xs: "4rem", lg: "1.5rem" },
            }}
          >
            <ListItem sx={{ padding: "0 1rem" }}>
              <ListItemText
                primary={
                  <Typography variant="body2">• Subaru Ascent 2020</Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "0 1rem" }}>
              <ListItemText
                primary={
                  <Typography variant="body2">
                    • Motor 2360c.c/ cm3, 4 cilindros
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "0 1rem" }}>
              <ListItemText
                primary={<Typography variant="body2">• 7 assentos</Typography>}
              />
            </ListItem>
            <ListItem sx={{ padding: "0 1rem" }}>
              <ListItemText
                primary={
                  <Typography variant="body2">
                    • Transmissão Automática
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "0 1rem" }}>
              <ListItemText
                primary={<Typography variant="body2">• Gasolina</Typography>}
              />
            </ListItem>
          </List>
          <Box
            className="single-car-price-box"
            display="flex"
            justifyContent="space-between"
            margin="auto 1rem 1rem 1rem"
            sx={{
              boxShadow: 5,
              padding: ".5rem 1rem",
            }}
          >
            <Typography variant="h3">€19,100</Typography>
            <Button variant="contained">{t("single-car.rent")}</Button>
          </Box>
        </Box>
      </Grid2>
    </Layout>
  );
};

export default Car;
