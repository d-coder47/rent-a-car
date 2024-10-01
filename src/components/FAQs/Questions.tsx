import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FAQs } from "../../constants";
import { Box } from "@mui/material";
import { useCallback, useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export default function Questions() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => {
    setExpanded((prevPanel) => (prevPanel === panel ? false : panel));
  };

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index + 1}
          onChange={() => handleChange(index + 1)}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index + 1 ? (
                <ArrowDropUp
                  sx={{
                    color: "#FE9E00",
                  }}
                />
              ) : (
                <ArrowDropDown
                  sx={{
                    color: "#FE9E00",
                  }}
                />
              )
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              color: "#191945",
              fontFamily: "Istok Web",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "26px",
              textAlign: "left",
              padding: { xs: "8px 0px ", md: "8px 16px" },
            }}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails
            sx={{ padding: { xs: "8px 0px 20px ", md: "8px 16px 16px" } }}
          >
            <Box
              sx={{
                width: "90%",
                color: "#666666",
                fontFamily: "Istok Web",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              {item.description}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
