"use client";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";

function Section1() {
  const theme = useTheme();
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center w-full"
      style={{ color: theme.two.main }}
    >
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid
          size={{ xs: 6, md: 6 }}
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
         
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                md: "3rem", // Correspond à lg:text-3xl
                xs: "1rem", // Correspond à md:text-1xl
              },
            }}
          >
            <span className="text-red-500">P</span>artenaire pour un avenir
            brillant{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: "3rem", // Correspond à lg:text-3xl
                xs: "1rem", // Correspond à md:text-1xl
              },
            }}
            variant="h3"
            fontWeight={"bold"}
          >
            <span className="text-red-500">E</span>TUDIANT - ECOLE- ENTREPRISE
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            backgroundImage: 'url("/woman.jpg")',
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "left",
            // borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          className={"flex items-center justify-center"}
        >
            <Image
            src="/LOGO_EDUKALIS.png"
            alt="Edukalis"
            width={200}
            height={200}
            
            />
        </Grid>
      </Grid>
    </section>
  );
}

export default Section1;
