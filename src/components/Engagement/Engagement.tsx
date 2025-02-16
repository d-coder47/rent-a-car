import { Box, Button, Typography, useTheme, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Engagement: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box
      id="engagement"
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        background: "#F4F4F4",
      }}
    >
      <Typography
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
        variant="h2"
      >
        {t("homepage.engagement.title")}
      </Typography>

      <Box
        sx={{
          width: "90%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            textAlign: "justify",
          }}
        >
          {t("homepage.engagement.subheadline")}
        </Typography>
      </Box>

      <Button
        sx={{
          height: "50px",
          width: "250px",
          textAlign: "justify",
          color: "#ffffff",
          marginTop: {
            xs: "30px",
            sm: "30px",
            md: "30px",
            lg: "50px",
            xl: "50px",
          },
          textTransform: "none",
          background: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
            color: "#FFFFFF",
          },
        }}
        onClick={() => navigate("/reservation")}
      >
        <Typography variant="body1">{t("homepage.engagement.cta")}</Typography>
      </Button>
      <Link
        href={`https://api.whatsapp.com/send?phone=+2385935535&text=${t(
          "social-media.greeting"
        )}`}
        target="_blank"
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#000000",
            marginTop: "30px",
            marginBottom: "80px",
            cursor: "pointer",
          }}
          onClick={() => console.log("hello")}
        >
          {t("homepage.engagement.startConversation")}
        </Typography>
      </Link>
    </Box>
  );
};

export default Engagement;
