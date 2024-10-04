import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  EmailOutlined,
  PhoneAndroidOutlined,
  LocationOn,
  Facebook,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const { t } = useTranslation();

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
      icon: <PhoneAndroidOutlined />,
    },
    {
      contact: "vhinvestimentos20@gmail.com",
      icon: <EmailOutlined />,
    },
    {
      contact: "Rua Pereira Marinha, Mindelo, Cape Verde",
      icon: <LocationOn />,
    },
  ];

  const socialContacts = [
    {
      icon: <Facebook fontSize="large" />,
      url: "dummy",
    },
    {
      icon: <Instagram fontSize="large" />,
      url: "dummy",
    },
    {
      icon: <WhatsApp fontSize="large" />,
      url: "dummy",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          height: "400px",
          width: "100%",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "column",
                xl: "column",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginTop: "80px",
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
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "column",
                xl: "column",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginTop: "80px",
                marginBottom: "20px",
              }}
            >
              Entre em contato
            </Typography>
            {contacts.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {item.icon}
                <Typography
                  variant="h3"
                  sx={{
                    marginBottom: "20px",
                    marginLeft: "10px",
                  }}
                >
                  {item.contact}
                </Typography>
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              {socialContacts.map((item) => (
                <Box>{item.icon}</Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "50px",
          }}
        >
          <Typography variant="h3">
            © Copyright 2024 V&H Investimentos
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h3">© Copyright 2024 V&H Investimentos</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
