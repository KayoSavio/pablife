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
  title: "PABLIFE - Organize o Caos | App de Produtividade e Organização",
  description: "Organize sua vida com o PABLIFE. Aplicativo completo para saúde, metas, rotina, mentorias e agendamentos. Baixe agora na App Store e Google Play.",
  keywords: "organização, produtividade, saúde, metas, rotina, app, pablife, mentorias, agendamento, profissionais, suporte, aplicativo, app store, google play",
  authors: [{ name: "PABLIFE" }],
  creator: "PABLIFE",
  publisher: "PABLIFE",
  applicationName: "PABLIFE",
  category: "Productivity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pablife.com.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "PABLIFE - Organize o Caos | App de Produtividade",
    description: "Organize sua vida. Saúde. Metas. Rotina. Mentorias e suporte profissional. Baixe o app PABLIFE agora.",
    type: "website",
    locale: "pt_BR",
    siteName: "PABLIFE",
    url: "https://pablife.com.br",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "PABLIFE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PABLIFE - Organize o Caos",
    description: "Organize sua vida. Saúde. Metas. Rotina. Mentorias e suporte profissional.",
    creator: "@pablife_app",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Adicione aqui os códigos de verificação quando disponíveis
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
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
