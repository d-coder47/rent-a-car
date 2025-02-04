import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FAQs } from "../../constants";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const { t } = useTranslation();

  const handleChange = (panel: number) => {
    setExpanded((prevPanel) => (prevPanel === panel ? false : panel));
  };

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      {FAQs.map((_item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index + 1}
          onChange={() => handleChange(index + 1)}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDown
                sx={{
                  color: "#FE9E00",
                  fontSize: "2rem",
                }}
              />
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              color: "#191945",
              textAlign: "left",
              padding: { xs: "8px 0px ", md: "8px 16px" },
            }}
          >
            <Typography variant="h5">
              {t(`homepage.faq.content.${index}.title`)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ padding: { xs: "8px 0px 20px ", md: "8px 16px 16px" } }}
          >
            <Box
              sx={{
                width: "90%",
                textAlign: "left",
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "#666666" }}>
                {t(`homepage.faq.content.${index}.description`)}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
