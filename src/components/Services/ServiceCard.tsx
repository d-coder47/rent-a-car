import { Avatar, Box, Typography } from "@mui/material";
import car from "../../assets/servicos/carro.svg";
import { IService } from "../../interfaces";

const ServiceCard = ({ title, description, icon }: IService) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap=".5rem">
      <Avatar src={car} />
      <Typography variant="h3" textAlign="center">
        {title}
      </Typography>
      <Typography variant="body2" textAlign="justify">
        {description}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
