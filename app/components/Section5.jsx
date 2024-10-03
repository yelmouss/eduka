"use client";
import { Button, Container, Paper } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ReactPlayer from "react-player";
import LazyLoad from "vanilla-lazyload";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const prestations = [
  {
    title: "ORIENTATION ET CONSEILS",
    items: [
      "Bilan d’orientation",
      "Bilan de carrière",
      "Bilan de compétences",
      "Admission et inscription",
      "Préparation aux entretiens",
      "Expatriation estudiantine",
    ],
  },
  {
    title: "REUSSITE ET BIEN ETRE",
    items: [
      "Optimiser la concentration et la mémorisation",
      "Améliorer l’estime de soi et de son image",
      "Développer la confiance en soi",
      "Gérer ses émotions",
      "Instaurer un état positif (calme, sérénité)",
      "Améliorer le sommeil",
      "Activer la vitalité",
      "Prendre du recul face aux événements",
      "Se préparer aux examens",
    ],
  },
  {
    title: "PASSEPORT",
    content: `Un programme à la carte suivant le profil et les besoins 
    de chacun. Cet accompagnement personnalisé dure entre 8 à 12 semaines 
    et combine séances de sophrologie et conseils pédagogiques.`,
  },
];

function Section5() {
  const theme = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
    });

    return () => {
      lazyLoadInstance.destroy(); // Nettoyage
    };
  }, []);

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
      className="section5-container"
      style={{ color: theme.two.main }}
    >
      <ReactPlayer
        url="/Video1.mp4"
        playing
        loop
        muted
        className="section5-video lazy"
        width="100%"
        height="auto"
        controls={false}
      />

      <Container className="py-20 text-center">
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
            style={{ alignSelf: "start", justifySelf: "start" }}
          />
        </motion.div>
        <motion.h3
          className="text-4xl font-bold text-white py-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          PRESTATIONS
        </motion.h3>
        <Grid container spacing={6} className="w-full mt-5">
          {prestations.map((prestation, index) => (
            <Grid
              key={index}
              
              size={{ xs: 12, md: 4 }}
              className="flex items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: index * 0.2 }}
              >
                <Paper className="p-4">
                  <h4 className="text-red-500 text-3xl mb-5">
                    {prestation.title}
                  </h4>
                  {prestation.items ? (
                    <ul className="text-left">
                      {prestation.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{prestation.content}</p>
                  )}
                  <Link to="sectionContact" smooth={true} duration={500}>
                  <Button
                    startIcon={<DoubleArrowIcon />}
                    className="mt-4"
                    variant="contained"
                    color="primary"
                  >
                    Register now
                  </Button>
                  </Link>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Section5;