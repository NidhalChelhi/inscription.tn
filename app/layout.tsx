"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>Inscription.tn</title>
      <body className="h-screen bg-blue-50">
        <Navbar />
        <I18nextProvider i18n={i18n}>
          <div className="flex items-center justify-center ">{children}</div>
        </I18nextProvider>
        <Footer />
      </body>
    </html>
  );
}
