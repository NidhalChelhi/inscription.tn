"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl text-center py-10"
    >
      <section
        className="w-3/4 mx-auto flex flex-col items-center justify-center gap-10"
        style={
          i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            {t("Website Navigation")}
          </h1>
          <p className="w-auto mx-auto text-gray-400">
            {t("Website Navigation Paragraph")}
          </p>
        </div>

        <div className="md:w-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Link href="dashboard" className={styles.button_custom}>
            <Image
              src={"/assets/dashboard.png"}
              alt="dashboard"
              width={24}
              height={24}
            ></Image>
            {t("Dashboard Page")}
          </Link>

          <Link href="login" className={styles.button_custom}>
            <Image
              src={"/assets/login.png"}
              alt="login"
              width={24}
              height={24}
            ></Image>
            {t("Login Page")}
          </Link>

          <Link href="register" className={styles.button_custom}>
            <Image
              src={"/assets/register.png"}
              alt="register"
              width={24}
              height={24}
            ></Image>
            {t("Register Page")}
          </Link>

          <Link
            href="mailto:inscription@mesrs.tn"
            className={styles.button_custom}
          >
            <Image
              src={"/assets/email.png"}
              alt="mail"
              width={24}
              height={24}
            ></Image>
            inscription@mesrs.tn
          </Link>

          <Link href="tel:+216 71 834 746" className={styles.button_custom}>
            <Image
              src={"/assets/mobile.png"}
              alt="mobile"
              width={24}
              height={24}
              className="object-cover"
            ></Image>
            (+216) 71 834 746
          </Link>
        </div>

        <p className="text-center text-gray-400 ">
          Made with <span className="animate-pulse">❤️</span> by:{" "}
          <Link className="text-red-600 font-semibold" href="https://nidhalchelhi.vercel.app" target="_blank">
            Nidhal Chelhi
          </Link>
        </p>
      </section>
    </motion.div>
  );
}
