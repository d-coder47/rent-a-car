import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

const EmailForm = () => {
  const theme = useTheme();

  return (
    <Box
      // component="form"
      // autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography>Entre em contato connosco</Typography>
      <TextField required id="name" placeholder="Insira o seu nome" />
      <TextField required id="email" placeholder="Insira um e-mail válido" />
      <TextField required id="message" placeholder="Insira a sua mensagem" />
      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          background: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default EmailForm;
