import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACMK | Associação Corpo e Mente de Karatê",
  description:
    "Transformando vidas pelo Karatê. A ACMK oferece aulas de karatê para todas as idades, com foco em disciplina, respeito e superação. Venha fazer parte da nossa família!",
  keywords: [
    "karatê",
    "artes marciais",
    "ACMK",
    "Associação Corpo e Mente de Karatê",
    "aulas de karatê",
    "karatê para crianças",
    "karatê para adultos",
    "disciplina",
    "defesa pessoal",
  ],
  authors: [{ name: "ACMK" }],
  openGraph: {
    title: "ACMK | Associação Corpo e Mente de Karatê",
    description:
      "Transformando vidas pelo Karatê. Disciplina, respeito e superação para todas as idades.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
