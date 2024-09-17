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
        background: "rgba(254, 158, 0, 0.55)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "490px",
          marginLeft: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailOutlined />
          <Typography
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
              marginLeft: "4px",
            }}
          >
            vhinvestimentos20@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneAndroidOutlined />
          <Typography
            sx={{
              fontFamily: "Istok Web",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
              marginLeft: "4px",
            }}
          >
            +238 593 55 35
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreHeader;
