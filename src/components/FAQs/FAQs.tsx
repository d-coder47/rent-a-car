import { Grid2, Typography } from "@mui/material";
import Questions from "./Questions";

const FAQs = () => {
  return (
    <Grid2
      container
      display="flex"
      flexDirection="column"
      gap="1.5rem"
      sx={{
        margin: {
          xs: "30px 2rem",
          sm: "30px 4rem",
          md: "30px 4rem",
          lg: "80px 28rem",
          xl: "80px 28rem",
        },
      }}
    >
      <Typography variant="h2" textAlign="center">
        Perguntas Frequentes
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Procurando respostas sobre nossos serviços de aluguel de veículos? Na
        V&H Investimentos, entendemos que o processo de aluguel de veículos
        pode, por vezes, ser complicado. Por isso, compilamos uma lista
        abrangente de perguntas frequentes para ajudá-lo a encontrar as
        informações de que precisa.
      </Typography>
      <Questions />
    </Grid2>
  );
};

export default FAQs;
