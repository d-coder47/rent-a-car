import { Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useState } from "react";
import { IFieldsErrors, IReservationInfo } from "../../interfaces";
import frontID from "../../assets/reservation/frontID.png";
import backID from "../../assets/reservation/backID.png";

const ReservationForm = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [reservationInfo, setReservationInfo] = useState<IReservationInfo>({
    name: "",
    email: "",
    phone: "",
    identificationDoc: {
      front: frontID,
      back: backID,
    },
    driverLicence: {
      front: frontID,
      back: backID,
    },
  });

  const [fieldsErrors, setFieldsErros] = useState<IFieldsErrors>({
    name: "",
    email: "",
    phone: "",
    identificationDoc: {
      front: "",
      back: "",
    },
    driverLicence: {
      front: "",
      back: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setReservationInfo((prevReservationInfo) => ({
      ...prevReservationInfo,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        [name]: !emailRegex.test(value)
          ? "Please enter a valid email address"
          : "",
      }));
    }

    if (name === "name" && value !== "") {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["name"]: "",
      }));
    }

    if (name === "idFront" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const image = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          front: image,
        },
      }));
    }

    if (name === "idBack" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const image = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          back: image,
        },
      }));
    }

    if (reservationInfo.identificationDoc.front !== frontID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          front: "",
        },
      }));
    }

    if (reservationInfo.identificationDoc.back !== backID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          back: "",
        },
      }));
    }

    if (name === "driveLicFront" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const image = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          front: image,
        },
      }));
    }

    if (name === "driveLicBack" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const image = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          back: image,
        },
      }));
    }

    if (reservationInfo.driverLicence.front !== frontID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          front: "",
        },
      }));
    }

    if (reservationInfo.driverLicence.back !== backID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          back: "",
        },
      }));
    }
  };

  const handleSubmit = () => {
    console.log("User Info:", reservationInfo);

    if (reservationInfo.name === "") {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["name"]: "Name is required",
      }));
    }

    if (reservationInfo.email === "") {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["email"]: "Email is required",
      }));
    }

    if (reservationInfo.identificationDoc.front === frontID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          front: "Document front side image is required",
        },
      }));
    }

    if (reservationInfo.identificationDoc.back === backID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: {
          ...prevState.identificationDoc,
          back: "Document back side image is required",
        },
      }));
    }

    if (reservationInfo.driverLicence.front === frontID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          front: "Document front side image is required",
        },
      }));
    }

    if (reservationInfo.driverLicence.back === backID) {
      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: {
          ...prevState.driverLicence,
          back: "Document back side image is required",
        },
      }));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: "93%",
        }}
      >
        <Step1
          reservationValues={reservationInfo}
          fieldsErrors={fieldsErrors}
          handleChange={handleChange}
        />
        <Step2
          reservationValues={reservationInfo}
          fieldsErrors={fieldsErrors}
          handleChange={handleChange}
        />

        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            background: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },

            marginTop: "1rem",
            textTransform: "none",
          }}
          onClick={handleSubmit}
        >
          <Typography variant="body1">
            {t("homepage.contact.form.button")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ReservationForm;
