import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";
import { useTranslation } from "react-i18next";

const Step4: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "#ffffff",
        width: {
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "1000px",
          xl: "1000px",
        },
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">
          {t("reservationForm.reservationInfoTitle")}
        </Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            {t("reservationForm.reservationInfoInstructions")}
          </Typography>
          <Typography variant="body2">
            {t("reservationForm.stepIndicator4")}
          </Typography>
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
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography> {t("reservationForm.daysLabel")}</Typography>
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
                  width: {
                    xs: "90%",
                    sm: "90%",
                    md: "300px",
                    lg: "450px",
                    xl: "450px",
                  },
                  "& .MuiFormHelperText-root.Mui-error": {
                    color: "red",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    fontSize: "16px",
                    fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box
                sx={{
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    height: "50%",
                  }}
                >
                  <Typography variant="caption">
                    {t("reservationForm.cautionInfo")}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    height: "50%",
                  }}
                >
                  <Typography variant="h5">
                    {t("reservationForm.reservationPriceTitle")}
                  </Typography>

                  <Typography variant="h3">
                    {"€" + reservationValues.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step4;
