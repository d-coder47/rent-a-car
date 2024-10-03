import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const sections = [
    {
      section: "Home",
      link: "dummy",
    },
    {
      section: "Sobre nós",
      link: "dummy",
    },
    {
      section: "Seviços",
      link: "dummy",
    },
    {
      section: "O que nossos clientes dizem",
      link: "dummy",
    },
    {
      section: "Perguntas frequentes",
      link: "dummy",
    },
    {
      section: "Escolha o seu veículo",
      link: "dummy",
    },
  ];

  const contacts = [
    {
      contact: "+238 593 55 35",
      icon: "phone",
    },
    {
      contact: "vhinvestimentos20@gmail.com",
      icon: "mail",
    },
    {
      contact: "+238 593 55 35",
      icon: "phone",
    },
    {
      contact: "Rua Pereira Marinha, Mindelo, Cape Verde",
      icon: "location",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "400px",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Links rápidos
          </Typography>
          {sections.map((item) => (
            <Typography
              variant="h3"
              sx={{
                marginBottom: "20px",
              }}
            >
              {item.section}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Entre em contato
          </Typography>
          {contacts.map((item) => (
            <Typography
              variant="h3"
              sx={{
                marginBottom: "20px",
              }}
            >
              {item.contact}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
