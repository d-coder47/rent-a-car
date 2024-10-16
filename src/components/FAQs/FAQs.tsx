import { Box, Grid2, Typography } from "@mui/material";
import Questions from "./Questions";

const FAQs = () => {
  return (
    <Box>
      <Grid2
        container
        display="flex"
        flexDirection="column"
        // gap="1.5rem"
        sx={{
          margin: {
            xs: "30px 2rem",
            sm: "30px 4rem",
            md: "30px 4rem",
            lg: "80px 60px",
            xl: "80px 60px",
          },
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            marginBottom: "36px",
          }}
        >
          Perguntas Frequentes
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="justify"
          sx={{
            marginBottom: "36px",
          }}
        >
          Procurando respostas sobre nossos serviços de aluguel de veículos? Na
          V&H Investimentos, entendemos que o processo de aluguel de veículos
          pode, por vezes, ser complicado. Por isso, compilamos uma lista
          abrangente de perguntas frequentes para ajudá-lo a encontrar as
          informações de que precisa.
        </Typography>
        <Questions />
      </Grid2>
    </Box>
  );
};

export default FAQs;
