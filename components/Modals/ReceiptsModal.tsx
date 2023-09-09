"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ReceiptsModal = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col rounded-3xl border-2 px-8 py-4 gap-8 items-center justify-center"
        >
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-800 text-2xl font-bold">
              {t("Receipts")}
            </h1>
            <p className="text-center text-gray-600">
              {t("Receipts Paragraph")}
            </p>
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
                className={styles.modal_button}
                onClick={() => {
                  toast.success(t("Print Successful"));
                  props.onClose();
                }}
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
      )}
    </AnimatePresence>
  );
};

export default ReceiptsModal;
