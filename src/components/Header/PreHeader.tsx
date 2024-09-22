import { Box, Typography } from "@mui/material";
import { EmailOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import React from "react";

const PreHeader: React.FC = () => {
  const typographyStyle = {
    fontFamily: "Istok Web",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: {
      xs: "17px",
      sm: "17px",
      md: "13px",
      lg: "16px",
      xl: "16px",
    },
    lineHeight: "23px",
    color: "#000000",
    marginLeft: "4px",
  };
  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        },
        alignItems: "center",
        background: "rgba(254, 158, 0, 0.55)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: {
            xs: "380px",
            sm: "380px",
            md: "380px",
            lg: "430px",
            xl: "430px",
          },
          marginLeft: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailOutlined
            sx={{
              fontSize: "18px",
            }}
          />
          <Typography sx={typographyStyle}>
            vhinvestimentos20@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneAndroidOutlined
            sx={{
              fontSize: "18px",
            }}
          />
          <Typography sx={typographyStyle}>+238 593 55 35</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreHeader;
