import { Box, Button, Modal, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import Step1 from "./Step1";
import Step2 from "./Step2";
import { useState } from "react";
import { IFieldsErrors, IReservationInfo, ICar } from "../../interfaces";
import frontID from "../../assets/reservation/frontID.png";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ReviewStep from "./ReviewStep";
import axios from "axios";
import { convertEurToCve, parsePhoneNumber } from "./utils";
import { InfoOutlined } from "@mui/icons-material";

const ReservationForm = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const apiUrl = import.meta.env.VITE_PAYMENT_API;

  const [showRentalSummary, setShowRentalSummary] = useState<boolean>(false);

  const [openConversionModal, setOpenConversionModal] =
    useState<boolean>(false);

  const [reservationInfo, setReservationInfo] = useState<IReservationInfo>({
    name: "",
    email: "",
    phone: "",
    identificationDoc: {
      filePath: frontID,
      fileType: "",
      fileName: "",
    },
    driverLicence: {
      filePath: frontID,
      fileType: "",
      fileName: "",
    },
    identificationDocFile: null,
    driverLicenseFile: null,
    vehicle: [
      {
        slug: { current: "" },
        name: "",
        description: [],
        model: "",
        year: 0,
        seats: 0,
        fuel: "",
        transmission: "",
        availableToRent: false,
        availableToSell: false,
        priceToRent: { amount: 0, currency: "", securityDeposit: 0 },
        priceToSell: { amount: 0, currency: "" },
        securityDeposit: "",
        image: "",
      },
    ],
    price: 0,
    priceCVE: 0,
    days: 0,
  });

  const [fieldsErrors, setFieldsErros] = useState<IFieldsErrors>({
    name: "",
    email: "",
    phone: "",
    identificationDoc: "",
    driverLicence: "",
    vehicle: "",
    price: "",
    days: "",
  });

  const handleReservationPrice = async (days: number, vehicles: ICar[]) => {
    if (days > 0 && vehicles.length > 0) {
      const data = vehicles.map((vehicle) => {
        const price = vehicle.priceToRent.amount;
        const securityDeposit = vehicle.priceToRent.securityDeposit;

        return price * days + securityDeposit;
      });

      const newPrice = data.reduce(
        (accumulator, current) => accumulator + current
      );

      const valuecve = await convertEurToCve(newPrice);

      setReservationInfo((prevReservationInfo) => ({
        ...prevReservationInfo,
        ["price"]: newPrice,
        ["priceCVE"]: valuecve,
      }));
    }

    if (days === 0) {
      setReservationInfo((prevReservationInfo) => ({
        ...prevReservationInfo,
        ["price"]: 0,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = e.target;

    let parsedValue: ICar[];

    if (name === "vehicle") {
      parsedValue = JSON.parse(value);

      handleReservationPrice(reservationInfo.days, parsedValue);

      setReservationInfo((prevReservationInfo) => ({
        ...prevReservationInfo,
        [name]: parsedValue,
      }));
    }

    if (name === "days") {
      handleReservationPrice(valueAsNumber, reservationInfo.vehicle);
      setReservationInfo((prevReservationInfo) => ({
        ...prevReservationInfo,
        [name]: valueAsNumber,
      }));
    }

    if (name !== "vehicle" && name !== "days") {
      setReservationInfo((prevReservationInfo) => ({
        ...prevReservationInfo,
        [name]: value,
      }));
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        [name]: !emailRegex.test(value) ? t("reservationForm.emailError") : "",
      }));
    }

    if (name === "name" && value !== "") {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["name"]: "",
      }));
    }

    if (name === "vehicle" && value !== "") {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["vehicle"]: "",
      }));
    }

    if (name === "days" && valueAsNumber !== 0) {
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["days"]: "",
      }));
    }

    if (name === "identificationDoc" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const path = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        identificationDocFile: file,
      }));

      setReservationInfo((prevState) => ({
        ...prevState,
        identificationDoc: {
          filePath: path,
          fileType: file.type,
          fileName: file.name,
        },
      }));

      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: "",
      }));
    }

    if (name === "driveLic" && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const path = URL.createObjectURL(file);

      setReservationInfo((prevState) => ({
        ...prevState,
        driverLicenseFile: file,
      }));

      setReservationInfo((prevState) => ({
        ...prevState,
        driverLicence: {
          filePath: path,
          fileType: file.type,
          fileName: file.name,
        },
      }));

      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: "",
      }));
    }
  };

  const checkFieldsErrors = () => {
    let hasError = false;

    setFieldsErros({
      name: "",
      email: "",
      phone: "",
      identificationDoc: "",
      driverLicence: "",
      vehicle: "",
      price: "",
      days: "",
    });

    if (reservationInfo.name === "") {
      hasError = true;
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["name"]: t("reservationForm.nameRequired"),
      }));
    }

    if (reservationInfo.phone === "") {
      hasError = true;
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["phone"]: t("reservationForm.phoneRequired"),
      }));
    }

    if (reservationInfo.email === "") {
      hasError = true;
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["email"]: t("reservationForm.emailRequired"),
      }));
    }

    if (reservationInfo.days === 0) {
      hasError = true;
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["days"]: t("reservationForm.daysRequired"),
      }));
    }

    if (
      reservationInfo?.vehicle[0]?.name === "" ||
      reservationInfo.vehicle.length === 0
    ) {
      hasError = true;
      setFieldsErros((prevFieldErrors) => ({
        ...prevFieldErrors,
        ["vehicle"]: t("reservationForm.vehicleRequired"),
      }));
    }

    if (reservationInfo.identificationDoc.filePath === frontID) {
      hasError = true;
      setFieldsErros((prevState) => ({
        ...prevState,
        identificationDoc: t("reservationForm.idRequired"),
      }));
    }

    if (reservationInfo.driverLicence.filePath === frontID) {
      hasError = true;
      setFieldsErros((prevState) => ({
        ...prevState,
        driverLicence: t("reservationForm.driverLicenceRequired"),
      }));
    }

    return hasError;
  };

  const handleSubmit = async () => {
    const hasError = checkFieldsErrors();

    if (hasError) {
      setShowRentalSummary(false);
    }

    if (!hasError) {
      setOpenConversionModal(true);
    }
  };

  i18n.on("languageChanged", () => {
    checkFieldsErrors();
  });

  const handleReviewDetails = async (clickType: string) => {
    if (clickType === "editClick") {
      setShowRentalSummary(false);
    }

    if (clickType === "confirm") {
      const parsedNumber = parsePhoneNumber(`${reservationInfo.phone}`);

      let formData = new FormData();
      if (
        reservationInfo.driverLicenseFile &&
        reservationInfo.identificationDocFile
      ) {
        formData.append("driverLicenseFile", reservationInfo.driverLicenseFile);
        formData.append(
          "identificationDocFile",
          reservationInfo.identificationDocFile
        );
        await axios.post(`${apiUrl}/image`, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        axios
          .post(
            `${apiUrl}/postback`,
            {
              amount: `${reservationInfo.priceCVE}`,
              languages: i18n.language,
              mail: `${reservationInfo.email}`,
              cc: `${parsedNumber.cc}`,
              subscriber: `${parsedNumber.subscriber}`,
              rentCar: reservationInfo.vehicle,
              rentDays: `${reservationInfo.days}`,
              clientName: reservationInfo.name,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            document.open();
            document.write(response.data);
            document.close();
          })
          .catch((error) => {
            console.log("hello", error);
          });
      }
    }
  };

  const handleClose = () => {
    setOpenConversionModal(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
      display="flex"
      justifyContent="center"
    >
      {/* Form to fill reservation infos */}
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: showRentalSummary ? "none" : "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: "93%",

          height: {
            xs: "100%",
            sm: "100%",
            md: "auto",
            lg: "auto",
            xl: "auto",
          },
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

        <Step3
          reservationValues={reservationInfo}
          fieldsErrors={fieldsErrors}
          handleChange={handleChange}
        />

        <Step4
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

      {/* modal to alert about payment conversion to cve */}

      <Modal
        open={openConversionModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "55%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            gap={1}
          >
            <InfoOutlined
              sx={{
                width: "10%",
                height: "10%",
                color: theme.palette.primary.main,
              }}
            />
          </Stack>
          <Typography
            variant="body1"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {t("reservationForm.modalReservationText1")}
          </Typography>

          <Typography
            variant="body1"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {t("reservationForm.modalReservationText2")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body1" sx={{ mt: 2, marginRight: "0.5rem" }}>
              {t("reservationForm.modalReservationText3")}
            </Typography>

            <Typography variant="h3">{reservationInfo.priceCVE} CVE</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "space-between",
                  lg: "space-between",
                  xl: "space-between",
                },
                alignItems: "center",
                width: "40%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  background: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  textTransform: "none",
                }}
                onClick={() => handleClose()}
              >
                <Typography variant="body1">
                  {t("reservationForm.cancel")}
                </Typography>
              </Button>

              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  background: theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                  marginTop: {
                    xs: "5px",
                    sm: "5px",
                    md: 0,
                    lg: 0,
                    xl: 0,
                  },

                  textTransform: "none",
                }}
                onClick={() => {
                  handleClose();
                  setShowRentalSummary(true);
                }}
              >
                <Typography variant="body1">
                  {t("reservationForm.continue")}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* review infos before submit payment */}
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: showRentalSummary ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: "93%",
        }}
      >
        <ReviewStep reservationDetails={reservationInfo} />

        <Box
          sx={{
            width: {
              xs: "58%",
              sm: "45%",
              md: "25%",
              lg: "20%",
              xl: "15%",
            },

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              background: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },

              marginTop: "1rem",
              textTransform: "none",
            }}
            onClick={async () => await handleReviewDetails("editClick")}
          >
            <Typography variant="body1">{t("reservationForm.edit")}</Typography>
          </Button>

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
            onClick={() => handleReviewDetails("confirm")}
          >
            <Typography variant="body1">
              {t("reservationForm.confirm")}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservationForm;
