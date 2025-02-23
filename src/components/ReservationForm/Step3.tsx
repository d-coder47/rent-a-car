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
import { useParams } from "react-router-dom";
import { useCar } from "../../context/CarContext";
import { urlFor } from "../../lib/client";

const Step3: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id?: string }>();

  const { cars } = useCar();

  const [carId, setCarId] = useState<string[]>([]);

  const [vehicleOptions, setVehicleOptions] = useState<ICar[]>([]);

  const [selectedCars, setSelectedCars] = useState<ICar[]>([]);

  const [carFromRoute, setCarFromRoute] = useState<ICar[]>();

  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setRefresh(true);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!cars || vehicleOptions.length > 0) return;

    const availableCars = cars.filter(
      (item): item is ICar => item.availableToRent
    );

    if (id) {
      const findCar = cars.filter(
        (item): item is ICar => item.slug.current === id.toString()
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
  }, [vehicleOptions.length, id, cars, refresh]);

  const getCarName = (id: string) => {
    const car = selectedCars.find((item) => item.slug.current === id);
    return car?.name;
  };

  const handleSelectChange = (e: SelectChangeEvent<string[]>) => {
    const { value } = e.target;

    const splitedData = typeof value === "string" ? value.split(",") : value;

    const selectedCarsNewData = vehicleOptions.filter((vehicle) =>
      splitedData.includes(vehicle.slug.current)
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
      filteredCars.includes(item.slug.current)
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
                    <MenuItem
                      key={vehicle.slug.current}
                      value={vehicle.slug.current}
                    >
                      <Box display="flex" alignItems="center">
                        <img
                          src={urlFor(vehicle.image).url()}
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

            {reservationValues?.vehicle[0]?.name !== "" && (
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={12}
                rowSpacing={8}
                columnSpacing={6}
                width="100%"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {reservationValues.vehicle.map((car, index) => (
                  <Grid
                    key={index}
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
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
