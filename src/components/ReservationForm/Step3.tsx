import {
  Box,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  OutlinedInput,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep, IVehicle } from "../../interfaces";
import car_image from "../../assets/car_gallery/view5.jpg";
import SelectedVehicleCard from "./SelectedVehicleCard";
import { useState } from "react";
import Chip from "@mui/material/Chip";

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
    { id: 5, name: "Car Model E", image: car_image },
    { id: 6, name: "Car Model F", image: car_image },
    { id: 7, name: "Car Model G", image: car_image },
    { id: 8, name: "Car Model H", image: car_image },
  ];

  const [carName, setCarName] = useState<string[]>([]);

  const handleSelectChange = (e: SelectChangeEvent<typeof carName>) => {
    const { value } = e.target;

    const splitedData = typeof value === "string" ? value.split(",") : value;

    const selectedCars = vehicleOptions.filter((item) =>
      splitedData.includes(item.name)
    );

    if (!selectedCars) return;

    setCarName(splitedData);

    const updatedValue = selectedCars.map((item) => ({
      id: item.id,
      name: item.name,
    }));

    const modifiedEvent = {
      ...e,
      target: {
        ...e.target,
        value: JSON.stringify(updatedValue),
      },
    };

    handleChange(modifiedEvent as React.ChangeEvent<HTMLInputElement>);
  };

  const handleGridSize = (vehicles: IVehicle[], defaultSize: number) => {
    let size = defaultSize;

    const length = vehicles.length;

    if (length === 1) {
      size = 12;
    }

    if (length === 2) {
      size = 6;
    }

    if (length === 3) {
      size = 4;
    }

    return size;
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
                  multiple
                  value={carName}
                  onChange={handleSelectChange}
                  displayEmpty
                  input={<OutlinedInput id="select-multiple-chip" />}
                  error={fieldsErrors.vehicle !== ""}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {vehicleOptions.map((vehicle) => (
                    <MenuItem key={vehicle.id} value={vehicle.name}>
                      <Box display="flex" alignItems="center">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                        <Typography variant="body1">{vehicle.name}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="caption" color="error">
                  {fieldsErrors.vehicle}
                </Typography>
              </FormControl>
            </Grid>

            <Grid size={6} />

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={12}
              rowSpacing={8}
              columnSpacing={6}
              sx={{
                display:
                  reservationValues.vehicle[0].name === "" ? "none" : "flex",
                flexDirection: "row",
              }}
            >
              {reservationValues.vehicle.map((car, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: handleGridSize(reservationValues.vehicle, 12),
                    sm: handleGridSize(reservationValues.vehicle, 6),
                    md: handleGridSize(reservationValues.vehicle, 6),
                    lg: handleGridSize(reservationValues.vehicle, 3),
                    xl: handleGridSize(reservationValues.vehicle, 3),
                  }}
                >
                  <SelectedVehicleCard
                    name={car.name}
                    image={car_image}
                    key={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;