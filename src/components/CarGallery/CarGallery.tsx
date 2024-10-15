import { Typography } from "@mui/material";
import React from "react";
import CarCard from "./CarCard";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";
import car4 from "../../assets/cars/car4.png";
import { CarGalleryProps } from "../../interfaces";

const cars = [
  {
    name: "car1",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
  },
  {
    name: "car1",
    image_path: car1,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
  },
  {
    name: "car2",
    image_path: car2,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
  },
  {
    name: "car3",
    image_path: car3,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
  },
  {
    name: "car4",
    image_path: car4,
    fuel_type: "gasolina",
    tank_capacity: "90L",
    cambio_type: "Manual",
  },
];
const CarGallery: React.FC<CarGalleryProps> = ({ type }) => {
  return <CarCard cars={cars} />;
};

export default CarGallery;
