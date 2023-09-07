"use client";

import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/Form.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const PaymentInfosModal = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col w-auto rounded-3xl bg-stone-50 border px-8 py-4 gap-8 items-center justify-center"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-800 text-2xl font-bold">{t("Payment")}</h1>
        <p className="text-center text-gray-400">{t("Payment Paragraph")}</p>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-5">
        <h1>
          <span className="font-semibold">{t("AU: ")}</span>
          {t("AU")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Diplome: ")}</span>
          {t("Diplome")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Spec: ")}</span>
          {t("Spec")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Cycle: ")}</span>
          {t("Cycle")} <span className="font-semibold">{t("Niveau: ")}</span>
          {t("Niveau")}
        </h1>

        <h1>
          <span className="font-semibold">{t("M_Totale: ")}</span>
          {t("M_Totale")}
        </h1>
        <h1>
          <span className="font-semibold">{t("M_Tranche: ")}</span>
          {t("M_Tranche")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Stu_card: ")}</span>
          {t("Stu_card")}
        </h1>
        <h1>
          <span className="font-semibold">{t("Paiement: ")}</span>
          {t("Paiement")}
        </h1>

        <div className="w-full flex items-center justify-center">
          <div
            className={styles.button_pay_custom}
            onClick={() => toast.success(t("Payment Successful"))}
          >
            <Image
              src={"/assets/pay.png"}
              alt="logout"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="select-none"> {t("Pay")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentInfosModal;
