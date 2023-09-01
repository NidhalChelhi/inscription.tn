"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineQrcode } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

export default function Home() {

  const { t, i18n } = useTranslation();

  const [session, setSession] = useState(false)

  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl"
    >

      <div className="text-center py-10">
        <section
          className="w-3/4 mx-auto flex flex-col gap-10"
          style={
            i18n.language === "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >


          {session ? User() : Guest()}
        </section>
      </div>
    </motion.div>
  );
}

// Guest
function Guest() {
  return (
    <main>
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">
          Guest Home Page
        </h1>
      </div>
      <div className="flex justify-center">
        <Link
          href="login"
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Login
        </Link>
        <Link
          href="login"
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Register
        </Link>
      </div>
    </main>
  );
}

// Authorized User
function User() {
  return (
    <main>
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">
          User Home Page
        </h1>
      </div>
      <div>
        <h5>Unknown</h5>
        <h5>Unknown</h5>
        <Link className="text-center text-blue-700" href={"/login"}>
          "Logout"
        </Link>
      </div>

    </main>
  );
}
