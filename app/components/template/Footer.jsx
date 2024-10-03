"use client";

import React from "react";
import { useTheme } from "@emotion/react";
function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        background: "#f1f1f1",
        marginTop: "auto",
        backgroundColor: theme.four.main,
        fontWeight: "bold",
        color: theme.two.main,
      }}
    >
      <p>&copy; {currentYear} Edukalis. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
