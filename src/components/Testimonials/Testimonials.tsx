import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "red",
      }}
    >
      testemunhos
    </Box>
  );
};

export default Testimonials;
