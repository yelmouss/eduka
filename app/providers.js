"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

import { Fab, Fade, useScrollTrigger } from "@mui/material";

function ScrollTop({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 36, right: 36, zIndex: 9999 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 50,
  },
};

const loadingVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Providers = ({ children }) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
   
          <motion.div
         
            initial="initial"
            animate="in"
            exit="out"
            variants={loadingVariants}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Utilisation de 100vh pour occuper toute la hauteur de la fenêtre
              textAlign: "center", // Centrage du texte
              flexDirection: "column",
            }}
          >
            <span className="py-10 text-2xl myGradient">             
              <ReactTyped strings={[`Chargement en cours`]} typeSpeed={10} />
            </span>
            <motion.div
              className="box"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image
                src={"/LOGO_EDUKALIS.png"}
                width={100}
                height={100}
                alt="credit card"
              />
            </motion.div>
          </motion.div>
    
      ) : (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}

      <ScrollTop>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            bgcolor: "error.main",
            color: "white",
            boxShadow: 3,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
};

export default Providers;
