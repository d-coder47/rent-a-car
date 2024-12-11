import {
  Box,
  Button,
  Grid2,
  Pagination,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CarCard from "./CarCard";
import { ICar, ICarGallery } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useCar } from "../../context/CarContext";
import { sanityClient } from "../../lib/client";

const CarGallery = ({ showPagination = false }: ICarGallery) => {
  const { cars, updateCars } = useCar();

  const [page, setPage] = useState(1);
  const [itemsPerPage, setIemsPerPage] = useState<number>(8);
  const [tabValue, setTabValue] = useState(0);
  const [galleryCars, setCars] = useState(
    cars?.filter((car: ICar) => car?.availableToRent === true)
  );

  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const indexOfLastCar = page * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const isLarger = cars?.length ? cars?.length > itemsPerPage : false;

  const currentCars = galleryCars?.slice(
    isLarger ? indexOfFirstCar : 0,
    indexOfLastCar
  );

  useEffect(() => {
    const getCarsFromDatabase = async () => {
      const query = '*[_type == "car"]';
      const cars = await sanityClient.fetch(query);
      updateCars(cars);
      return cars;
    };

    if (cars?.length === 0) {
      console.log("Getting cars...");
      getCarsFromDatabase();
    }
  }, []);

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

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);

    const newCars = cars?.filter((car) =>
      newValue === 0
        ? car.availableToRent === true
        : car.availableToSell === true
    );
    setCars(newCars);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleSeeMoreClick = () => {
    navigate("/cars");
  };

  return (
    <>
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
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}
          rowSpacing={8}
          columnSpacing={6}
        >
          {currentCars
            ?.filter((car: ICar) => {
              const availableToRent = car.availableToRent === true;
              return availableToRent;
            })
            .map((car: ICar, index: number) => (
              <Grid2
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
              </Grid2>
            ))}
        </Grid2>

        {showPagination ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Pagination
              count={
                Math.ceil(
                  currentCars?.length ? currentCars?.length / itemsPerPage : 0
                ) === 0
                  ? 1
                  : Math.ceil(
                      currentCars?.length
                        ? currentCars?.length / itemsPerPage
                        : 0
                    )
              }
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        ) : (
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
              <Typography variant="body1">
                {t("homepage.cars.see_more")}
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: tabValue === 1 ? "block" : "none",
        }}
      >
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}
          rowSpacing={8}
          columnSpacing={6}
        >
          {currentCars
            ?.filter((car: ICar) => {
              const availableToSell = car.availableToSell === true;
              return availableToSell;
            })
            .map((car: ICar, index: number) => (
              <Grid2
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
              </Grid2>
            ))}
        </Grid2>

        {showPagination ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Pagination
              count={
                Math.ceil(
                  currentCars?.length ? currentCars?.length / itemsPerPage : 0
                ) === 0
                  ? 1
                  : Math.ceil(
                      currentCars?.length
                        ? currentCars?.length / itemsPerPage
                        : 0
                    )
              }
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        ) : (
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
              <Typography variant="body1">
                {t("homepage.cars.see_more")}
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default CarGallery;
