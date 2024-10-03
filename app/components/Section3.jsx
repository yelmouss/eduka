"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Container, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Section3() {
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
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start w-full p-5"
      style={{
        backgroundImage: 'url("/azienda.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: theme.two.main,
      }}
    >
      <Container>
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
            style={{
              alignSelf: "start",
              justifySelf: "start",
            }}
          />
        </motion.div>
        <Grid container spacing={6} className="w-full mt-5">
          <Grid size={{ xs: 12, md: 6 }} className={"flex items-end"}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Paper
                sx={{ textAlign: "center" }}
                className="flex flex-col items-center p-5"
              >
                <h2
                  className="text-4xl font-bold"
                  style={{
                    color: theme.two.main,
                  }}
                >
                  <span className="text-red-500">E</span>coles
                </h2>
                <div className="circle bg-red-500"></div>
                <p>
                  Nous nous positionnons en véritable partenaire pour vous
                  proposer nos solutions à atteindre vos objectifs commerciaux
                  et faire rayonner votre marque école dans le monde. Rejoignez
                  notre réseau et profitez de notre expertise.
                </p>
              </Paper>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className={"flex items-center"}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 0.2 }}
            >
              <Paper
                sx={{ textAlign: "center" }}
                className="flex flex-col items-center p-5"
              >
                <h2
                  className="text-4xl font-bold"
                  style={{
                    color: theme.two.main,
                  }}
                >
                  <span className="text-red-500">E</span>tudiants
                </h2>
                <div className="circle bg-red-500"></div>
                <p>
                  Découvrez nos programmes d’accompagnement personnalisé pour
                  votre orientation de carrière, le développement de votre
                  potentiel et la valorisation de vos compétences. Armez-vous
                  pour faire face à tous les défis.
                </p>
              </Paper>
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={"flex items-between justify-between"}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 0.4 }}
            >
              <Paper
                sx={{ textAlign: "center" }}
                className="flex flex-col items-center p-5"
              >
                <h2
                  className="text-4xl font-bold"
                  style={{
                    color: theme.two.main,
                  }}
                >
                  Forum<span className="text-red-500">Ed</span>uc
                </h2>
                <div className="circle bg-red-500"></div>
                <p>
                  Format entièrement en ligne pour exposer votre école, vos
                  programmes, vos valeurs et activité à un large public à
                  travers le MONDE
                </p>
              </Paper>
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={"flex items-between justify-between"}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 0.6 }}
            >
              <Paper
                sx={{ textAlign: "center" }}
                className="flex flex-col items-center p-5 h-full"
              >
                <h2
                  className="text-4xl font-bold"
                  style={{
                    color: theme.two.main,
                  }}
                >
                  <span className="text-red-500">E</span>ntreprises
                </h2>
                <div className="circle bg-red-500"></div>
                <p>
                  Améliorez le bien-être de vos salariés et dénichez des talents
                  prometteurs ! Vivez une belle et riche histoire managériale .
                </p>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Section3;
