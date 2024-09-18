import {
  Avatar,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import englandFlag from "../../assets/flags/inglaterra.png";
import franceFlag from "../../assets/flags/franca.png";
import portugalFlag from "../../assets/flags/portugal.png";

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
          src={englandFlag}
          alt="Bandeira Inglaterra"
          sx={{ width: "1.6rem", height: "auto" }}
        />
        <Typography
          sx={{
            fontFamily: "Istok Web",
          }}
          fontWeight="bold"
        >
          EN
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
          sx={{ width: "1.6rem", height: "auto" }}
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
          sx={{ width: "1.6rem", height: "auto" }}
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
    </Select>
  );
};

export default LangSelector;
