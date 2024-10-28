import { Box, Typography } from "@mui/material";

import Layout from "../components/Layout/Layout";
import ReservationForm from "../components/ReservationForm/ReservationForm";

const Reservation = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#f4f4f4",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography textAlign="center" marginBottom="36px" variant="h2">
          Reserva seu veículo
        </Typography>

        <ReservationForm />
      </Box>
    </Layout>
  );
};

export default Reservation;
