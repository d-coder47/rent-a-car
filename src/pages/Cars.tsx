import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import CarGallery from "../components/CarGallery/CarGallery";
import { useEffect } from "react";

const Cars = () => {
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
          justifyContent: "center",
          background: "#f4f4f4",
        }}
      >
        <Box
          sx={{
            width: "93%",
          }}
        >
          <Typography textAlign="center" marginBottom="36px" variant="h2">
            {t("menu.exposicaoVeiculos")}
          </Typography>
          <CarGallery showPagination />
        </Box>
      </Box>
    </Layout>
  );
};

export default Cars;
