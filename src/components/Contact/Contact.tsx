import { Box, Grid2, Typography } from "@mui/material";
import EmailForm from "./EmailForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Grid2 id="contact" display="flex" flexWrap="wrap">
      <Box display="flex" justifyContent="center" width={{ xs: "100%" }}>
        <Typography variant="h2">{t("homepage.contact.headline")}</Typography>
      </Box>
      <Box display="flex" p="4rem 0 0 0" width={{ xs: "100%" }}>
        <Box width={{ xs: "50%" }}>
          <EmailForm />
        </Box>
        <Box width={{ xs: "50%" }}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.805222246798!2d-24.986853724089297!3d16.885527117067202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f1fa03d36fcc5%3A0x62a0dfffe32eef8b!2sV%26H%20INVESTIMENTOS%20-%20RENT%20A%20CAR%2F%20IMPORTA%C3%87%C3%83O%20DE%20VIATURAS%20%26%20PE%C3%87AS!5e0!3m2!1spt-PT!2scv!4v1729182210866!5m2!1spt-PT!2scv"
            title="Contact Us"
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Box>
      </Box>
    </Grid2>
  );
};

export default Contact;
