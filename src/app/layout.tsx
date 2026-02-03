import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmandaoğlu AŞ | Maden - İnşaat - Tarım - Turizm",
  description: "Andezit, Bazalt ve Traverten doğal taş çözümleri. Doğal taşın gücü ve endüstriyel estetik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased font-sans bg-industrial-black text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
