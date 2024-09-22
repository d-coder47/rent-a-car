import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Menu, Close } from "@mui/icons-material";
import LangSelector from "../LangSelector/LangSelector";

const BurguerMenu: React.FC = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const items = [
    t("menu.exposicaoVeiculos"),
    t("menu.servicos"),
    t("menu.contacto"),
  ];

  const contactItems = ["vhinvestimentos20@gmail.com", "+238 593 55 35"];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const ListItemTextStyle = {
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "16px",
      lg: "16px",
      xl: "16px",
    },
    fontFamily: "Istok Web",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23px",
    color: "#000000",
  };
  const DrawerList = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: "98%",
          display: "flex",
          justifyContent: "right",
          margin: "10px 10px 10px 0px",
        }}
      >
        <Close onClick={toggleDrawer(false)} />
      </Box>
      <List>
        {items.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={ListItemTextStyle}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          width: "100%",
        }}
      />
      <List>
        {contactItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={ListItemTextStyle}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Menu
          sx={{
            fontSize: "30px",
          }}
        />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: {
              xs: "65%",
              sm: "40%",
              md: "30%",
              lg: "25%",
              xl: "20%",
            },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default BurguerMenu;
