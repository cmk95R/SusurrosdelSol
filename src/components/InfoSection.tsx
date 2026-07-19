"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfoSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 20px 60px rgba(24, 56, 92, 0.15)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1600&auto=format&fit=crop"
                alt="Paisaje de Humahuaca"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                border: "1px solid",
                borderColor: "primary.light",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "primary.main",
                  mb: 3,
                  fontStyle: "italic",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: 1.4,
                }}
              >
                "Paisajes que enamoran, tradiciones que perduran"
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
                La Quebrada de Humahuaca, Patrimonio de la Humanidad, es mucho más que un destino turístico.
                Es un viaje a través del tiempo, donde cada pueblo, cada cerro y cada camino cuenta una historia
                de resistencia, cultura y belleza natural sin igual.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
                Desde los 14 colores del Hornocal hasta las calles empedradas de Purmamarca,
                cada rincón te invita a descubrir una Argentina que pocos conocen.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href="#discover"
                sx={{
                  borderRadius: 30,
                  px: 4,
                  py: 1.2,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 },
                }}
              >
                Leer Más
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
