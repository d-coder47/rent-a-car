import { Box, Typography } from "@mui/material";

import Layout from "../components/Layout/Layout";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Reservation = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  });
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#f4f4f4",
          minHeight: "100vh",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography textAlign="center" marginBottom="36px" variant="h2">
          {t("reservationForm.reserveVehicle")}
        </Typography>

        <ReservationForm />
      </Box>
    </Layout>
  );
};

export default Reservation;
