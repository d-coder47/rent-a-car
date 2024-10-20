import React from "react";
import CarCard from "./CarCard";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";
import car4 from "../../assets/cars/car4.png";
import { ICarGallery } from "../../interfaces";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const cars = [
  {
    name: "Carro 1",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 2",
    image_path: car2,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 3",
    image_path: car3,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 4",
    image_path: car4,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },

  {
    name: "Carro 5",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 6",
    image_path: car2,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 7",
    image_path: car3,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "Carro 8",
    image_path: car4,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
];

const CarGallery: React.FC<ICarGallery> = ({ type }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: {
          xs: "red",
          sm: "yellow",
          md: "brown",
          lg: "green",
          xl: "rose",
        },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        // columnSpacing={{
        //   xs: 14,
        //   sm: 23,
        //   md: 8,
        //   lg: 22,
        //   xl: 14,
        // }}
        rowSpacing={8}
      >
        {cars.map((car, index) => (
          <Grid
            key={index}
            size={{
              xs: 6,
              sm: 6,
              md: 4,
              lg: 4,
              xl: 3,
            }}
            sx={{
              width: "290px",
              height: "325px",
            }}
          >
            <CarCard key={index} car={car} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarGallery;
