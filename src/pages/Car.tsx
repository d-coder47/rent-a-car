import {
  Box,
  Button,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import { HEADER_HEIGHT, PRE_HEADER_HEIGHT } from "../constants";
import { useCar } from "../context/CarContext";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils";
import CarGallery from "../components/CarGallery/CarGallery";

const Car = () => {
  const { slug } = useParams();

  const { t } = useTranslation();
  const { cars } = useCar();

  const carData = cars?.find((car) => car.slug.current === slug);

  const carPrice =
    carData && carData?.priceToRent?.amount > 0
      ? formatPrice(carData?.priceToRent.amount, carData?.priceToRent.currency)
      : formatPrice(
          carData?.priceToSell.amount || 0,
          carData?.priceToSell.currency || ""
        );

  if (!carData) {
    return <Box>DISPLAY ERROR PAGE</Box>;
  }

  return (
    <Layout>
      {/* <Grid2
        container
        display="flex"
        flexWrap="wrap"
        // height={`calc(100vh - ${PRE_HEADER_HEIGHT + HEADER_HEIGHT})`}
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
          marginTop={{
            xs: "1rem",
            lg: `calc(${PRE_HEADER_HEIGHT + HEADER_HEIGHT})`,
          }}
          flexBasis={{ xs: "100%", md: "100%", lg: "25%", xl: "20%" }}
        >
          <Typography variant="h2">
            {carData.name + " " + carData.model}
          </Typography>
          <PortableText
            value={carData.description}
            components={{
              block: {
                normal: ({ children }) => (
                  <body style={{ fontFamily: "'Istok Web', sans-serif" }}>
                    {children}
                  </body>
                ),
                h1: ({ children }) => (
                  <h1
                    style={{
                      fontFamily: "'Istok Web', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {children}
                  </h1>
                ),
                h4: ({ children }) => (
                  <h4
                    style={{
                      fontFamily: "'Istok Web', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {children}
                  </h4>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul
                    style={{
                      fontFamily: "'Istok Web', sans-serif",
                    }}
                  >
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol
                    style={{
                      fontFamily: "'Istok Web', sans-serif",
                    }}
                  >
                    {children}
                  </ol>
                ),

                // Ex. 2: rendering custom lists
                checkmarks: ({ children }) => (
                  <ol
                    style={{
                      fontFamily: "'Istok Web', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {children}
                  </ol>
                ),
              },
            }}
          />

          <Box
            className="single-car-price-box"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            margin="auto 1rem 1rem 1rem"
            sx={{
              boxShadow: 5,
              padding: ".5rem 1rem",
            }}
          >
            <Typography variant="h3">{carPrice}</Typography>
            <Button variant="contained" sx={{ textTransform: "unset" }}>
              <Typography variant="body1">{t("single-car.rent")}</Typography>
            </Button>
          </Box>
        </Box>
      </Grid2> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#f4f4f4",
          marginTop:
            +HEADER_HEIGHT.replace("px", "") +
            +PRE_HEADER_HEIGHT.replace("px", "") +
            "px",
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
          marginTop={{
            xs: "1rem",
            lg: `calc(${PRE_HEADER_HEIGHT + HEADER_HEIGHT})`,
          }}
          flexBasis={{ xs: "100%", md: "100%", lg: "25%", xl: "20%" }}
        >
          <Typography variant="h2">
            {carData.name + " " + carData.model}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
          >
            <PortableText
              value={carData.description}
              components={{
                block: {
                  normal: ({ children }) => (
                    <body style={{ fontFamily: "'Istok Web', sans-serif" }}>
                      {children}
                    </body>
                  ),
                  h1: ({ children }) => (
                    <h1
                      style={{
                        fontFamily: "'Istok Web', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {children}
                    </h1>
                  ),
                  h4: ({ children }) => (
                    <h4
                      style={{
                        fontFamily: "'Istok Web', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {children}
                    </h4>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul
                      style={{
                        fontFamily: "'Istok Web', sans-serif",
                      }}
                    >
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol
                      style={{
                        fontFamily: "'Istok Web', sans-serif",
                      }}
                    >
                      {children}
                    </ol>
                  ),

                  // Ex. 2: rendering custom lists
                  checkmarks: ({ children }) => (
                    <ol
                      style={{
                        fontFamily: "'Istok Web', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {children}
                    </ol>
                  ),
                },
              }}
            />
          </Box>
          <Box
            className="single-car-price-box"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            margin="auto 1rem 1rem 1rem"
            sx={{
              boxShadow: 5,
              padding: ".5rem 1rem",
            }}
          >
            <Typography variant="h3">{carPrice}</Typography>
            <Button variant="contained" sx={{ textTransform: "unset" }}>
              <Typography variant="body1">{t("single-car.rent")}</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Car;
