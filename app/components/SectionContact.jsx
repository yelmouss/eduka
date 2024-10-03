"use client";

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Snackbar,
  Alert,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

function SectionContact() {
  const theme = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 50,
      transition: { duration: 1.2 },
    });
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: ${theme.two.main};">
        <div style="text-align: center; padding: 20px; background-color: ${
          theme.four.main
        };">
          <img src="/LOGO_EDUKALIS.png" alt="Edukalis" width="200" height="200" />
        </div>
        <div style="padding: 20px;">
          <h1 style="color: ${theme.one.main};">Nouvelle demande de contact</h1>
          <p><strong>Nom complet :</strong> ${formData.fullName}</p>
          <p><strong>Email :</strong> ${formData.email}</p>
          <p><strong>Téléphone :</strong> ${formData.phone}</p>
          <p><strong>Sujet :</strong> ${formData.subject}</p>
          <p><strong>Message :</strong><br/> ${formData.message}</p>
          <hr />
          <p style="font-style: italic;">Ceci est un email automatique envoyé depuis le site web d'EDUKALIS suite à votre demande de contact.</p>
          <p>Vous pouvez répondre directement à cet email si vous pensez qu'il s'agit d'une erreur.</p>
          <p>Nous vous contacterons au plus vite.</p>
        </div>
        <div style="text-align: center; padding: 10px; background-color: ${
          theme.four.main
        }; color: ${theme.two.main};">
          <p>&copy; ${new Date().getFullYear()} EDUKALIS. Tous droits réservés.</p>
        </div>
      </div>
    `;

    const data = {
      to: formData.email,
      subject: `Contact: ${formData.subject}`,
      html: htmlContent,
    };

    try {
      await axios.post("/api/SendContactMail", data);
      setSnackbarMessage(
        `Email envoyé à ${formData.email} concernant ${formData.subject}`
      );
      setSnackbarOpen(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      setSnackbarMessage("Une erreur s'est produite lors de l'envoi.");
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref}>
      <Container sx={{ p: 4, py: 10, color: theme.two.main }}>
      <Image
                src="/LOGO_EDUKALIS.png"
                alt="Edukalis"
                width={200}
                height={200}
                style={{
                  alignSelf: "start",
                  justifySelf: "start",
                }}
              />
      <h4 className="text-4xl py-10">Ensemble, faisons avancer vos ambitions !</h4>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            className="flex flex-col items-start gap-3"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{ width: "100%" }}
            >
              <Box
                className="relative h-[400px] w-full overflow-hidden"
                sx={{
                  borderRadius: "15% 0 15% 0",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  fill
                  src="/imageContact.png"
                  alt="Etudiants"
                  className="w-full object-cover"
                />
              </Box>
              <p className="mt-4">
                <strong>Email :</strong>
                <a href="mailto:contact@edukalis.com"> contact@edukalis.com</a>
              </p>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={controls}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography
                  className="text-2xl font-bold text-red-500 py-5"
                  component={"h6"}
                >
                  NOUS CONTACTER
                </Typography>
                <Box className="flex items-center justify-center">
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Nom complet"
                          variant="outlined"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid size={12}>
                        <PhoneInput
                          country={"fr"}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputStyle={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid size={12}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="subject">Sujet</InputLabel>
                          <Select
                            fullWidth
                            label="Sujet"
                            variant="outlined"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="Etudiant">Etudiant</MenuItem>
                            <MenuItem value="Ecole">Ecole</MenuItem>
                            <MenuItem value="Entreprise">Entreprise</MenuItem>
                            <MenuItem value="Partenariat">Partenariat</MenuItem>
                            <MenuItem value="Autre">Autre</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Envoi en cours..." : "Envoyer"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default SectionContact;
