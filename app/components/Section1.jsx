"use client"
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function Section1() {
  const theme = useTheme();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full" style={{ color: theme.two.main,}}>
          <Grid container spacing={0} sx={{width : '100%'}}>
        <Grid size={{ xs: 12, md: 6 }} 
        sx={{
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center',
          alignItems : 'center',
          textAlign : 'center',
          p:5,
          py : 10,
        }}
        >
          <Typography variant="h2">
            Partenaire pour un avenir brillant{" "}
          </Typography>
          <Typography variant="h3" fontWeight={"bold"}>
            ETUDIANT - ECOLE- ENTREPRISE
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: 'url("/woman.jpg")',
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          className={'flex items-center justify-center'}
        >
          <Typography 
          variant="h2"
        
          >
            Edukalis
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Section1;
