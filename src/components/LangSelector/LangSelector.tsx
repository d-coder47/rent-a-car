import {
  Avatar,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import unitedKingdomFlag from "../../assets/flags/reino_unido.svg";
import franceFlag from "../../assets/flags/franca.svg";
import portugalFlag from "../../assets/flags/portugal.svg";
import spanishFlag from "../../assets/flags/espanha.svg";

const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language || "pt");

  const handleTranslationChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <Select
      labelId="internationalization-label"
      id="internationalization"
      variant="standard"
      disableUnderline
      value={language}
      onChange={handleTranslationChange}
      sx={{
        height: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
        },

        ".MuiOutlinedInput-input": {
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
        },
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          fontFamily: "Istok Web",
        },
      }}
    >
      <MenuItem
        value={"en"}
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <Avatar
          src={unitedKingdomFlag}
          alt="england flag"
          sx={{ width: "1.6rem", height: "auto", borderRadius: 0 }}
        />
        <Typography
          sx={{
            fontFamily: "Istok Web",
          }}
          fontWeight="bold"
        >
          EN (UK)
        </Typography>
      </MenuItem>
      <MenuItem
        value={"es"}
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <Avatar
          src={spanishFlag}
          alt="spanish flag"
          sx={{ width: "1.6rem", height: "auto", borderRadius: 0 }}
        />
        <Typography
          sx={{
            fontFamily: "Istok Web",
          }}
          fontWeight="bold"
        >
          ES
        </Typography>
      </MenuItem>
      <MenuItem
        value={"fr"}
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <Avatar
          src={franceFlag}
          alt="Bandeira França"
          sx={{ width: "1.6rem", height: "auto", borderRadius: 0 }}
        />{" "}
        <Typography
          sx={{
            fontFamily: "Istok Web",
          }}
          fontWeight="bold"
        >
          FR
        </Typography>
      </MenuItem>
      <MenuItem
        value={"pt"}
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <Avatar
          src={portugalFlag}
          alt="Bandeira Portugal"
          sx={{ width: "1.6rem", height: "auto", borderRadius: 0 }}
        />
        <Typography
          sx={{
            fontFamily: "Istok Web",
          }}
          fontWeight="bold"
        >
          PT
        </Typography>
      </MenuItem>
    </Select>
  );
};

export default LangSelector;
