import { Box, Typography } from "@mui/material";

import Layout from "../components/Layout/Layout";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import { useTranslation } from "react-i18next";

const Reservation = () => {
  const { t } = useTranslation();
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
          marginTop: "133px",
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
