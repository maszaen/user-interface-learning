import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SFUI = localFont({
  src: "./fonts/SFUIDisplay.otf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Algorithm Learn",
  description: "Use this website to experiments with algorithm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFUI} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
