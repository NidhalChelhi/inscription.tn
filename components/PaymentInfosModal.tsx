"use client";

import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
      className="flex lg:flex-row flex-col w-full rounded-3xl bg-rose-50 px-8 py-4 gap-4 items-center justify-between"
    >
      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 lg:text-start text-center ">
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
        <div className="flex flex-row gap-2">
          <h1>
            <span className="font-semibold">{t("Cycle: ")}</span>
            {t("Cycle")}
          </h1>
          <h1>
            <span className="font-semibold">{t("Niveau: ")}</span>
            {t("Niveau")}
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 lg:text-start text-center ">
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
      </div>

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
        <p className=""> {t("Pay")}</p>
      </div>
    </motion.div>
  );
};

export default PaymentInfosModal;
