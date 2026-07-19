"use client";

import { useRef } from "react";
import { Box, Typography, Container, Button, Chip, IconButton } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <Box
      id="inicio"
      ref={ref}
      sx={{
        position: "relative",
        height: "100dvh",
        minHeight: { xs: 500, sm: 600, md: 700 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
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
          <source src="/video/final.mp4" type="video/mp4" />
        </video>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(44,24,16,0.55) 0%, rgba(44,24,16,0.25) 40%, rgba(245,230,211,1) 100%)",
          }}
        />
      </motion.div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", px: { xs: 2, md: 3 } }}>
        <motion.div style={{ opacity, y }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Chip
              label="HUMAHUACA, JUJUY"
              sx={{
                backgroundColor: "rgba(255, 248, 240, 0.85)",
                color: "primary.main",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.25em",
                mb: 4,
                px: 3,
                py: 1,
                fontSize: "0.75rem",
                borderRadius: 2,
                backdropFilter: "blur(4px)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Love Rosnita', cursive",
                color: "#FFF8F0",
                fontSize: { xs: "4rem", sm: "6.5rem", md: "8.5rem", lg: "10rem" },
                lineHeight: 0.85,
                textShadow: "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
                mb: 3,
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}
            >
              Susurros
              <br />
              <Box
                component="span"
                sx={{
                  fontFamily: "'Abuget', cursive",
                  fontWeight: 300,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "8.5rem" },
                  letterSpacing: "0.06em",
                  display: "block",
                  mt: 1,
                  opacity: 0.95,
                }}
              >
                del Sol
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box
              sx={{
                width: 60,
                height: 2,
                backgroundColor: "secondary.main",
                mx: "auto",
                mb: 4,
                borderRadius: 1,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Typography
              sx={{
                fontFamily: "'Josefin Sans', sans-serif",
                color: "rgba(255,248,240,0.85)",
                maxWidth: 600,
                mx: "auto",
                fontWeight: 300,
                mb: 5,
                fontSize: { xs: "1rem", md: "1.35rem" },
                letterSpacing: "0.08em",
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Tu refugio en el corazón de la Quebrada
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="contained"
                href="#reservar"
                sx={{
                  backgroundColor: "secondary.main",
                  color: "#2C1810",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  px: 5,
                  py: 1.5,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 8px 24px rgba(212, 160, 23, 0.35)",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                    boxShadow: "0 12px 32px rgba(212, 160, 23, 0.5)",
                  },
                }}
              >
                Consultar disponibilidad
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
      >
        <IconButton
          href="#galeria"
          sx={{
            color: "#FFF8F0",
            border: "2px solid rgba(255,248,240,0.5)",
            width: 48,
            height: 48,
            "&:hover": { borderColor: "#FFF8F0", backgroundColor: "rgba(255,248,240,0.1)" },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </motion.div>
    </Box>
  );
}
