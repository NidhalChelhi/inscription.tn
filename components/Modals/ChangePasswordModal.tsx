"use client";

import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from "react";
import { changePasswordValidate } from "@/lib/validate";
import { HiFingerPrint } from "react-icons/hi";
const ChangePasswordModal = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      actual: "",
      new: "",
      newconfirm: "",
    },
    onSubmit: onSubmit,
  });

  // Handle form submission
  async function onSubmit(values: any) {
    const validationErrors = changePasswordValidate(values);
    console.log("qegfzeg");
    if (Object.keys(validationErrors).length === 0) {
      toast.success(t("Password Changed"));
    } else {
      Object.keys(validationErrors).forEach((key) => {
        toast.error(t(validationErrors[key as keyof typeof validationErrors]));
      });
    }
  }

  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" w-full flex flex-col rounded-3xl bg-purple-100 px-8 py-4 gap-8 items-center justify-center"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-800 text-2xl font-bold">
          {t("Change Password")}
        </h1>
        <p className="text-center text-gray-400">{t("Change PWD Paragraph")}</p>
      </div>
      {/* Content */}
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            placeholder={t("Actual Password")}
            className={styles.input_text}
            {...formik.getFieldProps("actual")}
          />
          <span
            className="icon flex items-center sm:px-4 px-2 hover:text-blue-600 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            placeholder={t("New Password")}
            className={styles.input_text}
            {...formik.getFieldProps("new")}
          />
        </div>
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            placeholder={t("Confirm New Password")}
            className={styles.input_text}
            {...formik.getFieldProps("newconfirm")}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <button className={`${styles.changepwd_button}`} type="submit">
            <Image
              src={"/assets/pwd.png"}
              alt="print"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="select-none">{t("Confirm")}</p>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChangePasswordModal;
