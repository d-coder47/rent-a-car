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
import { ICar, IStep } from "../../interfaces";
import SelectedVehicleCard from "./SelectedVehicleCard";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import { useTranslation } from "react-i18next";
import { handleGridSize } from "./utils";
import { useParams } from "react-router-dom";
import { CARS } from "../../constants";

const Step3: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id?: string }>();

  const [carId, setCarId] = useState<string[]>([]);

  const [vehicleOptions, setVehicleOptions] = useState<ICar[]>([]);

  const [selectedCars, setSelectedCars] = useState<ICar[]>([]);

  const [carFromRoute, setCarFromRoute] = useState<ICar[]>();

  useEffect(() => {
    if (!CARS || vehicleOptions.length > 0) return;

    const availableCars = CARS.filter(
      (item): item is ICar => item.availableToRent
    );

    if (id) {
      const findCar = CARS.filter(
        (item): item is ICar => item.slug === id.toString()
      );

      setCarFromRoute(findCar);
      setCarId([id.toString()]);

      setSelectedCars(findCar);

      const syntheticEvent = {
        target: { value: JSON.stringify(findCar), name: "vehicle" },
      } as React.ChangeEvent<HTMLInputElement>;

      handleChange(syntheticEvent);
    }
    setVehicleOptions(availableCars);
  }, [vehicleOptions.length, id]);

  const getCarName = (id: string) => {
    const car = selectedCars.find((item) => item.slug === id);
    return car?.name;
  };

  const handleSelectChange = (e: SelectChangeEvent<string[]>) => {
    const { value } = e.target;

    const splitedData = typeof value === "string" ? value.split(",") : value;

    const selectedCarsNewData = vehicleOptions.filter((vehicle) =>
      splitedData.includes(vehicle.slug)
    );

    if (id && carFromRoute) {
      setSelectedCars(selectedCarsNewData.concat(carFromRoute));
    } else {
      setSelectedCars(selectedCarsNewData);
    }

    if (!selectedCars) return;

    setCarId(splitedData);

    const modifiedEvent = {
      ...e,
      target: {
        ...e.target,
        value: JSON.stringify(selectedCarsNewData),
      },
    };

    handleChange(modifiedEvent as React.ChangeEvent<HTMLInputElement>);
  };

  const closeCardClick = (value: string) => {
    const filteredCars = carId.filter((item) => item !== value);

    setCarId(filteredCars);

    const selectedCars = vehicleOptions.filter((item) =>
      filteredCars.includes(item.slug)
    );

    const syntheticEvent = {
      target: { value: JSON.stringify(selectedCars), name: "vehicle" },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange(syntheticEvent);
  };

  return (
    <Box
      sx={{
        background: "#ffffff",
        width: {
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "1000px",
          xl: "1000px",
        },
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">
          {t("reservationForm.chooseVehicleTitle")}
        </Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            {t("reservationForm.chooseVehicleInstructions")}
          </Typography>
          <Typography variant="body2">
            {t("reservationForm.stepIndicator3")}
          </Typography>
        </Box>

        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}
            rowSpacing={3}
            columnSpacing={6}
          >
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <InputLabel
                shrink={false}
                htmlFor="vehicle"
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography> {t("reservationForm.vehicleLabel")}</Typography>
              </InputLabel>
              <FormControl
                sx={{
                  width: {
                    xs: "90%",
                    sm: "90%",
                    md: "300px",
                    lg: "450px",
                    xl: "450px",
                  },
                }}
              >
                <Select
                  id="vehicle"
                  name="vehicle"
                  multiple
                  value={carId}
                  onChange={handleSelectChange}
                  displayEmpty
                  input={<OutlinedInput id="select-multiple-chip" />}
                  error={fieldsErrors.vehicle !== ""}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value, index) => (
                        <Chip key={index} label={getCarName(value)} />
                      ))}
                    </Box>
                  )}
                >
                  {vehicleOptions.map((vehicle) => (
                    <MenuItem key={vehicle.slug} value={vehicle.slug}>
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
                <Typography
                  color="error"
                  variant="body2"
                  sx={{
                    color: "red",
                  }}
                >
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
              width="100%"
              sx={{
                display:
                  reservationValues?.vehicle[0]?.name === "" ? "none" : "flex",
                flexDirection: "row",
              }}
            >
              {reservationValues.vehicle.map((car, index) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 3,
                    xl: 3,
                  }}
                >
                  <SelectedVehicleCard
                    vehicle={car}
                    key={index}
                    closeCardClick={closeCardClick}
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
