import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CarGallery from "./CarGallery";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

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
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Disponíveis para reserva" {...a11yProps(0)} />
            <Tab label="Disponíveis para compra" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: value === 0 ? "block" : "none",
          }}
        >
          <CarGallery type="reservation" />
        </Box>

        <Box
          sx={{
            display: value === 1 ? "block" : "none",
          }}
        >
          <CarGallery type="buy" />
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
