"use client";
import Grid from "@mui/material/Grid2";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ReactPlayer from "react-player";

function Section8() {
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
                AUTHENTICITE & INNOVATION
              </Typography>
              <p>
                ForumEDuc est le salon en ligne proposé par Edukalis pour offrir
                aux écoles une expérience authentique, innovante permettant aux
                écoles de partager sans limite géographique, sans limite de
                temps, sans limite de place en traversant plusieurs pays,
                sillonnant plusieurs villes pour faire connaitre l’école, son
                histoire, ses valeurs, ses programmes et ses activités.
              </p>
              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h3"
                  className="text-2xl font-bold text-red-500 py-5"
                >
                  PROGRAMME
                </Typography>

                <Image
                  src="/calendar.svg"
                  alt="Edukalis"
                  width={200}
                  height={200}
                />
              </div>
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
                Forum ’ <span className="text-red-500">ED</span>uc
              </Typography>
              <div style={{ width: "100%", maxWidth: "100%" }}>
                <ReactPlayer
                  url="/Video4.mp4"
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

export default Section8;
