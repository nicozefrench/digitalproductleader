import type { Metadata } from "next";
import { DM_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Digital Product Leader - Innovation & UX Leadership",
  description: "Expert insights on digital product leadership, UX innovation, and strategic design from Nicolas Limare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
