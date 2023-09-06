"use client";

import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ReceiptsModal = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex lg:flex-row flex-col w-full rounded-3xl bg-green-50 px-8 py-4 gap-4 items-center justify-between"
    >
      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 lg:text-start text-center ">
        <h1>
          <span className="font-semibold">{t("Payment_Type: ")}</span>
          {t("Payment_Type")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Speciality: ")}</span>
          {t("Speciality")}
        </h1>
        <h1>
          <span className="font-semibold">{t("M_Payed: ")}</span>
          {t("M_Payed")}
        </h1>
      </div>

      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 lg:text-start text-center ">
        <h1>
          <span className="font-semibold">{t("Date: ")}</span>
          {t("Date")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Ref: ")}</span>
          {t("Ref")}
        </h1>
      </div>

      <div
        className={styles.button_print_custom}
        onClick={() => toast.success(t("Print Successful"))}
      >
        <Image
          src={"/assets/receipt.png"}
          alt="print"
          width={24}
          height={24}
          className="object-contain"
        ></Image>
        <p className=""> {t("Print")}</p>
      </div>
    </motion.div>
  );
};

export default ReceiptsModal;
