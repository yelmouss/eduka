"use client";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Section1() {
  const theme = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ rotate: 180 });
    } else {
      controls.start({ rotate: 0 });
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, white, ${theme.five.main})`,
        color: theme.one.main,
      }}
    >
      <Grid container spacing={0} sx={{ width: "100%", minHeight: "100vh" }}>
        {/* Grid gauche avec contenu */}
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="py-10"
          >
            <Image
              src="/LOGO_EDUKALIS.png"
              alt="Edukalis"
              width={200}
              height={200}
            />
          </motion.div>
        
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  md: "3rem",
                  xs: "1rem",
                },
                color: theme.two.main,
                transition: "color 1s",
                "&:hover": {
                  color: theme.three.main,
                },
              }}
            >
              <span className="text-red-500 font-bold">P</span>artenaire pour un
              avenir brillant{" "}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: "3rem",
                  xs: "1rem",
                },
                transition: "color 1s",
                "&:hover": {
                  color: theme.four.main,
                },
              }}
              variant="h3"
              fontWeight={"bold"}
              style={{ color: theme.three.main }}
            >
              <span className="text-red-500">E</span>TUDIANT -{" "}
              <span className="text-red-500">E</span>COLE-{" "}
              <span className="text-red-500">E</span>NTREPRISE
            </Typography>
          </motion.div>
        </Grid>

        {/* Grid droite avec image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: 'url("/woman.jpg")',

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
      </Grid>
    </section>
  );
}

export default Section1;
