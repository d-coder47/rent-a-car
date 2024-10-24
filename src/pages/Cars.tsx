import { Box, Typography, Pagination, Tabs, Tab } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import car_image from "../assets/car_gallery/view5.jpg";
import CarCard from "../components/CarGallery/CarCard";
import Grid from "@mui/material/Grid2";
import { ChangeEvent, useEffect, useState } from "react";

const Cars = () => {
  const { t } = useTranslation();

  const cars = [
    {
      name: "Carro 1",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 2",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 3",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 4",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 5",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 6",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 7",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 8",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 9",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 10",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 11",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 12",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 13",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 14",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 15",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 16",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 17",
      image_path: car_image,
      fuel_type: "elétrico",
      tank_capacity: "75L",
      cambio_type: "Automático",
      people_number: 4,
      price: 150.0,
    },
    {
      name: "Carro 18",
      image_path: car_image,
      fuel_type: "elétrico",
      tank_capacity: "75L",
      cambio_type: "Automático",
      people_number: 4,
      price: 150.0,
    },
    {
      name: "Carro 19",
      image_path: car_image,
      fuel_type: "elétrico",
      tank_capacity: "75L",
      cambio_type: "Automático",
      people_number: 4,
      price: 150.0,
    },
    {
      name: "Carro 20",
      image_path: car_image,
      fuel_type: "elétrico",
      tank_capacity: "75L",
      cambio_type: "Automático",
      people_number: 4,
      price: 150.0,
    },
    {
      name: "Carro 21",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 22",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 23",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 24",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 25",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 26",
      image_path: car_image,
      fuel_type: "híbrido",
      tank_capacity: "80L",
      cambio_type: "Automático",
      people_number: 5,
      price: 130.0,
    },
    {
      name: "Carro 27",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 28",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 29",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 30",
      image_path: car_image,
      fuel_type: "gasolina",
      tank_capacity: "90L",
      cambio_type: "Manual",
      people_number: 4,
      price: 99.0,
    },
    {
      name: "Carro 31",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 32",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 33",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 34",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 35",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
    {
      name: "Carro 36",
      image_path: car_image,
      fuel_type: "diesel",
      tank_capacity: "85L",
      cambio_type: "Automático",
      people_number: 5,
      price: 120.0,
    },
  ];

  const [page, setPage] = useState(1);
  const [itemsPerPage, setIemsPerPage] = useState<number>(8);

  const indexOfLastCar = page * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const [tabValue, setTabValue] = useState(0);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1200) {
        setIemsPerPage(4);
      }

      if (windowWidth <= 600) {
        setIemsPerPage(3);
      }

      if (windowWidth > 1200) {
        setIemsPerPage(8);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#f4f4f4",
        }}
      >
        <Box
          sx={{
            width: "93%",
            marginTop: "60px",
          }}
        >
          <Typography textAlign="center" marginBottom="36px" variant="h2">
            {t("menu.exposicaoVeiculos")}
          </Typography>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              marginBottom: "80px",
              border: "none",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  textTransform: "none",
                }}
                label={
                  <Typography variant="body1">
                    {t("homepage.cars.avalailabe_to_reservation")}
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                }}
                label={
                  <Typography variant="body1">
                    {t("homepage.cars.avalailabe_to_buy")}
                  </Typography>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>

          <Box
            sx={{
              display: tabValue === 0 ? "block" : "none",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={12}
              rowSpacing={8}
              columnSpacing={6}
            >
              {currentCars.map((car, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 3,
                    xl: 3,
                  }}
                >
                  <CarCard key={index} car={car} type="reservation" />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Pagination
                count={Math.ceil(cars.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: tabValue === 1 ? "block" : "none",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={12}
              rowSpacing={8}
              columnSpacing={6}
            >
              {currentCars.map((car, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 3,
                    xl: 3,
                  }}
                >
                  <CarCard key={index} car={car} type="buy" />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Pagination
                count={Math.ceil(cars.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Cars;
