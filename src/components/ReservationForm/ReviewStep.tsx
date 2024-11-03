import { Avatar, Box, InputLabel, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { IReviewStep } from "../../interfaces";
import car_image from "../../assets/carCard.png";
import { handleGridSize } from "./utils";

const ReviewStep: React.FC<IReviewStep> = ({
  handleReviewDetails,
  reservationDetails,
}) => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "#ffffff",
        width: "600px",
        height: "100%",
        borderRadius: "12px",
        padding: "30px 20px",
      }}
    >
      <Box>
        <Typography variant="h5">Detalhes da reserva</Typography>

        <Box
          sx={{
            width: "97%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Typography variant="body2">
            Por favor, confirme todos os detalhes da sua reserva antes de
            prosseguir.
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
            <Grid size={4}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>Nome</Typography>
              </InputLabel>

              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                }}
              >
                {reservationDetails.name}
              </Typography>
            </Grid>

            <Grid size={4}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>Email</Typography>
              </InputLabel>

              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                }}
              >
                {reservationDetails.email}
              </Typography>
            </Grid>

            <Grid
              size={4}
              sx={{
                display: reservationDetails.phone === "" ? "none" : "block",
              }}
            >
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>Telefone</Typography>
              </InputLabel>

              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                }}
              >
                {reservationDetails.phone}
              </Typography>
            </Grid>

            <Grid size={12}>
              <InputLabel
                shrink={false}
                htmlFor={"username"}
                sx={{
                  fontFamily: "Istok Web, Roboto, Arial, sans-serif",
                }}
              >
                <Typography>Veículo</Typography>
              </InputLabel>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={12}
              rowSpacing={8}
              columnSpacing={6}
            >
              {reservationDetails.vehicle.map((car, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: handleGridSize(reservationDetails.vehicle, 12),
                    sm: handleGridSize(reservationDetails.vehicle, 6),
                    md: handleGridSize(reservationDetails.vehicle, 6),
                    lg: handleGridSize(reservationDetails.vehicle, 3),
                    xl: handleGridSize(reservationDetails.vehicle, 3),
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        background: theme.palette.primary.main,
                        width: "180px",
                        borderRadius: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <Avatar
                        src={car_image}
                        sx={{
                          height: "120px",
                          width: "180px",
                          borderRadius: "0px",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {car.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Grid
              size={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid size={4}>
                <Box
                  sx={{
                    width: "250px",
                    height: "100px",
                    background: "#F4F4F4",
                    border: "2px solid #FE9E00",
                    borderRadius: "12px",
                    padding: "5px 10px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      marginBottom: "10px",
                    }}
                  >
                    Custo total da reserva
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Número de dias:
                    </Typography>

                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {reservationDetails.days}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {t("reservationForm.reservationPriceTitle")}
                    </Typography>

                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {"€" + reservationDetails.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewStep;