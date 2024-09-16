import { Box, Typography } from "@mui/material";
import { EmailOutlined, PhoneAndroidOutlined } from "@mui/icons-material";

const PreHeader = () => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "410px",
          marginLeft: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <EmailOutlined />
          <Typography
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "23px",
              color: "#000000",
            }}
          >
            vhinvestimentos20@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <PhoneAndroidOutlined />
          <Typography>+238 593 55 35</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreHeader;
