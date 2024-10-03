"use client";
import { useTheme } from "@emotion/react";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
function Section4() {
  const theme = useTheme();
  return (
    <section className="min-h-screen flex flex-col items-center justify-start w-full p-5 py-20">
      <Container maxWidth={"lg"}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
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
            <br />
            <h2
              className="text-4xl font-bold"
              style={{
                color: theme.two.main,
              }}
            >
              <span className="text-red-500">C</span>onstruis tes rêves, respire
              et avance.
            </h2>
            <p>
              Dans un monde en constante évolution, les jeunes font face à de
              nombreux défis en matière d’orientation professionnelle et
              personnelle. La pression des choix académiques et des aspirations
              de carrière peut entraîner du stress et de l’anxiété. c’est
              pourquoi nous proposons un programme innovant alliant les services
              d’orientation et sophrologie, afin d’accompagner les jeunes dans
              leur développement personnel et leur parcours scolaire ou
              professionnel.
            </p>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <h2
              className="text-4xl font-bold"
              style={{
                color: theme.two.main,
              }}
            >
              <span className="text-red-500">E</span>TUDIANTS
            </h2>
            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-lg">
              <Image
                fill
                src="/Visuels-articles.png"
                alt="Etudiants"
                className="w-full object-cover"
              />
            </div>
            <Button endIcon={<DoubleArrowIcon />}>Learn more</Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Section4;
