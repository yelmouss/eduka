"use client";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Section2() {
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
      className="relative min-h-screen flex flex-col items-center justify-center w-full"
      style={{
        background: `linear-gradient(135deg, white, ${theme.five.main})`,
        color: theme.one.main,
      }}
    >
      <Grid container spacing={0} sx={{ width: "100%", minHeight: "100vh" }}>
        {/* Grid droite avec image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: 'url("/bookRIver.webp")',

            backgroundSize: "cover",
            backgroundPosition: "left",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            transition: "background-position 1s",
            "&:hover": {
              backgroundPosition: "right",
            },
          }}
          className={"flex items-center justify-center"}
        ></Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 5,
            py: 10,
          }}
        >
          <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Paper
              sx={{
                p: 5,
                bgcolor: "transparent",
              }}
              className="bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg"
              elevation={5}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.2 }}
              >
                <img
                  src="/LOGO_EDUKALIS.png"
                  alt="Edukalis"
                  width={200}
                  height={200}
                />
              </motion.div>
              <List>
                <ListItem>
                  <ListItemText primary="Une expertise de plus de 30 ans dans le secteur de l’éducation et de la formation," />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Plusieurs chapitres riches en enseignement auprès des jeunes en quête de savoir," />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Un programme alliant sophrologie et pédagogie pour assurer une réussite sereine et pérenne," />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Des solutions adaptées aux établissements pour la valorisation de la marque école auprès des candidats, des parents et des tuteurs," />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Un partenariat avec les entreprises pour que le succès se conjugue au pluriel," />
                </ListItem>
              </List>
              <Typography variant="body1" textAlign={"start"}>
                ...Et bien d’autres missions, que l’équipe Edukalis a décidé de
                partager à plus grande échelle.
                <br />
                Découvrez nos services et choisissez où et quand.
                <br />
                Bienvenue à tous.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Section2;
