import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Mansi Zinjad | Data Analyst & Data Science Student",
  description:
    "Portfolio of Mansi Zinjad, a Data Analyst and BSc Data Science & Big Data Analytics student specializing in data processing, data analysis, and data-driven solutions.",
  keywords: [
    "Mansi Zinjad",
    "Data Analyst",
    "Data Science",
    "Big Data Analytics",
    "Data Processing",
    "Data Correction",
    "MIT-WPU",
    "Pacific Infotech",
    "Python",
    "SQL",
    "Pune",
  ],
  authors: [{ name: "Mansi Zinjad" }],
  creator: "Mansi Zinjad",
  openGraph: {
    title: "Mansi Zinjad | Data Analyst & Data Science Student",
    description:
      "Turning Data Into Meaningful Insights. Portfolio of Mansi Zinjad - Data Analyst & BSc Data Science Student.",
    url: "https://mansi-zinjad.dev",
    siteName: "Mansi Zinjad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansi Zinjad | Data Analyst & Data Science Student",
    description:
      "Turning Data Into Meaningful Insights. Portfolio of Mansi Zinjad - Data Analyst & BSc Data Science Student.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-background text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white relative min-h-screen`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
