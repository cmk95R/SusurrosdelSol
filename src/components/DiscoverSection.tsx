"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function DiscoverSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <Box
      id="discover"
      ref={ref}
      sx={{
        position: "relative",
        py: { xs: 12, md: 20 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 700,
      }}
    >
      <motion.div
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop"
          alt="Cerros jujeños"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(24, 56, 92, 0.55)",
          }}
        />
      </motion.div>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing: "0.2em",
              fontSize: "1rem",
              mb: 2,
              display: "block",
            }}
          >
            Explorá
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              mb: 4,
              fontSize: { xs: "2.5rem", md: "4rem" },
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Descubrí la aventura en los cerros jujeños
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: 700,
              mx: "auto",
              mb: 5,
              lineHeight: 1.8,
              fontSize: "1.125rem",
            }}
          >
            Dejate sorprender por los contrastes de la Puna: salares infinitos, géiseres humeantes,
            lagunas de altura y la imponente silueta del Hornocal al atardecer. Cada día es una nueva historia.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            href="#subscribe"
            sx={{
              borderRadius: 30,
              px: 5,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              color: "primary.dark",
              boxShadow: "0 8px 24px rgba(255, 229, 56, 0.3)",
              "&:hover": {
                boxShadow: "0 12px 32px rgba(255, 229, 56, 0.4)",
              },
            }}
          >
            Leer Más
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
