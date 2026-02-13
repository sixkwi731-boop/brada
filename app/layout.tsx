import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bradesco - Acompanhamento de Solicitação",
  description: "Acompanhe sua solicitação Bradesco em tempo real",
  icons: {
    icon: "/icons8-bradesco-240.svg",
    apple: "/icons8-bradesco-240.svg",
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
