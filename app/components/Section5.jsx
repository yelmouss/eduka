import { Button, Container, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

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
  return (
    <section className="section5-container">
      <video autoPlay loop muted className="section5-video">
        <source src="/video1.mov" type="video/mp4" />
      </video>
      <Container className="py-20 text-center">
        <Image
          src="/LOGO_EDUKALIS.png"
          alt="Edukalis"
          width={200}
          height={200}
          style={{ alignSelf: "start", justifySelf: "start" }}
        />
        <h3 className="text-4xl font-bold text-white py-5">PRESTATIONS</h3>
        <Grid container spacing={6} className="w-full mt-5">
          {prestations.map((prestation, index) => (
            <Grid
              key={index}
              size={{ xs: 12, md: 4 }}
              className="flex items-center"
            >
              <Paper className="p-4">
                <h4 className="text-red-500 text-3xl mb-5">{prestation.title}</h4>
                {prestation.items ? (
                  <ul className="text-left">
                    {prestation.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{prestation.content}</p>
                )}
                <Button
                  startIcon={<DoubleArrowIcon />}
                  className="mt-4"
                  variant="contained"
                  color="primary"
                >
                  Register now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Section5;
