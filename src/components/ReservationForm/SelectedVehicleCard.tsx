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

const SelectedVehicleCard: React.FC<ISelectedVehicle> = ({
  name,
  image,
  closeCardClick,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "250px",
        width: "100%",
        boxShadow: 4,
      }}
    >
      <CardHeader
        title={name}
        titleTypographyProps={{ variant: "body2" }}
        subheaderTypographyProps={{ variant: "body2" }}
        action={
          <IconButton
            aria-label="close card"
            onClick={() => closeCardClick(name)}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        sx={{
          height: "120px",
          display: "flex",
          justifyContent: "center",
        }}
        image={image}
        alt={name}
      />

      <CardActions>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
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
