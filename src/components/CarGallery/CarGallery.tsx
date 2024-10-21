import React from "react";
import CarCard from "./CarCard";
import car_image from "../../assets/car_gallery/view5.jpg";
import { ICarGallery } from "../../interfaces";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

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
];

const CarGallery: React.FC<ICarGallery> = ({ type }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        rowSpacing={8}
        columnSpacing={6}
      >
        {cars.map((car, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 4,
              xl: 3,
            }}
          >
            <CarCard key={index} car={car} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          marginBottom: "30px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: "40px",
            textAlign: "center",
            color: "#000000",

            textTransform: "none",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: "#ffffff !important",
            },
          }}
          disableElevation={true}
        >
          <Typography variant="body1">Ver mais</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CarGallery;
