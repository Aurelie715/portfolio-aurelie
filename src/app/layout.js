"use client";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import "./reset.scss";
import Header from "../components/Header";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <section className="page-container">
          {children}
        </section>
      </body>
    </html>
  );
}
