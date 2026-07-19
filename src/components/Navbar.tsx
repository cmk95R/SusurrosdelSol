"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Galería", href: "#galeria" },
  { label: "Detalles", href: "#detalles" },
  { label: "Lugares", href: "#lugares" },
  { label: "Reservar", href: "#reservar" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trigger = useScrollTrigger({ threshold: 100 });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? "rgba(245, 230, 211, 0.95)"
              : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            transition: "all 0.4s ease",
            borderBottom: scrolled ? "1px solid rgba(199, 91, 57, 0.15)" : "none",
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 1280,
              width: "100%",
              mx: "auto",
              px: { xs: 2, md: 4 },
              py: 1,
            }}
          >
            <Box
              component="a"
              href="#inicio"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: scrolled ? "primary.main" : "#FFF8F0",
                mr: "auto",
                transition: "color 0.4s ease",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontFamily: "'Airbnb Cereal', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                Susurros del Sol
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: scrolled ? "text.primary" : "#FFF8F0",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    fontSize: "0.875rem",
                    transition: "color 0.4s ease",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      width: 0,
                      height: 2,
                      backgroundColor: "secondary.main",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover::after": {
                      width: "60%",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                href="https://wa.me/541159764240"
                target="_blank"
                startIcon={<WhatsAppIcon />}
                sx={{
                  ml: 2,
                  borderRadius: 30,
                  px: 3,
                  py: 1,
                  backgroundColor: "#25D366",
                  color: "#fff",
                  fontWeight: 700,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#1DA851",
                    boxShadow: "0 4px 16px rgba(37, 211, 102, 0.3)",
                  },
                }}
              >
                Reservar
              </Button>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ display: { md: "none" }, color: scrolled ? "primary.main" : "#FFF8F0" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "background.paper",
            width: 280,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Airbnb Cereal', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "0.02em",
              color: "primary.main",
              mb: 3,
            }}
          >
            Susurros del Sol
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {link.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            fullWidth
            variant="contained"
            href="https://wa.me/541159764240"
            target="_blank"
            startIcon={<WhatsAppIcon />}
            sx={{
              mt: 3,
              borderRadius: 30,
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: 700,
              py: 1.5,
              "&:hover": { backgroundColor: "#1DA851" },
            }}
          >
            Reservar por WhatsApp
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
