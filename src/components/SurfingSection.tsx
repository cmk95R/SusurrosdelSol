"use client";

import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SurfingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <Box
      id="surfing"
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        pb: { xs: 8, md: 12 },
      }}
    >
      <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop"
          alt="Aventura acuática"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(24,56,92,0.6) 0%, rgba(24,56,92,0.1) 50%, transparent 100%)",
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center">
        <Typography
          variant="h1"
          sx={{
            color: "secondary.main",
            fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
            textShadow: "0 4px 30px rgba(0,0,0,0.4)",
            lineHeight: 1,
          }}
        >
          Surfing
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.85)",
            mt: 2,
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          La naturaleza te invita a desafiar tus límites
        </Typography>
      </motion.div>
    </Box>
  );
}
