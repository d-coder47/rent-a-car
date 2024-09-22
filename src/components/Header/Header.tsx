import { Avatar, Box, Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import LangSelector from "../LangSelector/LangSelector";
import React from "react";
import { useTranslation } from "react-i18next";
import BurguerMenu from "../BurguerMenu/BurguerMenu";

const Header: React.FC = () => {
  const menuItensStyle = {
    fontFamily: "Istok Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: {
      xs: "17px",
      sm: "17px",
      md: "17px",
      lg: "17px",
      xl: "20px",
    },
    lineHeight: "29px",
    textAlign: "right",
    textTransform: "none",
    color: "#000000",
  };
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
          margin: {
            xs: "0px 10px 0px 10px",
            sm: "0px 10px 0px 10px",
            md: "0px 10px 0px 10px",
            lg: "0px 60px 0px 60px",
            xl: "0px 60px 0px 60px",
          },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Avatar
            alt="logo"
            src={Logo}
            sx={{
              width: {
                xs: "70%",
                sm: "70%",
                md: "80%",
                lg: "90%",
                xl: "90%",
              },
              height: "auto",
              borderRadius: "0px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: "40%",
              sm: "65%",
              md: "60%",
              lg: "50%",
              xl: "40%",
            },
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button sx={menuItensStyle}>{t("menu.exposicaoVeiculos")}</Button>
          <Button sx={menuItensStyle}>{t("menu.servicos")}</Button>
          <Button sx={menuItensStyle}>{t("menu.contacto")}</Button>
          <LangSelector />
        </Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <BurguerMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
