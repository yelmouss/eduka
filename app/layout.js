import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import Providers from "./providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Edukalis - Votre partenaire pour un avenir brillant",
  description:
    "Edukalis offre des ressources éducatives de premier ordre et des conseils pour vous aider à atteindre vos objectifs académiques.",
  keywords:
    "éducation, apprentissage en ligne, ressources académiques, Edukalis, école, entreprise, étudiants, enseignants, parents, formation, orientation, recrutement, internationalisation, réseautage, échanges, authenticité, innovation, bonheur, productivité",
  author: "Équipe Edukalis",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Edukalis - Votre partenaire pour un avenir brillant",
    description:
      "Edukalis offre des ressources éducatives de premier ordre et des conseils pour vous aider à atteindre vos objectifs académiques.",
    url: "https://www.edukalis.com",
    type: "website",
    images: [
      {
        url: "/bookRIver.webp",
        width: 1200,
        height: 630,
        alt: "Edukalis",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
      </head>
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
