import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ExpandMore } from "@mui/icons-material";

const PaymentMethods = () => {
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

  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const faqItems = [
    {
      id: "panel1",
      question: "Quais as formas de pagamento?",
      answer: (
        <>
          <Typography variant="body1">
            Aceitamos um total de 4 opções de pagamento:
          </Typography>

          <Typography variant="body1">1.Transferência Nacional;</Typography>
          <Typography variant="body1">
            2.Pagamento no momento da reserva caso for presencial;
          </Typography>
          <Typography variant="body1">
            3.Cartão de crédito e débito virtual;
          </Typography>
          <Typography variant="body1">
            4.Cartão de crédito e débito internacional;
          </Typography>
        </>
      ),
    },
    {
      id: "panel2",
      question:
        "Qual o prazo para aprovação dos pagamentos realizados no cartão de credito?",
      answer: (
        <p>
          Todas as compras realizadas no cartão de crédito são aprovados
          imediatamente se os dados estiverem correctos. É enviado um e-mail com
          o recibo de confirmação da compra, é essencial que confirme os dados
          para que o seu pagamento não seja cancelado.
        </p>
      ),
    },
    {
      id: "panel3",
      question: "Posso alterar a forma de pagamento?",
      answer: (
        <p>
          Infelizmente, se o seu pedido já foi finalizado, não será possível
          realizar alterações.
        </p>
      ),
    },

    {
      id: "panel6",
      question:
        "Estou com dificuldades em realizar o pagamento. O que eu faço?",
      answer: (
        <p>
          Entre em contato com o nosso suporte ao cliente para podermos
          auxiliá-lo.
        </p>
      ),
    },
  ];
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4f4f4",
          flexDirection: "column",
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
            Métodos de Pagamento
          </Typography>

          <Box
            sx={{
              width: "80%",
            }}
          >
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={() => handleToggle(item.id)}
                sx={{ mb: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel-${item.id}-content`}
                  id={`panel-${item.id}-header`}
                  sx={{
                    backgroundColor: "#f9fafb",
                    "&:hover": { backgroundColor: "#f3f4f6" },
                  }}
                >
                  <Typography fontWeight={500}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}

            <Box mt={12} textAlign="center">
              <Typography variant="body2" color="text.secondary">
                Para outras dúvidas relacionadas a pagamentos, entre em contato
                com nosso suporte ao cliente.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default PaymentMethods;
