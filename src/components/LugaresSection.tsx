"use client";

import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const lugares = [
  {
    src: "/lugares/hornocal.jpg",
    title: "El Hornocal",
    desc: "Los 14 colores a 25 minutos en auto.",
  },
  {
    src: "/lugares/Humahuaca.webp",
    title: "Quebrada de Humahuaca",
    desc: "Patrimonio de la Humanidad a tu alcance.",
  },
  {
    src: "/lugares/pruma.webp",
    title: "Purmamarca",
    desc: "Cerro de los Siete Colores a media hora.",
  },
  {
    src: "/lugares/paseos.webp",
    title: "Paseos de la Quebrada",
    desc: "Caminatas, artesanías y cultura andina.",
  },
  {
    src: "/lugares/Salinas.jpg",
    title: "Salinas Grandes",
    desc: "Desierto de sal a 1 hora de viaje.",
  },
  {
    src: "/lugares/tilcara.jpg",
    title: "Tilcara",
    desc: "Pucará histórico y feria artesanal.",
  },
];

export default function LugaresSection() {
  return (
    <Box id="lugares" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
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
            Descubrí Humahuaca
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
            Lugares para visitar
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
              fontSize: "1.125rem",
            }}
          >
            Desde la casa podés acceder fácilmente a los principales atractivos de la Quebrada.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {lugares.map((lugar, i) => (
            <motion.div
              key={lugar.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card
                sx={{
                  overflow: "hidden",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 60px rgba(44, 24, 16, 0.18)",
                    "& .img": { transform: "scale(1.12)" },
                    "& .overlay": { opacity: 1 },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                  }}
                >
                  <Image
                    src={lugar.src}
                    alt={lugar.title}
                    fill
                    className="img"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(44,24,16,0.6) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 2,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "#FFF8F0", fontWeight: 600 }}>
                      {lugar.desc}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 700, mb: 0.5 }}>
                    {lugar.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {lugar.desc}
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
