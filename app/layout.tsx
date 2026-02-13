import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bradesco - Acompanhamento de Solicitação",
  description: "Acompanhe sua solicitação Bradesco em tempo real",
  icons: {
    icon: "/icons8-bradesco-240.svg",
    apple: "/icons8-bradesco-240.svg",
  },
  openGraph: {
    title: "Bradesco - Acompanhamento de Solicitação",
    description: "Acompanhe sua solicitação Bradesco em tempo real",
    images: [
      {
        url: "/icons8-bradesco-240.svg",
        width: 240,
        height: 240,
        alt: "Bradesco",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bradesco - Acompanhamento de Solicitação",
    description: "Acompanhe sua solicitação Bradesco em tempo real",
    images: ["/icons8-bradesco-240.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
