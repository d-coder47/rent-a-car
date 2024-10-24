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
import { scrollToView } from "../../constants";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const sections = [
    {
      section: t("homepage.footer.home"),
      link: "top",
    },
    {
      section: t("homepage.about.headline"),
      link: "aboutus",
    },
    {
      section: "Seviços",
      link: "services",
    },
    {
      section: t("homepage.testimonials.title"),
      link: "testimonials",
    },
    {
      section: t("homepage.faq.headline"),
      link: "faqs",
    },
    {
      section: t("homepage.engagement.title"),
      link: "engagement",
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
          height: isHomePage ? "400px" : "100vh",
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
            display: isHomePage ? "flex" : "none",
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
              variant="h3"
              sx={{
                marginTop: {
                  xs: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "80px",
                  xl: "80px",
                },
                marginBottom: "20px",
              }}
            >
              {t("homepage.footer.linksRapidos")}
            </Typography>
            {sections.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                onClick={() => scrollToView(item.link)}
                sx={{
                  marginBottom: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
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
            display: isHomePage ? "flex" : "none",
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
              variant="h3"
              sx={{
                marginTop: {
                  xs: "30px",
                  sm: "30px",
                  md: "30px",
                  lg: "80px",
                  xl: "80px",
                },
                marginBottom: "20px",
              }}
            >
              {t("homepage.footer.entreEmContato")}
            </Typography>
            {contacts.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                key={index}
              >
                {item.icon}
                <Typography
                  variant="body1"
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
              {socialContacts.map((item, index) => (
                <Box key={index}>{item.icon}</Box>
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
          <Typography variant="body1">
            {t("homepage.footer.copyright")}
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
        <Typography variant="body1">
          {t("homepage.footer.copyright")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
