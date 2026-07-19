"use client";

import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#2C1810",
        color: "#FFF8F0",
        py: { xs: 6, md: 8 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Love Rosnita', cursive",
              fontWeight: 400,
              fontSize: "2.2rem",
              mb: 1,
            }}
          >
            Susurros del Sol
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,248,240,0.7)", mb: 3 }}>
            Casa de alquiler en Humahuaca, Jujuy · 2 cuadras del centro
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
            {[
              { icon: <WhatsAppIcon />, href: "https://wa.me/541159764240" },
              { icon: <FacebookIcon />, href: "#" },
              { icon: <InstagramIcon />, href: "#" },
            ].map((social, i) => (
              <motion.div key={i} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  href={social.href}
                  target="_blank"
                  sx={{
                    color: "#FFF8F0",
                    border: "1px solid rgba(255,248,240,0.3)",
                    width: 44,
                    height: 44,
                    "&:hover": {
                      borderColor: "secondary.main",
                      backgroundColor: "secondary.main",
                      color: "#2C1810",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>

          <Divider sx={{ borderColor: "rgba(255,248,240,0.15)", mb: 3 }} />

          <Typography variant="caption" sx={{ color: "rgba(255,248,240,0.5)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Susurros del Sol · Humahuaca, Jujuy · Argentina
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
