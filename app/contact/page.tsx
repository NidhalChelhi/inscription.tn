"use client";
import styles from "../../styles/Buttons.module.css";
import { HiOutlineUser, HiAtSymbol } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
import { LuMailQuestion } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { contactValidate } from "../../lib/validate";

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
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: onSubmit,
  });

  // Handle form submission
  async function onSubmit(values: any) {
    const validationErrors = contactValidate(values);
    if (Object.keys(validationErrors).length === 0) {
      toast.success(t("Message Recieved", { autoClose: 15000 }));
      router.push("/");
    } else {
      const errorMessages = Object.keys(validationErrors).map((key) =>
        t(validationErrors[key as keyof typeof validationErrors])
      );
      errorMessages.forEach((message) => {
        toast.error(message);
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-2 sm:m-auto bg-slate-50 rounded-3xl sm:w-5/6 w-full h-auto grid lg:grid-cols-2 drop-shadow-2xl"
    >
      <div className="w-full rounded-l-3xl relative overflow-hidden">
        <div className="bg-bg-img4 bg-cover absolute inset-0 bg-no-repeat z-10 w-full h-full bg-center"></div>
      </div>

      <section
        className="w-3/4 mx-auto flex flex-col justify-center gap-10 text-center py-10"
        style={
          i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            {t("Contact Page")}
          </h1>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder={t("Fullname")}
              className={styles.input_text}
              {...formik.getFieldProps("name")}
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

          <div className={styles.input_group}>
            <input
              type="text"
              placeholder={t("Subject")}
              className={styles.input_text}
              {...formik.getFieldProps("subject")}
            />
            <span className="icon flex items-center sm:px-4 px-2">
              <LuMailQuestion size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <textarea
              placeholder={t("Message")}
              className={styles.input_text}
              {...formik.getFieldProps("message")}
            />
            <span className="icon flex items-center sm:px-4 px-2">
              <TbMessage2 size={25} />
            </span>
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
