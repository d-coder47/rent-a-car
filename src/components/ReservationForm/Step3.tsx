import {
  Box,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";
import car_image from "../../assets/car_gallery/view5.jpg";
import SelectedVehicleCard from "./SelectedVehicleCard";

const Step3: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const vehicleOptions = [
    { id: 1, name: "Car Model A", image: car_image },
    { id: 2, name: "Car Model B", image: car_image },
    { id: 3, name: "Car Model C", image: car_image },
    { id: 4, name: "Car Model D", image: car_image },
  ];

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;

    const selectedCar = vehicleOptions.find((item) => item.name === value);

    if (!selectedCar) return;

    const modifiedEvent = {
      ...e,
      target: {
        ...e.target,
        value: JSON.stringify({
          id: selectedCar.id,
          name: selectedCar.name,
        }),
      },
    };

    handleChange(modifiedEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Box
      sx={{
        background: "#ffffff",
        width: "1000px",
        height: "100%",
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">Escolha o seu veículo</Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            Por favor, escolha o veículo que pretende reservar.
          </Typography>
          <Typography variant="body2">Passo 3 de 4</Typography>
        </Box>

        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}
            rowSpacing={3}
            columnSpacing={6}
          >
            <Grid size={6}>
              <InputLabel shrink={false} htmlFor="vehicle">
                <Typography>Veículo</Typography>
              </InputLabel>
              <FormControl sx={{ width: "450px" }}>
                <Select
                  id="vehicle"
                  name="vehicle"
                  value={reservationValues.vehicle.name}
                  onChange={handleSelectChange}
                  displayEmpty
                  error={fieldsErrors.vehicle !== ""}
                >
                  {vehicleOptions.map((vehicle) => (
                    <MenuItem key={vehicle.id} value={vehicle.name}>
                      <Box display="flex" alignItems="center">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                        <Typography>{vehicle.name}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="caption" color="error">
                  {fieldsErrors.vehicle}
                </Typography>
              </FormControl>
            </Grid>

            <Grid
              size={6}
              sx={{
                display:
                  reservationValues.vehicle.name !== "" ? "block" : "none",
              }}
            >
              <SelectedVehicleCard
                name={reservationValues.vehicle.name}
                image={car_image}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
