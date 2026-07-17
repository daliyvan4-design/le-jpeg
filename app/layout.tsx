import type { Metadata, Viewport } from "next";
import {
  Archivo_Black,
  Poppins,
  DM_Sans,
  Space_Mono,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lejpeg.art"),
  title: "LE JPEG · Le média d'art",
  description:
    "Le média d'art ivoirien et africain. On met en lumière ceux qui fabriquent le beau : leur travail est partout, leur nom nulle part. Regard local, ambition internationale.",
  keywords: [
    "LE JPEG",
    "média d'art",
    "art ivoirien",
    "art africain",
    "Abidjan",
    "création",
    "design",
    "culture",
  ],
  authors: [{ name: "LE JPEG" }],
  openGraph: {
    title: "LE JPEG · Le média d'art",
    description:
      "Le média d'art ivoirien et africain. Regard local, ambition internationale. Brut, version art.",
    type: "website",
    locale: "fr_FR",
    siteName: "LE JPEG",
  },
  twitter: {
    card: "summary_large_image",
    title: "LE JPEG · Le média d'art",
    description: "Le média d'art ivoirien et africain. Brut, version art.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff9ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${archivoBlack.variable} ${poppins.variable} ${dmSans.variable} ${spaceMono.variable} ${bricolage.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
