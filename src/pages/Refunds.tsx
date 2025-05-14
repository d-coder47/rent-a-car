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
          height: "100%",
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
            Política de Entrega e Devolução de Produtos e/ou Serviços
          </Typography>

          <Box
            sx={{
              width: "80%",
            }}
          >
            <Typography variant="body1">
              Na <strong>V&amp;H INVESTIMENTOS</strong>, valorizamos a
              transparência e a satisfação dos nossos clientes. Por isso,
              estabelecemos diretrizes claras para entrega e devolução de
              serviços, garantindo uma experiência segura e eficiente.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              1. Prestação de Serviços (Rent a Car)
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Confirmação de Reserva: A reserva de viaturas será confirmada mediante o pagamento antecipado ou sinal, conforme acordado." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Entrega da Viatura: O cliente deverá apresentar os documentos exigidos e cumprir os requisitos mínimos para levantamento da viatura." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Cancelamento de Reservas: Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência. Em caso de não comparência ou aviso tardio, poderá haver cobrança parcial ou total do valor da reserva." />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              2. Reembolsos
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Prazo para Reembolso: Uma vez aprovada a devolução, o reembolso será processado no prazo de até 10 dias úteis, pelo mesmo método de pagamento utilizado na compra." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Despesas de Envio: Custos de envio não são reembolsáveis, exceto em casos de erro comprovado por parte da V&amp;H INVESTIMENTOS." />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              3. Suporte ao Cliente
            </Typography>
            <Typography variant="body1">
              Em caso de dúvidas ou situações não previstas nesta política, a
              nossa equipa está disponível para oferecer o suporte necessário e
              encontrar a melhor solução para cada caso.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Refunds;
