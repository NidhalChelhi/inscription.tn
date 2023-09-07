"use client";

import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
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
      className="w-full flex flex-col rounded-3xl bg-green-100 px-8 py-4 gap-8 items-center justify-center"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-800 text-2xl font-bold">{t("Receipts")}</h1>
        <p className="text-center text-gray-400">{t("Receipts Paragraph")}</p>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-5">
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
        </h1>{" "}
        <h1>
          <span className="font-semibold">{t("Date: ")}</span>
          {t("Date")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Ref: ")}</span>
          {t("Ref")}
        </h1>
        <div className="w-full flex items-center justify-center">
          <div
            className={styles.print_button}
            onClick={() => toast.success(t("Print Successful"))}
          >
            <Image
              src={"/assets/receipt.png"}
              alt="print"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="select-none"> {t("Print")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReceiptsModal;
