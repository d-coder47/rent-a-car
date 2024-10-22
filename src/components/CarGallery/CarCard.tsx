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

  return (
    <Card
      sx={{
        height: "360px",
      }}
    >
      <CardHeader
        title={car.name}
        titleTypographyProps={{ variant: "h5" }}
        subheaderTypographyProps={{ variant: "body2" }}
      />
      <CardMedia
        component="img"
        sx={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
        }}
        image={car.image_path}
        alt={car.name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <Stack direction="row" alignItems="center" gap={0.5}>
          <LocalGasStation fontSize="small" />
          <Typography
            sx={{ color: "text.secondary", fontSize: 14, marginTop: "2px" }}
          >
            {car.tank_capacity}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={0.5}>
          <Icon>
            <img src={GearShift} height={20} width={20} />
          </Icon>
          <Typography
            sx={{ color: "text.secondary", fontSize: 14, marginTop: "3px" }}
          >
            {car.cambio_type}
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
              {car.people_number}
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
              {"$" + car.price + "/"}
            </Typography>
            <Typography variant="body1"> {t("homepage.cars.day")}</Typography>
          </Box>

          {type === "reservation" ? (
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
                {t("homepage.cars.reservation")}
              </Typography>
            </Button>
          ) : (
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
              }}
            >
              {t("homepage.cars.for_sale")}
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default CarCard;
