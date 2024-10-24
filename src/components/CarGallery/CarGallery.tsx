import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import car_image from "../../assets/car_gallery/view5.jpg";
import { ICarGallery } from "../../interfaces";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/cars");
  };

  const [galleryLimit, setGalleryLimit] = useState<number>(cars.length);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1200) {
        setGalleryLimit(4);
      }

      if (windowWidth <= 600) {
        setGalleryLimit(3);
      }

      if (windowWidth > 1200) {
        setGalleryLimit(8);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        rowSpacing={8}
        columnSpacing={6}
      >
        {cars.slice(0, galleryLimit).map((car, index) => (
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
            <CarCard key={index} car={car} type={type} />
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
          onClick={handleSeeMoreClick}
        >
          <Typography variant="body1">{t("homepage.cars.see_more")}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CarGallery;
