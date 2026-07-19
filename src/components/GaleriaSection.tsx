"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const fotos = [
  { src: "/img/habitacion1.jpg", label: "Habitación principal" },
  { src: "/img/pasillo.jpg", label: "Pasillo" },
  { src: "/img/living1.jpg", label: "Living" },
  { src: "/img/cocina.jpg", label: "Cocina - Comedor" },
  { src: "/img/comedor.jpg", label: "Comedor" },
  { src: "/img/bano.jpg", label: "Baño" },
];

export default function GaleriaSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleOpen = (index: number) => {
    setSelected(index);
    setOpen(true);
  };

  return (
    <Box id="galeria" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textAlign: "center",
              display: "block",
              mb: 1,
            }}
          >
            Conocé la casa
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "text.primary",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.75rem" },
            }}
          >
            Galería
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
              fontSize: "1.125rem",
            }}
          >
            Espacios cómodos y acogedores para que te sientas como en casa.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleOpen(i)}
              style={{ cursor: "pointer" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  boxShadow: "0 4px 20px rgba(44, 24, 16, 0.1)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(44, 24, 16, 0.2)",
                    "& .overlay": { opacity: 1 },
                    "& .img": { transform: "scale(1.08)" },
                  },
                }}
              >
                <Image
                  src={foto.src}
                  alt={foto.label}
                  fill
                  className="img"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(44,24,16,0.7) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    p: 2,
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#FFF8F0", fontWeight: 600 }}>
                    {foto.label}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative", textAlign: "center", p: 0 }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/10", maxHeight: "80vh" }}>
            <Image
              src={fotos[selected].src}
              alt={fotos[selected].label}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: "#FFF8F0",
              mt: 2,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {fotos[selected].label}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}
