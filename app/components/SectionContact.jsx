"use client";

import { Button, Container, TextField } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

function SectionContact() {
  const theme = useTheme();
  return (
    <section>
      <Container
        sx={{
          py: 10,
          color: theme.two.main,
        }}
      >
        <Image
          src="/LOGO_EDUKALIS.png"
          alt="Edukalis"
          width={200}
          height={200}
        />
        <h6 className="text-4xl font-bold py-5">
          Ensemble, faisons avancer vos ambitions !{" "}
        </h6>

        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            className="flex flex-col items-start  gap-3"
          >
            <Box
              className="relative h-[400px] w-full overflow-hidden "
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

            <p>
              <strong>Email :</strong>
              <a href="mailto:contact@edukalis.com">contact@edukalis.com</a>
            </p>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h2"
                className="text-4xl font-bold text-red-500 py-5"
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
                    <Grid item size={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item size={12}>
                      <TextField
                        fullWidth
                        label="Sujet"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item size={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item size={12}>
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default SectionContact;
