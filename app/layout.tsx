import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus Ops — Gestão Operacional para Empresas de Serviços",
  description:
    "Gerencie cronogramas, frotas, inventário e equipes em um único lugar. Simplifique sua operação com o Nexus Ops.",
  keywords: [
    "gestão operacional",
    "software de limpeza",
    "gestão de frotas",
    "controle de inventário",
    "gestão de equipes",
    "hospitalidade",
    "condomínios",
    "manutenção predial",
  ],
  openGraph: {
    title: "Nexus Ops — Gestão Operacional para Empresas de Serviços",
    description:
      "Gerencie cronogramas, frotas, inventário e equipes em um único lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased bg-[#0a0a0f] text-slate-100">{children}</body>
    </html>
  );
}
