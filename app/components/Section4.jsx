"use client";
import { useTheme } from "@emotion/react";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React, { useEffect } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";


function Section4() {
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
      className="min-h-screen flex flex-col items-center justify-start w-full p-5 py-20"
      style={{
      
        color: theme.two.main,
      }}
    >
      <Container maxWidth={"lg"} sx={{ color: theme.two.main }}>
        <Grid container spacing={10}>
        <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
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
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ delay: 0.2 }}
            >
              <h2
                className="text-4xl font-bold"
                style={{
                  color: theme.two.main,
                }}
              >
                <span className="text-red-500">E</span>TUDIANTS
              </h2>
              <div className="py-20 relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/Visuels-articles.png"
                  alt="Etudiants"
                  className="w-full object-cover"
                />
              </div>
              <Link to="sectionContact" smooth={true} duration={500}>
              <Button
                endIcon={<DoubleArrowIcon />}
                sx={{
                  mt: 2,
                  color: theme.two.main,
                  borderColor: theme.two.main,
                  "&:hover": {
                    backgroundColor: theme.two.main,
                    color: theme.one.main,
                  },
                }}
                variant="outlined"
              >
                Learn more
              </Button>
              </Link>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Section4;