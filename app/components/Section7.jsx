"use client";
import Grid from "@mui/material/Grid2";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ReactPlayer from "react-player";

function Section7() {
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
                BONHEUR ET PRODUCTIVITE
              </Typography>
              <p>
                <strong>
                  Nous vous proposons des actions concrètes pour :
                </strong>
              </p>
              <ul>
                <li>Augmenter votre productivité</li>
                <li>Augmenter la motivation de vos équipes</li>
                <li>Une meilleure gestion du stress</li>
                <li>Une réduction de l’absentéisme</li>
                <li>Une réduction du turn-over</li>
                <li>Une acquisition de nouveaux talents</li>
              </ul>
              <p>
                et... <br />
                Apporter le bonheur même chez soi.
              </p>
              <p>Engagez votre entreprise et vos équipes dans le bonheur.</p>
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
                <span className="text-red-500">E</span>ntreprises
              </Typography>
              <div style={{ width: "100%", maxWidth: "100%" }}>
                <ReactPlayer
                  url="/Video3.mp4"
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

export default Section7;
