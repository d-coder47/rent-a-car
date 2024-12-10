import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarGallery from "./CarGallery";
import { sanityClient } from "../../lib/client";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const getProducts = async () => {
      const query = '*[_type == "car"]';
      const products = await sanityClient.fetch(query);
      console.log({ products });
    };

    getProducts();
  }, []);

  return (
    <Box
      sx={{
        background: "#F4F4F4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "80px",
            xl: "80px",
          },
          marginBottom: "36px",
        }}
      >
        <Typography variant="h2">{t("menu.exposicaoVeiculos")}</Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          marginBottom: "20px",
        }}
      >
        <CarGallery />
      </Box>
    </Box>
  );
};

export default Gallery;
