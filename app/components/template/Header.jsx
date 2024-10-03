"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useScrollTrigger } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";

const pages = [
  "A propos",
  "Prestations",
  "Ecoles",
  "Entreprises",
  "Forum",
  "Contact",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <>
      <Box id="back-to-top-anchor" />
      <AppBar
        position="sticky"
        sx={{
          color: theme.two.main,
          bgcolor: trigger ? "rgba(0, 0, 0, 0.6)" : theme.four.main,
          backdropFilter: trigger ? "blur(10px)" : "none",
          transition: "background-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Image
                src="/LOGO_EDUKALIS.png"
                alt="Edukalis"
                width={100}
                height={100}
                quality={100}
              />
            </Box>

         

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={theme.two.main}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: "center", color: theme.one.main }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" , color: trigger ? 'white' : 'black'}}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
