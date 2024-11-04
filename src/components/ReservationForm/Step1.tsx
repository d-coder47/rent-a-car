import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";
import { useTranslation } from "react-i18next";
import { MuiTelInput } from "mui-tel-input";

const Step1: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const { t } = useTranslation();

  const handlePhoneChange = (value: string) => {
    const syntheticEvent = {
      target: { value, name: "phone" },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange(syntheticEvent);
  };
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
        <Typography variant="h5">
          {t("reservationForm.billingInformationTitle")}
        </Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            {t("reservationForm.billingInformationInstructions")}
          </Typography>
          <Typography variant="body2">
            {t("reservationForm.stepIndicator1")}
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
            <Grid size={6}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography> {t("reservationForm.nameLabel")}</Typography>
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

            <Grid size={6}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>{t("reservationForm.phoneLabel")}</Typography>
              </InputLabel>
              <MuiTelInput
                name="phone"
                error={fieldsErrors.phone !== ""}
                helperText={fieldsErrors.phone}
                variant="outlined"
                autoComplete="off"
                defaultCountry="CV"
                value={reservationValues.phone}
                onChange={handlePhoneChange}
                sx={{
                  width: "450px",

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

            <Grid size={6}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>{t("reservationForm.emailLabel")}</Typography>
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                autoComplete="off"
                name="email"
                sx={{
                  width: "450px",

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
