import React from "react";
import Logo from "../common/Logo";
import InputSearch from "../common/InputSearch";
import Authen from "../common/Authen";
import { AppBar, Box, Container } from "@mui/material";
import Categories from "./mega_menu/Categories";
import Products from "./mega_menu/Products";
import Blogs from "./mega_menu/Blogs";

function Navigation() {
  return (
    <AppBar position="static">
      <Container>
        <Box sx={{ display: "flex", padding: 2, alignItems: "center" }}>
          <Logo sx={{ flexGrown: 1 }} />
          <InputSearch sx={{ flexGrown: 1 }} />
          <Categories />
          <Products />
          <Blogs />
          <Authen sx={{ flexGrown: 1 }} />
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navigation;
