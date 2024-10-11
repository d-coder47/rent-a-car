import { Avatar, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import unitedKingdomFlag from "../../assets/flags/reino_unido.svg";
import franceFlag from "../../assets/flags/franca.svg";
import portugalFlag from "../../assets/flags/portugal.svg";
import spanishFlag from "../../assets/flags/espanha.svg";

const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { key: "EN", value: "en", flag: unitedKingdomFlag },
    { key: "ES", value: "es", flag: spanishFlag },
    { key: "FR", value: "fr", flag: franceFlag },
    { key: "PT", value: "pt", flag: portugalFlag },
  ];

  const [language, setLanguage] = useState<string>(i18n.language || "pt");

  const handleTranslationChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  const menuItemStyles = {
    display: "flex",
    gap: ".5rem",
    alignItems: "center",
    fontFamily: "Istok Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: {
      xs: "13px",
      sm: "13px",
      md: "13px",
      lg: "17px",
      xl: "17px",
    },
    lineHeight: "29px",
    textAlign: "right",
    textTransform: "none",
    color: "#000",
  };

  const avatarStyle = { width: "1.6rem", height: "auto", borderRadius: 0 };

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
        fontFamily: "Istok Web",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: {
          xs: "13px",
          sm: "13px",
          md: "13px",
          lg: "17px",
          xl: "17px",
        },
        lineHeight: "29px",
        textAlign: "right",
        textTransform: "none",
        color: "#ffffff",

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
          width: "60px",
        },

        ".MuiSelect-icon": {
          fill: "#ffffff",
          fontSize: "34px",
        },
      }}
    >
      {languages.map((item, index) => (
        <MenuItem value={item.value} key={index} sx={menuItemStyles}>
          <Avatar src={item.flag} alt="flag" sx={avatarStyle} />
          {item.key}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LangSelector;
