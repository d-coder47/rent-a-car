import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { ISelectedVehicle } from "../../interfaces";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const SelectedVehicleCard: React.FC<ISelectedVehicle> = ({
  vehicle,
  closeCardClick,
}) => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: "300px",
        width: "100%",
        boxShadow: 4,
      }}
    >
      <CardHeader
        title={vehicle.name}
        titleTypographyProps={{ variant: "body2" }}
        subheaderTypographyProps={{ variant: "body2" }}
        action={
          <IconButton
            aria-label="close card"
            onClick={() => closeCardClick(vehicle.slug)}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />

      <CardMedia
        component="img"
        sx={{
          height: "140px",
          display: "flex",
          justifyContent: "center",
        }}
        image={vehicle.image}
        alt={vehicle.name}
      />

      <CardActions>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "min-content",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "700",
                }}
              >
                {vehicle.priceToRent}
              </Typography>

              <Typography variant="body2">
                {" "}
                {"/" + t("homepage.cars.day")}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              height: "35px",
              textAlign: "center",
              color: "#000000",
              marginTop: "10px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: "#ffffff !important",
              },
            }}
            disableElevation={true}
          >
            <Typography variant="body2">Ver detalhes</Typography>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SelectedVehicleCard;
