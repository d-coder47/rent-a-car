import React from "react";
import { CloudUpload } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IStep } from "../../interfaces";
import { useTranslation } from "react-i18next";

const Step2: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
  const { t } = useTranslation();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
          {t("reservationForm.documentsTitle")}
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
            {t("reservationForm.documentsInstructions")}
          </Typography>
          <Typography variant="body2">
            {t("reservationForm.stepIndicator2")}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            height: "256px",
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
                htmlFor={"frontImage"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>
                  {t("reservationForm.identificationDocLabel")}
                </Typography>
              </InputLabel>
              <Avatar
                src={reservationValues.identificationDoc.filePath}
                sx={{
                  width: "245px",
                  maxHeight: "131px",
                  minHeight: "131px",
                  borderRadius: 0,
                  marginTop: "10px",
                  marginBottom: "20px",
                  display:
                    reservationValues.identificationDoc.fileType.startsWith(
                      "image/"
                    ) || reservationValues.identificationDoc.fileType === ""
                      ? "block"
                      : "none",
                }}
              />

              <Box
                sx={{
                  display:
                    reservationValues.identificationDoc.fileType ===
                    "application/pdf"
                      ? "flex"
                      : "none",

                  width: "60%",
                  height: "62%",
                  marginTop: "10px",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">
                  {reservationValues.identificationDoc.fileName}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "red",
                  display:
                    fieldsErrors.identificationDoc !== "" ? "block" : "none",
                }}
              >
                {fieldsErrors.identificationDoc}
              </Typography>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
              >
                {t("reservationForm.uploadFile")}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleChange}
                  name="identificationDoc"
                  accept="image/*,application/pdf"
                />
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <InputLabel
                shrink={false}
                htmlFor={"frontImage"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>
                  {t("reservationForm.driverLicenceLabel")}
                </Typography>
              </InputLabel>
              <Avatar
                src={reservationValues.driverLicence.filePath}
                sx={{
                  width: "245px",
                  maxHeight: "131px",
                  minHeight: "131px",
                  borderRadius: 0,
                  marginTop: "10px",
                  marginBottom: "20px",
                  display:
                    reservationValues.driverLicence.fileType.startsWith(
                      "image/"
                    ) || reservationValues.driverLicence.fileType === ""
                      ? "block"
                      : "none",
                }}
              />

              <Box
                sx={{
                  display:
                    reservationValues.driverLicence.fileType ===
                    "application/pdf"
                      ? "flex"
                      : "none",

                  width: "60%",
                  height: "62%",
                  marginTop: "10px",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">
                  {reservationValues.driverLicence.fileName}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "red",
                  display: fieldsErrors.driverLicence !== "" ? "block" : "none",
                }}
              >
                {fieldsErrors.driverLicence}
              </Typography>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUpload />}
              >
                {t("reservationForm.uploadFile")}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleChange}
                  name="driveLic"
                  accept="image/*,application/pdf"
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Step2;
