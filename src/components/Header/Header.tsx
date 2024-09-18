import { Box, Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import LangSelector from "../LangSelector/LangSelector";
import React from "react";

const Header: React.FC = () => {
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
            Exposição de veículos
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
            Serviços
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
            Contacto
          </Button>
          <LangSelector />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
