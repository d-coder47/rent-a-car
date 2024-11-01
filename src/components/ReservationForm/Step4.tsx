import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";

const Step4: React.FC<IStep> = ({
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
        <Typography variant="h5">Informações da reserva</Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            Por favor, insira as informações da reserva.
          </Typography>
          <Typography variant="body2">Passo 4 de 4</Typography>
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
                <Typography>Dias</Typography>
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="days"
                type="number"
                value={reservationValues.days}
                error={fieldsErrors.days !== ""}
                helperText={fieldsErrors.days}
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0 } }}
                autoComplete="off"
                sx={{
                  width: "450px",
                }}
              />
            </Grid>

            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",

                  height: "100%",
                }}
              >
                <Typography variant="h5">Preço da reserva:</Typography>

                <Typography variant="h3">
                  {"€" + reservationValues.price}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step4;
