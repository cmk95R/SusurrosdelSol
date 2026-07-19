"use client";

import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import MapIcon from "@mui/icons-material/Map";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const tours = [
  {
    icon: <MapIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Aventura",
    description:
      "Recorridos por senderos únicos en la Quebrada de Humahuaca. Caminatas guiadas por paisajes de colores imposibles que desafían la imaginación.",
  },
  {
    icon: <ExploreIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Guías",
    description:
      "Expertos locales que te contarán la historia, la cultura y los secretos de cada rincón. Viví la experiencia con quienes conocen cada piedra.",
  },
  {
    icon: <LocalFireDepartmentIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    title: "Camping",
    description:
      "Noches bajo un cielo estrellado como en ningún otro lugar. Camping organizado con todas las comodidades en plena naturaleza.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function ToursSection() {
  return (
    <Box id="tours" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
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
              color: "secondary.dark",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textAlign: "center",
              display: "block",
              mb: 1,
            }}
          >
            Experiencias
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.75rem" },
            }}
          >
            Nuestros Tours
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              mb: 8,
              lineHeight: 1.8,
              fontSize: "1.125rem",
            }}
          >
            Diseñamos cada recorrido para que descubras lo mejor de la Puna jujeña.
            Desde caminatas suaves hasta expediciones de alta montaña, tenemos la aventura perfecta para vos.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 48px rgba(24, 56, 92, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>{tour.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "primary.main", mb: 2, fontWeight: 700 }}
                  >
                    {tour.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {tour.description}
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
