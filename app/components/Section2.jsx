"use client";
import Grid from "@mui/material/Grid2";

import { Typography, List, ListItem, ListItemText, Paper, Container } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@emotion/react";

function Section2() {
  const theme = useTheme();
  return (
    <section
      className="flex flex-col items-center justify-center w-full"
      style={{
        color: theme.two.main,
        backgroundImage: 'url("/bookRIver.webp")',
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // borderRadius: "10px",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        
     
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          className={"flex items-center justify-center"}
        >
          <Image
            src="/LOGO_EDUKALIS.png"
            alt="Edukalis"
            width={200}
            height={200}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 5,
            }}
          >
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
        </Grid>
      </Grid>
      </Container>
    </section>
  );
}

export default Section2;
