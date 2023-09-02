"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
          {i18n.language === "ar" ? (
            <ToastContainer
              position="top-left"
              autoClose={3000}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          ) : (
            <ToastContainer
              position="top-left"
              autoClose={3000}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          )}

          <div className="flex items-center justify-center ">{children}</div>
        </I18nextProvider>
        <Footer />
      </body>
    </html>
  );
}
