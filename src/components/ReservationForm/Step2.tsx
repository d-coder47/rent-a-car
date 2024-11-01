import React, { useState } from "react";
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

const Step2: React.FC<IStep> = ({
  reservationValues,
  fieldsErrors,
  handleChange,
}) => {
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
        width: "1000px",
        height: "100%",
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">Documentos</Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            Por favor, insira as imagens dos seus documentos de identificação.
          </Typography>
          <Typography variant="body2">Passo 2 de 4</Typography>
        </Box>

        <Box sx={{ marginTop: "30px", height: "256px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}
            rowSpacing={3}
            columnSpacing={6}
          >
            <Grid size={6}>
              <InputLabel shrink={false} htmlFor={"frontImage"}>
                <Typography>Documento de identificação</Typography>
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
                Upload file
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleChange}
                  name="identificationDoc"
                  accept="image/*,application/pdf"
                />
              </Button>
            </Grid>

            <Grid size={6}>
              <InputLabel shrink={false} htmlFor={"frontImage"}>
                <Typography>Carta de condução</Typography>
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
                Upload file
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