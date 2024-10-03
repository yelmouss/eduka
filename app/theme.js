"use client";
import { Roboto, Pacifico, Lobster, Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const myCustomColors = {
  one: "#9a031e",
  two: "#0f4c5c",
  three: "#e36414",
  four: "#fb8b24",
  five: "#5f0f40",
  gradient: "linear-gradient(45deg, #F1895C 30%,#2E3244 90%)",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});


const theme = createTheme({

  // typography: {
  //   fontFamily: lobster.style.fontFamily,
  //   button: {
  //     fontFamily: roboto.style.fontFamily,
  //   },
  //   p: {
  //     fontFamily: poppins.style.fontFamily,
  //   },
  // },
  typography: {
    fontFamily: poppins.style.fontFamily,
    button: {
      textTransform: "none",
    },

  },
  one: {
    main: myCustomColors.one,
  },
  two: {
    main: myCustomColors.two,
  },
  three: {
    main: myCustomColors.three,
  },
  four: {
    main: myCustomColors.four,
  },
  five: {
    main: myCustomColors.five,
  },
  palette: {
    primary: {
      main: myCustomColors.one,
    },
    secondary: {
      main: myCustomColors.four,
    },
    error: {
      main: myCustomColors.two,
    },
  },
});

export default theme;
