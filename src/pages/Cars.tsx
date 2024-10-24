import { Box, Typography, Pagination } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import car_image from "../assets/car_gallery/view5.jpg";
import CarCard from "../components/CarGallery/CarCard";
import Grid from "@mui/material/Grid2";
import { ChangeEvent, useState } from "react";

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
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastCar = page * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "93%",
            marginTop: "60px",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#000000",
                marginTop: {
                  xs: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "0px",
                  xl: "0px",
                },
                marginBottom: "50px",
              }}
              variant="h2"
            >
              {t("homepage.cars.avalailabe_to_reservation")}
            </Typography>

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
                marginTop: "20px",
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
              marginTop: "80px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#000000",
                marginTop: {
                  xs: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "0px",
                  xl: "0px",
                },
                marginBottom: "50px",
              }}
              variant="h2"
            >
              {t("homepage.cars.avalailabe_to_buy")}
            </Typography>

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
                marginTop: "20px",
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
