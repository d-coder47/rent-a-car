import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Refunds = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#f4f4f4",
          flexDirection: "column",
          height: "100vh",
          // height: "100%",
        }}
      >
        <Box
          sx={{
            width: "93%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" marginBottom="36px" variant="h2">
            {t("refunds.title")}
          </Typography>

          <Box
            sx={{
              width: "80%",
            }}
          >
            <Typography variant="body1">{t("refunds.intro")}</Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              {t("refunds.section1Title")}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={t("refunds.section1Points1")} />
              </ListItem>
              <ListItem>
                <ListItemText primary={t("refunds.section1Points2")} />
              </ListItem>
              <ListItem>
                <ListItemText primary={t("refunds.section1Points3")} />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              {t("refunds.section2Title")}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={t("refunds.section2Text")} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Refunds;
