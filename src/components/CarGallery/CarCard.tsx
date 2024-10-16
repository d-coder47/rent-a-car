import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { ICarCard } from "../../interfaces";
import { LocalGasStation } from "@mui/icons-material";

const CarCard: React.FC<ICarCard> = ({ car }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={car.name} subheader="Sport" />
      <CardMedia
        component="img"
        height="194"
        image={car.image_path}
        alt={car.name}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "50px",
            background: "red",
          }}
        >
          <LocalGasStation />
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            90L
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Reservar agora</Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;
