import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #FE9E00 0%, #0C666E 100%)",
        padding: "8rem 0",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: { xs: "50%", xl: "45%" },
        }}
      >
        <Typography variant="h3">{t("homepage.contact.form.title")}</Typography>

        <TextField
          required
          id="name"
          placeholder={t("homepage.contact.form.name")}
          size="small"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "4px",
            },
            input: {
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <TextField
          required
          id="email"
          placeholder={t("homepage.contact.form.email")}
          size="small"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "4px",
            },
            input: {
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <TextField
          required
          id="message"
          placeholder={t("homepage.contact.form.message")}
          size="small"
          multiline
          rows="5"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              padding: "0",
              borderRadius: "4px",
            },
            textarea: {
              padding: "8.5px 14px",
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            background: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            width: "40%",
            alignSelf: "start",
            marginTop: "1rem",
            textTransform: "none",
          }}
        >
          <Typography variant="body1">
            {t("homepage.contact.form.button")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default EmailForm;
