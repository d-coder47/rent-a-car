import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Engagement: React.FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        background: theme.palette.primary.main,
      }}
    >
      <Typography
        sx={{
          marginTop: "35px",
        }}
        variant="h2"
      >
        {t("homepage.engagement.title")}
      </Typography>

      <Box
        sx={{
          width: "90%",
          marginTop: "36px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#000",
            textAlign: "center",
          }}
        >
          {t("homepage.engagement.subheadline")}
        </Typography>
      </Box>

      <Button
        sx={{
          height: "50px",
          width: "250px",
          borderRadius: "12px",
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
      >
        <Typography variant="h3">{t("homepage.engagement.cta")}</Typography>
      </Button>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Istok Web",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "35px",
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
    </Box>
  );
};

export default Engagement;
