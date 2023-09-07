"use client";
import Link from "next/link";
import styles from "../styles/Buttons.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";
import {
  CustomContactButton,
  CustomEmailButton,
  CustomFAQButton,
  CustomGuideButton,
  CustomLegalNoticeButton,
  CustomPhoneButton,
  CustomUniversitiesButton,
} from "@/components";

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

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Link href="dashboard" className={styles.navigation_button}>
            <Image
              src={"/assets/dashboard.png"}
              alt="dashboard"
              width={24}
              height={24}
              className="object-contain"
            ></Image>

            <p className="flex-grow">{t("Dashboard Page")}</p>
          </Link>

          <Link href="auth/login" className={styles.navigation_button}>
            <Image
              src={"/assets/login.png"}
              alt="login"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="flex-grow">{t("Login Page")}</p>
          </Link>

          <Link href="auth/register" className={styles.navigation_button}>
            <Image
              src={"/assets/register.png"}
              alt="register"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="flex-grow">{t("Register Page")}</p>
          </Link>
          <Link href="auth/forgetpwd" className={styles.navigation_button}>
            <Image
              src={"/assets/forgetpwd.png"}
              alt="forgetpwd"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="flex-grow">{t("Forget your Password?")}</p>
          </Link>

          <CustomContactButton />
          <CustomLegalNoticeButton />
          <CustomFAQButton />
          <CustomGuideButton />
          <CustomEmailButton />
          <CustomPhoneButton />
          <CustomUniversitiesButton />
        </div>

        <p className="text-center text-gray-400 ">
          Made with <span className="animate-pulse">❤️</span> by:{" "}
          <Link
            className="text-red-600 font-semibold truncate"
            href="https://nidhalchelhi.vercel.app"
            target="_blank"
          >
            Nidhal Chelhi
          </Link>
        </p>
      </section>
    </motion.div>
  );
}
