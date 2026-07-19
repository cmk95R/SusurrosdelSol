"use client";

import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  return (
    <Box
      id="subscribe"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "primary.dark",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
            }}
          >
            Suscríbete para más noticias
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 5,
              lineHeight: 1.7,
              fontSize: "1.125rem",
            }}
          >
            Recibí en tu correo las mejores ofertas de tours, consejos de viaje y las historias más inspiradoras del norte argentino.
          </Typography>

          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Ingresá tu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                flex: 1,
                maxWidth: 400,
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 30,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "secondary.main",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.6)",
                  opacity: 1,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: 30,
                px: 5,
                py: 1.8,
                fontWeight: 700,
                fontSize: "1rem",
                color: "primary.dark",
                boxShadow: "0 8px 24px rgba(255, 229, 56, 0.3)",
                "&:hover": {
                  boxShadow: "0 12px 32px rgba(255, 229, 56, 0.4)",
                },
              }}
            >
              Suscribirse
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
