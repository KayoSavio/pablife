import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PABLIFE - Organize o Caos",
  description: "Organize sua vida. Saúde. Metas. Rotina. PABLIFE ajuda você a organizar o caos da sua mente.",
  keywords: "organização, produtividade, saúde, metas, rotina, app, pablife",
  authors: [{ name: "PABLIFE" }],
  creator: "PABLIFE",
  publisher: "PABLIFE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pablife.com.br"),
  openGraph: {
    title: "PABLIFE - Organize o Caos",
    description: "Organize sua vida. Saúde. Metas. Rotina.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PABLIFE - Organize o Caos",
    description: "Organize sua vida. Saúde. Metas. Rotina.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
