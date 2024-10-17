import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

const EmailForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #FE9E00 0%, #0C666E 100%)",
        padding: "8rem 0",
      }}
      display="flex"
      justifyContent="center"
    >
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: { xs: "50%", xl: "45%" },
        }}
      >
        <Typography variant="h3">Garanta a Sua Reserva por E-mail</Typography>

        <TextField
          required
          id="name"
          placeholder="Insira o seu nome*"
          size="small"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "4px",
            },
            input: {
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <TextField
          required
          id="email"
          placeholder="Insira um e-mail válido*"
          size="small"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              borderRadius: "4px",
            },
            input: {
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <TextField
          required
          id="message"
          placeholder="Insira a sua mensagem*"
          size="small"
          multiline
          rows="5"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              padding: "0",
              borderRadius: "4px",
            },
            textarea: {
              padding: "8.5px 14px",
              background: "#fff",
              borderRadius: "4px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            background: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            width: "40%",
            alignSelf: "start",
            marginTop: "1rem",
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default EmailForm;
