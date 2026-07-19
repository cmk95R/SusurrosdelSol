"use client";

import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import BedIcon from "@mui/icons-material/Bed";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WeekendIcon from "@mui/icons-material/Weekend";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const detalles = [
  { icon: <BedIcon sx={{ fontSize: 40 }} />, title: "2 Habitaciones", desc: "Capacidad para descansar cómodamente." },
  { icon: <KitchenIcon sx={{ fontSize: 40 }} />, title: "Cocina equipada", desc: "Todo lo necesario para cocinar durante tu estadía." },
  { icon: <BathtubIcon sx={{ fontSize: 40 }} />, title: "Baño completo", desc: "Con agua caliente y todos los servicios." },
  { icon: <WeekendIcon sx={{ fontSize: 40 }} />, title: "Living", desc: "Espacio de relax para disfrutar después del paseo." },
  { icon: <GroupIcon sx={{ fontSize: 40 }} />, title: "6 Huéspedes", desc: "Ideal para familias o grupos de amigos." },
  { icon: <LocationOnIcon sx={{ fontSize: 40 }} />, title: "2 cuadras del centro", desc: "Cerca de todo, lejos del ruido." },
];

export default function DetallesSection() {
  return (
    <Box id="detalles" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
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
            Todo lo que necesitás
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
            Detalles de la casa
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
            Casa completa con todo el confort para tu estadía en el corazón de la Quebrada.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {detalles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 1,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 48px rgba(44, 24, 16, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ color: "text.primary", mb: 1, fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
