import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Icon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ICarCard } from "../../interfaces";
import { LocalGasStation, People } from "@mui/icons-material";
import GearShift from "../../assets/gearshift.svg";
import { useTranslation } from "react-i18next";

const CarCard: React.FC<ICarCard> = ({ car, type }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const price = car.priceToRent.length > 0 ? car.priceToRent : car.priceToSell;
  const isCarForRent = car.priceToRent.length > 0;

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader
        title={car.name + " " + car.model + " " + car.year}
        titleTypographyProps={{ variant: "h5" }}
        subheaderTypographyProps={{ variant: "body2" }}
      />
      <CardMedia
        component="img"
        sx={{
          display: "flex",
          justifyContent: "center",
          objectFit: "contain",
          aspectRatio: "3/2",
        }}
        image={car.image}
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

          <Button
            variant="contained"
            sx={{
              height: "35px",
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
            <Typography variant="body2">
              {isCarForRent
                ? t("homepage.cars.reservation")
                : t("homepage.cars.buy")}
            </Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CarCard;
