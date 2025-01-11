import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Icon,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { ICarCard } from "../../interfaces";
import { LocalGasStation, People } from "@mui/icons-material";
import GearShift from "../../assets/gearshift.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";
import { formatPrice } from "../../utils";

const CarCard: React.FC<ICarCard> = ({ car, type }) => {
  const { t } = useTranslation();

  const price =
    car.priceToRent?.amount > 0
      ? formatPrice(car.priceToRent.amount, car.priceToRent.currency)
      : formatPrice(car.priceToSell.amount, car.priceToSell.currency);
  const isCarForRent = car.priceToRent?.amount > 0;

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: 20,
          cursor: "pointer",
        },
      }}
    >
      <Link
        to={`/car/${car.slug.current}`}
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Tooltip title={car.name + " " + car.model + " " + car.year}>
          <CardHeader
            sx={{
              display: "flex",
              overflow: "hidden",
              "& .MuiCardHeader-content": {
                overflow: "hidden",
              },
            }}
            title={car.name + " " + car.model + " " + car.year}
            titleTypographyProps={{
              noWrap: true,
              variant: "body1",
              fontWeight: "bold",
            }}
          />
        </Tooltip>

        <CardMedia
          component="img"
          sx={{
            display: "flex",
            justifyContent: "center",
            objectFit: "contain",
            aspectRatio: "3/2",
          }}
          image={urlFor(car.image).url()}
          alt={car.name}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: type === "reservation" ? "25px" : "60px",
          }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <LocalGasStation fontSize="small" />
            <Typography
              sx={{ color: "text.secondary", fontSize: 14, marginTop: "2px" }}
            >
              {t(`homepage.cars.${car.fuel}`)}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={0.5}>
            <Icon>
              <img src={GearShift} height={20} width={20} />
            </Icon>
            <Typography
              sx={{ color: "text.secondary", fontSize: 14, marginTop: "3px" }}
            >
              {t(`homepage.cars.${car.transmission}`)}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={0.5}>
            <People fontSize="small" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: 14, marginTop: "2px" }}
              >
                {car.seats}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  marginTop: "2px",
                  marginLeft: "3px",
                }}
              >
                {t("homepage.cars.people")}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                }}
              >
                {price}
              </Typography>
              {isCarForRent ? (
                <Typography variant="body1">
                  {" "}
                  {"/" + t("homepage.cars.day")}
                </Typography>
              ) : null}
            </Box>
          </Box>
        </CardActions>
      </Link>
    </Card>
  );
};

export default CarCard;
