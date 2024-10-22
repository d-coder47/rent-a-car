import { Box, Grid2, Typography } from "@mui/material";
import Questions from "./Questions";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Grid2
        id="faqs"
        container
        display="flex"
        flexDirection="column"
        sx={{
          margin: {
            xs: "30px 2rem",
            sm: "30px 4rem",
            md: "30px 4rem",
            lg: "80px 60px",
            xl: "80px 60px",
          },
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            marginBottom: "36px",
          }}
        >
          {t("homepage.faq.headline")}
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="justify"
          sx={{
            marginBottom: "36px",
          }}
        >
          {t("homepage.faq.subheadline")}
        </Typography>
        <Questions />
      </Grid2>
    </Box>
  );
};

export default FAQs;
