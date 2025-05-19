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
              {/* <ListItem>
                <ListItemText primary="• Cancelamento de Reservas: Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência. Em caso de não comparência ou aviso tardio, poderá haver cobrança parcial ou total do valor da reserva." />
              </ListItem> */}
            </List>

            {/* <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              2. Reembolsos
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Prazo para Reembolso: Uma vez aprovada a devolução, o reembolso será processado no prazo de até 10 dias úteis, pelo mesmo método de pagamento utilizado na compra." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Despesas de Envio: Custos de envio não são reembolsáveis, exceto em casos de erro comprovado por parte da V&amp;H INVESTIMENTOS." />
              </ListItem>
            </List> */}

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              {t("refunds.section2Title")}
            </Typography>
            <Typography variant="body1">{t("refunds.section2Text")}</Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Refunds;
