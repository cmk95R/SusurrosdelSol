"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  Chip,
  Fade,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function calcularNoches(inicio: string, fin: string) {
  if (!inicio || !fin) return 0;
  const d1 = new Date(inicio);
  const d2 = new Date(fin);
  const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function formatearFecha(fechaStr: string) {
  if (!fechaStr) return "";
  const [y, m, d] = fechaStr.split("-");
  return `${d}/${m}/${y}`;
}

export default function CTASection() {
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

  const noches = useMemo(() => calcularNoches(desde, hasta), [desde, hasta]);

  const confirmar = () => {
    if (!desde || !hasta) return;
    const texto = `Hola! Quiero reservar *Susurros del Sol* en Humahuaca.\n\n📅 Fechas:\nLlegada: ${formatearFecha(desde)}\nSalida: ${formatearFecha(hasta)}\n🌙 Noches: ${noches}\n\n¿Hay disponibilidad?`;
    const url = `https://wa.me/541159764240?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const fechasListas = !!desde && !!hasta;

  return (
    <Box
      id="reservar"
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/video/fin2.mp4" type="video/mp4" />
      </video>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(44,24,16,0.88) 0%, rgba(154,64,36,0.75) 50%, rgba(44,24,16,0.88) 100%)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              <CalendarMonthIcon
                sx={{ fontSize: 56, color: "secondary.main", mb: 2 }}
              />
            </motion.div>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#FFF8F0",
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 700,
                mb: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Reservá tu estadía
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Josefin Sans', sans-serif",
                color: "rgba(255,248,240,0.7)",
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 300,
                letterSpacing: "0.06em",
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Elegí tus fechas y coordinamos tu reserva por WhatsApp
            </Typography>
          </Box>

          {/* Booking Card */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "rgba(255, 248, 240, 0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 248, 240, 0.12)",
              borderRadius: 5,
              p: { xs: 3, md: 5 },
              maxWidth: 560,
              mx: "auto",
            }}
          >
            {/* Fechas */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mb: 3,
              }}
            >
              {/* Llegada */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Box
                  sx={{
                    backgroundColor: desde
                      ? "rgba(212, 160, 23, 0.15)"
                      : "rgba(255, 248, 240, 0.08)",
                    border: desde
                      ? "2px solid rgba(212, 160, 23, 0.5)"
                      : "2px solid rgba(255, 248, 240, 0.15)",
                    borderRadius: 3,
                    p: 2,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {desde && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 8,
                        height: 8,
                        backgroundColor: "#25D366",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <LoginIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        color: "rgba(255,248,240,0.6)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Llegada
                    </Typography>
                  </Box>
                  <TextField
                    type="date"
                    value={desde}
                    onChange={(e) => setDesde(e.target.value)}
                    placeholder="Seleccionar"
                    fullWidth
                    variant="standard"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          color: desde ? "#FFF8F0" : "rgba(255,248,240,0.4)",
                          fontFamily: "'Airbnb Cereal', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          "& input": { p: 0 },
                        },
                      },
                    }}
                    sx={{ m: 0 }}
                  />
                </Box>
              </motion.div>

              {/* Salida */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Box
                  sx={{
                    backgroundColor: hasta
                      ? "rgba(212, 160, 23, 0.15)"
                      : "rgba(255, 248, 240, 0.08)",
                    border: hasta
                      ? "2px solid rgba(212, 160, 23, 0.5)"
                      : "2px solid rgba(255, 248, 240, 0.15)",
                    borderRadius: 3,
                    p: 2,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {hasta && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 8,
                        height: 8,
                        backgroundColor: "#25D366",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <LogoutIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        color: "rgba(255,248,240,0.6)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Salida
                    </Typography>
                  </Box>
                  <TextField
                    type="date"
                    value={hasta}
                    onChange={(e) => setHasta(e.target.value)}
                    placeholder="Seleccionar"
                    fullWidth
                    variant="standard"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          color: hasta ? "#FFF8F0" : "rgba(255,248,240,0.4)",
                          fontFamily: "'Airbnb Cereal', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          "& input": { p: 0 },
                        },
                      },
                    }}
                    sx={{ m: 0 }}
                  />
                </Box>
              </motion.div>
            </Box>

            {/* Resumen noches */}
            <AnimatePresence>
              {fechasListas && noches > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      mb: 3,
                      py: 1.5,
                      backgroundColor: "rgba(212, 160, 23, 0.1)",
                      borderRadius: 2,
                      border: "1px dashed rgba(212, 160, 23, 0.4)",
                    }}
                  >
                    <NightsStayIcon sx={{ color: "secondary.main", fontSize: 22 }} />
                    <Typography
                      sx={{
                        fontFamily: "'Airbnb Cereal', sans-serif",
                        color: "#FFF8F0",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      {noches} {noches === 1 ? "noche" : "noches"} seleccionadas
                    </Typography>
                    <Chip
                      label={`${formatearFecha(desde)} → ${formatearFecha(hasta)}`}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,248,240,0.15)",
                        color: "#FFF8F0",
                        fontFamily: "'Airbnb Cereal', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                whileHover={fechasListas ? { scale: 1.02 } : {}}
                whileTap={fechasListas ? { scale: 0.98 } : {}}
              >
                <Button
                  size="medium"
                  variant="contained"
                  onClick={confirmar}
                  disabled={!fechasListas}
                  startIcon={
                    fechasListas ? (
                      <WhatsAppIcon sx={{ fontSize: 28 }} />
                    ) : (
                      <CalendarMonthIcon sx={{ fontSize: 22 }} />
                    )
                  }
                  sx={{
                    backgroundColor: fechasListas
                      ? "#25D366"
                      : "rgba(255, 248, 240, 0.1)",
                    color: fechasListas ? "#fff" : "rgba(255,248,240,0.4)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    py: 2,
                    px: 5,
                    borderRadius: 3,
                    fontFamily: "'Airbnb Cereal', sans-serif",
                    letterSpacing: "0.02em",
                    boxShadow: fechasListas
                      ? "0 8px 32px rgba(37, 211, 102, 0.35)"
                      : "none",
                    border: fechasListas
                      ? "none"
                      : "1px solid rgba(255,248,240,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: fechasListas ? "#1DA851" : undefined,
                      boxShadow: fechasListas
                        ? "0 12px 40px rgba(37, 211, 102, 0.5)"
                        : "none",
                    },
                    "&:disabled": {
                      color: "rgba(255,248,240,0.3)",
                    },
                  }}
                >
                  {fechasListas
                    ? "Consultar fecha"
                    : "Seleccioná ambas fechas"}
                </Button>
              </motion.div>
            </Box>
          </Paper>

          {/* Footer */}
          <Fade in>
            <Typography
              sx={{
                color: "rgba(255,248,240,0.5)",
                textAlign: "center",
                mt: 4,
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
              }}
            >
              WhatsApp: +54 11 5976-4240 · Humahuaca, Jujuy
            </Typography>
          </Fade>
        </motion.div>
      </Container>
    </Box>
  );
}
