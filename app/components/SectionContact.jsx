"use client";

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionContact() {
  const theme = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 1.2 },
      });
    }
  }, [controls, inView]);

  return (
    <section ref={ref}>
      <Container
        sx={{
          p: 4,
          py: 10,
          color: theme.two.main,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/LOGO_EDUKALIS.png"
            alt="Edukalis"
            width={200}
            height={200}
          />
        </motion.div>
        <motion.h6
          className="text-4xl font-bold py-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Ensemble, faisons avancer vos ambitions !
        </motion.h6>

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
          <Grid size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography
                  variant="h2"
                  className="text-3xl font-bold text-red-500 py-5"
                  component={"h6"}
                >
                  NOUS CONTACTER
                </Typography>
                <Box className="flex items-center justify-center">
                  <form autoComplete="off">
                    <Grid container spacing={2}>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Nom complet"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          type="email"
                          required
                        />
                      </Grid>

                      <Grid size={12}>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="Sujet">Sujet</InputLabel>
                          <Select
                            fullWidth
                            label="Sujet"
                            variant="outlined"
                            id="Sujet"
                            required
                          >
                            <MenuItem value="Etudiant">Etudiant</MenuItem>
                            <MenuItem value="Ecole">Ecole</MenuItem>
                            <MenuItem value="Ecole">Entreprise</MenuItem>

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
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Envoyer
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
    </section>
  );
}

export default SectionContact;
