"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn, } from "@/utils/motions";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Inscription.tn</title>
      <body className="h-screen bg-blue-50">
        <Navbar />
        <div className="flex items-center justify-center ">
          <motion.div
            variants={fadeIn('left', 'spring', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto grid lg:grid-cols-2 drop-shadow-2xl"
          >
            <div className="w-full rounded-l-3xl relative overflow-hidden">
              <div className="bg-auth-img bg-cover absolute inset-0 bg-no-repeat z-10 w-full h-full bg-center"></div>
            </div>
            <div className="right flex flex-col justify-center">
              <div className="text-center py-10">{children}</div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
