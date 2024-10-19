import React from "react";
import CarCard from "./CarCard";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";
import car4 from "../../assets/cars/car4.png";
import { ICarGallery } from "../../interfaces";
import { Box } from "@mui/material";

const cars = [
  {
    name: "car1",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "car1",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "car2",
    image_path: car2,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
    people_number: 4,
    price: 99.0,
  },
  {
    name: "car3",
    image_path: car3,
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </Box>
  );
};

export default CarGallery;
