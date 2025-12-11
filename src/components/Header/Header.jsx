import React, { useContext } from "react";
import {
  Box,
  IconButton,
  Toolbar,
  AppBar,
  useMediaQuery,
} from "@mui/material";

import { ThemeContext } from "../../theme/ThemeContext";
import { Link, useOutletContext } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const { handleMobileMenu } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:800px)");
  const { setMode, mode } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar
        position="static"
        component="header"   // <----- VERY IMPORTANT
        sx={{
          background: mode === "light" ? "transparent" : "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {isMobile && <MenuIcon onClick={() => handleMobileMenu((prev) => !prev)} />}
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
              <h1>
                Bot AI
              </h1>

            <IconButton
              onClick={() =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
