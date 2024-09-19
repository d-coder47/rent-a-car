import { Box, Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import LangSelector from "../LangSelector/LangSelector";
import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "90px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          margin: "0px 60px 0px 60px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img alt="logo" src={Logo} />
        </Box>
        <Box
          sx={{
            width: "590.48px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "29px",
              textAlign: "right",
              textTransform: "none",
              color: "#000000",
            }}
          >
            {t("menu.exposicaoVeiculos")}
          </Button>
          <Button
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "29px",
              textAlign: "right",
              textTransform: "none",
              color: "#000000",
            }}
          >
            {t("menu.servicos")}
          </Button>
          <Button
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "29px",
              textAlign: "right",
              textTransform: "none",
              color: "#000000",
            }}
          >
            {t("menu.contacto")}
          </Button>
          <LangSelector />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
