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

const CarCard: React.FC<ICarCard> = ({ car }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: 275,
        width: "290px",
      }}
    >
      <CardHeader
        title={car.name}
        // subheader="Sport"
        titleTypographyProps={{ variant: "h5" }}
        subheaderTypographyProps={{ variant: "body2" }}
      />
      <CardMedia
        component="img"
        sx={{
          width: "290px",
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
              people
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
            <Typography variant="body1">day</Typography>
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
            <Typography variant="body2">Reservar</Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CarCard;
