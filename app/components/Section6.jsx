"use client";
import Grid from "@mui/material/Grid2";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ReactPlayer from "react-player";

function Section6() {
  const theme = useTheme();

  return (
    <section>
      <Container
        sx={{
          py: 10,
          color: theme.two.main,
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }} className="flex items-center">
            <Paper elevation={3} sx={{ p: 4 }}>
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
              <Typography
                variant="h3"
                className="text-4xl font-bold text-red-500 py-5"
              >
                UNE ALLIANCE REUSSIE
              </Typography>
              <ul>
                <li className="text-lg py-1">
                  <strong>Recrutement d’Étudiants :</strong> Un service dédié
                  pour le recrutement de nouveaux étudiants à travers notre
                  réseau national et international.
                </li>
                <li className="text-lg py-1">
                  <strong>Internationalisation :</strong> Représentation de la
                  marque école à l’étranger, facilitant des partenariats avec
                  d’autres institutions et la participation à des événements
                  scientifiques, culturels et sportifs.
                </li>
                <li className="text-lg py-1">
                  <strong>Réseautage et Échanges :</strong> Espace dédié pour
                  que les enseignants et étudiants interagissent, partagent des
                  bonnes pratiques et collaborent sur des projets éducatifs.
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h2"
                className="font-bold"
                sx={{
                  color: theme.two.main,
                }}
              >
                <span className="text-red-500">E</span>coles
              </Typography>

              <div style={{ width: "100%", maxWidth: "100%" }}>
                <ReactPlayer
                  url="/school.mp4"
                  playing
                  loop
                  muted
                  className="my-4 rounded-lg"
                  width="100%"
                  height="auto"
                />
              </div>
              <Button
                startIcon={<DoubleArrowIcon />}
                className="mt-4"
                variant="contained"
                color="primary"
              >
                Register now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Section6;
