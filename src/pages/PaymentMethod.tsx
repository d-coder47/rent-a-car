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
      question: t("payment-method.faq.panel1.question"),
      answer: (
        <>
          <Typography variant="body1">
            {t("payment-method.faq.panel1.answer.intro")}
          </Typography>

          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <Typography variant="body1">
              {t("payment-method.faq.panel1.answer.options1")}
            </Typography>
            <Typography variant="body1">
              {t("payment-method.faq.panel1.answer.options2")}
            </Typography>
            <Typography variant="body1">
              {t("payment-method.faq.panel1.answer.options3")}
            </Typography>
            <Typography variant="body1">
              {t("payment-method.faq.panel1.answer.options4")}
            </Typography>
          </Box>
        </>
      ),
    },
    {
      id: "panel2",
      question: t("payment-method.faq.panel2.question"),
      answer: (
        <Typography variant="body1">
          {t("payment-method.faq.panel2.answer")}
        </Typography>
      ),
    },
    {
      id: "panel3",
      question: t("payment-method.faq.panel3.question"),
      answer: (
        <>
          <Typography variant="body1">
            {t("payment-method.faq.panel3.answer.intro")}
          </Typography>

          <Box
            sx={{
              paddingLeft: "30px",
            }}
          >
            <Typography variant="body1">
              {t("payment-method.faq.panel3.answer.cards1")}
            </Typography>
            <Typography variant="body1">
              {t("payment-method.faq.panel3.answer.cards2")}
            </Typography>
            <Typography variant="body1">
              {t("payment-method.faq.panel3.answer.cards3")}
            </Typography>
            <Typography variant="body1">
              {" "}
              {t("payment-method.faq.panel3.answer.cards4")}
            </Typography>
          </Box>
        </>
      ),
    },
    {
      id: "panel4",
      question: t("payment-method.faq.panel4.question"),
      answer: (
        <Typography variant="body1">
          {t("payment-method.faq.panel4.answer")}
        </Typography>
      ),
    },
    {
      id: "panel5",
      question: t("payment-method.faq.panel5.question"),
      answer: (
        <Typography variant="body1">
          {t("payment-method.faq.panel5.answer")}
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
            {t("payment-method.paymentMethodsTitle")}
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
                {t("payment-method.vhSecurity.title")}
              </Typography>

              <Typography variant="body1">
                {t("payment-method.vhSecurity.intro")}
              </Typography>

              <Typography variant="h6" gutterBottom>
                {t("payment-method.vhSecurity.certsTitle")}
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.certs1")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.certs2")}
                  />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                {t("payment-method.vhSecurity.otpTitle")}
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.otpSteps1")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.otpSteps2")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.otpSteps3")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t("payment-method.vhSecurity.otpSteps4")}
                  />
                </ListItem>
              </List>

              <Box mt={4}>
                <Typography variant="body1" color="text.secondary">
                  {t("payment-method.vhSecurity.disclaimer")}
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
