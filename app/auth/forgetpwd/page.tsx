"use client";
import styles from "../../../styles/Buttons.module.css";
import { HiOutlineUser, HiAtSymbol, HiOutlineQrcode } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { forgetpwdValidate } from "../../../lib/validate";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  CustomEmailButton,
  CustomFAQButton,
  CustomGuideButton,
  CustomPhoneButton,
} from "@/components";

export default function Page() {
  const { t, i18n } = useTranslation();
  const [randomWord, setRandomWord] = useState("insc8");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      cin: "",
      email: "",
      code: "",
    },
    onSubmit: onSubmit,
  });

  // Handle form submission
  async function onSubmit(values: any) {
    const validationErrors = forgetpwdValidate(values, randomWord);

    if (Object.keys(validationErrors).length === 0) {
      toast.success(t("Forget PWD Successful", { autoClose: 7000 }));
      router.push("login");
    } else {
      const errorMessages = Object.keys(validationErrors).map((key) =>
        t(validationErrors[key as keyof typeof validationErrors])
      );
      errorMessages.forEach((message) => {
        toast.error(message);
      });
    }
  }
  useEffect(() => {
    const generateRandomWord = () => {
      const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let word = "";
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        word += characters[randomIndex];
      }
      setRandomWord(word);
    };
    generateRandomWord();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-2 sm:m-auto bg-slate-50 rounded-3xl sm:w-5/6 w-full h-auto grid lg:grid-cols-2 drop-shadow-2xl"
    >
      <div className="w-full rounded-l-3xl relative overflow-hidden">
        <div className="bg-bg-img1 bg-cover absolute inset-0 bg-no-repeat z-10 w-full h-full bg-center"></div>
      </div>

      <section
        className="w-3/4 mx-auto flex flex-col justify-center gap-10 text-center py-10"
        style={
          i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            {t("Forget your Password?")}
          </h1>
          <p className="w-auto mx-auto text-gray-400">
            {t("Forget PWD Paragraph")}
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder={t("CIN or DGCI")}
              className={styles.input_text}
              {...formik.getFieldProps("cin")}
            />
            <span className="icon flex items-center sm:px-4 px-2">
              <HiOutlineUser size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type="email"
              placeholder={t("Email")}
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center sm:px-4 px-2">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
            <div className={`${styles.input_group} flex-grow`}>
              <input
                type="text"
                placeholder={t("Security Code")}
                className={styles.input_text}
                {...formik.getFieldProps("code")}
              />
              <span className="icon flex items-center sm:px-4 px-2">
                <HiOutlineQrcode size={25} />
              </span>
            </div>

            <div className="flex  rounded-2xl">
              <span className="w-full px-6 py-4 border rounded-2xl bg-slate-50 line-through select-none font-bold">
                {randomWord}
              </span>
            </div>
          </div>

          {/* confirm button */}
          <div className="input-button">
            <button type="submit" className={styles.confirm_button}>
              {t("Confirm")}
            </button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <CustomGuideButton />
            <CustomFAQButton />
            <CustomEmailButton />
            <CustomPhoneButton />
          </div>
        </form>
      </section>
    </motion.div>
  );
}
