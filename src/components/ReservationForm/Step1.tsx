import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";

const Step1: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  return (
    <Box
      sx={{
        background: "#ffffff",
        width: "1000px",
        height: "100%",
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">Informações de faturamento</Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            Por favor, insira suas informações de faturamento.
          </Typography>
          <Typography variant="body2">Passo 1 de 4</Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}
            rowSpacing={3}
            columnSpacing={6}
          >
            <Grid size={6}>
              <InputLabel shrink={false} htmlFor={"username"}>
                <Typography>Nome</Typography>
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="name"
                value={reservationValues.name}
                error={fieldsErrors.name !== ""}
                helperText={fieldsErrors.name}
                onChange={handleChange}
                autoComplete="off"
                sx={{
                  width: "450px",
                }}
              />
            </Grid>

            <Grid size={6}>
              <InputLabel shrink={false} htmlFor={"username"}>
                <Typography>Número de Telefone</Typography>
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                autoComplete="off"
                name="phone"
                value={reservationValues.phone}
                onChange={handleChange}
                sx={{
                  width: "450px",
                }}
              />
            </Grid>

            <Grid size={6}>
              <InputLabel shrink={false} htmlFor={"username"}>
                <Typography>E-mail</Typography>
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                autoComplete="off"
                name="email"
                sx={{
                  width: "450px",
                }}
                value={reservationValues.email}
                onChange={handleChange}
                error={fieldsErrors.email !== ""}
                helperText={fieldsErrors.email}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;