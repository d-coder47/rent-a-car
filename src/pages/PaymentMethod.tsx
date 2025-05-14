import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
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
      question: "Formas de pagamento",
      answer: (
        <>
          <Typography variant="body1">
            Aceitamos quatro formas de pagamento:
          </Typography>

          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <Typography variant="body1">
              1.Transferência bancária nacional;
            </Typography>
            <Typography variant="body1">
              2.Pagamento presencial no momento da reserva;
            </Typography>
            <Typography variant="body1">
              3.Cartão de crédito ou débito virtual;
            </Typography>
            <Typography variant="body1">
              4.Cartão de crédito ou débito internacional.
            </Typography>
          </Box>
        </>
      ),
    },
    {
      id: "panel2",
      question: "Pagamento presencial",
      answer: (
        <Typography variant="body1">
          Neste caso, no momento do pagamento, será disponibilizado um terminal
          de pagamento automático (POS), permitindo o uso de cartões aceites
          pela rede Vinti4. Se preferir, o pagamento também poderá ser feito em
          dinheiro.
        </Typography>
      ),
    },
    {
      id: "panel3",
      question: "Cartões aceitos no pagamento online",
      answer: (
        <>
          <Typography variant="body1">
            Aceitamos todos os cartões compatíveis com a rede Vinti4, incluindo:
            Cartão Vinti4 Visa American Express (AmEx) Mastercard:
          </Typography>

          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <Typography variant="body1">1.Cartão Vinti4;</Typography>
            <Typography variant="body1">2.Visa;</Typography>
            <Typography variant="body1">3.American Express (AmEx);</Typography>
            <Typography variant="body1">4.Mastercard.</Typography>
          </Box>
        </>
      ),
    },
    {
      id: "panel4",
      question: "Prazo para aprovação dos pagamentos com cartão de crédito",
      answer: (
        <Typography variant="body1">
          Os pagamentos realizados com cartão de crédito são aprovados
          imediatamente, desde que os dados estejam corretos. Um e-mail com o
          recibo de confirmação do pagamento será enviado automaticamente.
          Recomendamos que verifique atentamente todas as informações antes de
          concluir o pagamento, para evitar possíveis cancelamentos.
        </Typography>
      ),
    },
    {
      id: "panel5",
      question: "Dificuldades em realizar o pagamento online",
      answer: (
        <Typography variant="body1">
          Entre em contato com a nossa equipa de suporte para que possamos
          ajudá-lo(a) o mais rápido possível.
        </Typography>
      ),
    },
  ];
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

            <Box
              sx={{
                marginTop: "50px",
              }}
            >
              <Typography
                variant="h3"
                textAlign="center"
                gutterBottom
                fontWeight="bold"
              >
                O compromisso da V&amp;H INVESTIMENTOS com a segurança nos
                pagamentos
              </Typography>

              <Typography variant="body1">
                Na <strong>V&amp;H INVESTIMENTOS</strong>, acreditamos que
                segurança e confiança são fundamentais na hora de realizar
                pagamentos online. Por isso, adotamos tecnologias de ponta para
                proteger cada transação.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Contamos com os seguintes certificados e medidas de segurança:
              </Typography>

              <List>
                <ListItem>
                  <ListItemText primary="* Certificado Internacional SSL e Google reCAPTCHA 3.0 de última geração" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="* SISP/Vinti4: tecnologia OTP (One Time Password) para garantir os mais altos padrões de segurança" />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Como funciona a proteção OTP (One Time Password) na prática?
              </Typography>

              <List>
                <ListItem>
                  <ListItemText primary="1. Ao selecionar a opção 'Pagamento Online', você será redirecionado para o portal da SISP." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Lá, deverá inserir os dados do seu cartão Vinti4, Visa, AmEx ou Mastercard." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. A SISP enviará um código OTP via SMS ou e-mail para verificar sua identidade." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4. Após inserir o código, válido por uma única vez, o pagamento será concluído com sucesso." />
                </ListItem>
              </List>

              <Box mt={4}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Importante:</strong> A{" "}
                  <strong>V&amp;H INVESTIMENTOS</strong> não armazena nenhuma
                  informação do seu cartão. Todos os pagamentos são processados
                  com total segurança diretamente nos servidores da{" "}
                  <strong>SISP/Vinti4</strong>.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default PaymentMethods;
