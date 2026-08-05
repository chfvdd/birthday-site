import "./globals.css";

import {
  Cormorant_Garamond,
  Manrope,
  Great_Vibes,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-title",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-text",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata = {
  title: "Happy Birthday",
  description: "Birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${cormorant.variable} ${manrope.variable} ${greatVibes.variable}`}
      >
        {children}
      </body>
    </html>
  );
}