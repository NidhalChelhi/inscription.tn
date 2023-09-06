"use client";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

import { dashboardItems } from "@/constants";
import { SiMicrosoftoffice } from "react-icons/si";
import {
  CustomContactButton,
  CustomEmailButton,
  CustomFAQButton,
  CustomGuideButton,
  CustomLegalNoticeButton,
  CustomPhoneButton,
  StudentCardModal,
  StudentCardSMModal,
  PaymentInfosModal,
  ReceiptsModal,
} from "@/components";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Page() {
  const { t, i18n } = useTranslation();
  const [showCardModal, setShowCardModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showreceiptsModal, setShowReceiptsModal] = useState(false);

  const [small, setSmall] = useState(false);

  const toggleCardModal = () => {
    setShowPaymentModal(false);
    setShowReceiptsModal(false);
    setShowCardModal(!showCardModal);
  };

  const togglePaymentModal = () => {
    setShowCardModal(false);
    setShowReceiptsModal(false);
    setShowPaymentModal(!showPaymentModal);
  };

  const toggleReceiptsModal = () => {
    setShowCardModal(false);
    setShowPaymentModal(false);
    setShowReceiptsModal(!showreceiptsModal);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 720;
      setSmall(isSmall);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl text-center py-10 overflow-hidden"
    >
      <section
        className="w-3/4 mx-auto flex flex-col items-center justify-center gap-10"
        style={
          i18n.language === "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        {/* Header */}
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-start items-center gap-8">
          <div className="flex flex-col gap-4 py-2 text-start">
            <h1 className="text-gray-700 md:text-3xl text-lg font-semibold">
              {t("Fullname: ")}{" "}
              <span className="font-bold text-gray-800 truncate">
                {" "}
                {t("Username")}
              </span>
            </h1>
            <h1 className="text-gray-700 md:text-3xl text-lg font-semibold">
              {t("University: ")}
              <span className="font-bold text-gray-800">
                {t("User University")}{" "}
              </span>
            </h1>
          </div>
          <Link
            href="auth/login"
            className={styles.button_logout_custom}
            onClick={() => toast.success(t("Logout Successful"))}
          >
            <Image
              src={"/assets/logout.png"}
              alt="logout"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="">{t("Logout")}</p>
          </Link>
        </div>

        {/* Content */}
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {dashboardItems.map((item, index) => (
            <Link key={index} href={item.route} className={styles.card_custom}>
              <div className="">
                <img
                  src={item.image}
                  alt="icon"
                  className="w-full h-[50px] object-cover"
                ></img>
              </div>

              <p> {t(item.name)} </p>
            </Link>
          ))}

          <div
            onClick={togglePaymentModal}
            className={`${styles.card_custom} cursor-pointer`}
          >
            <div className="">
              <img
                src="/assets/payment.png"
                alt="student card"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>

            <p className="select-none"> {t("Payment")} </p>
          </div>

          <div
            onClick={toggleCardModal}
            className={`${styles.card_custom} cursor-pointer`}
          >
            <div className="">
              <img
                src="/assets/card.png"
                alt="student card"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>

            <p className="select-none"> {t("Student Card")} </p>
          </div>

          <div
            onClick={toggleReceiptsModal}
            className={`${styles.card_custom} cursor-pointer`}
          >
            <div className="">
              <img
                src="/assets/recus.png"
                alt="Receipts"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>

            <p className="select-none"> {t("Receipts")} </p>
          </div>
        </div>
        {showCardModal ? (
          small ? (
            <StudentCardSMModal />
          ) : (
            <StudentCardModal />
          )
        ) : (
          <></>
        )}
        {showPaymentModal ? <PaymentInfosModal /> : <></>}
        {showreceiptsModal ? <ReceiptsModal /> : <></>}

        <div className="w-full">
          <Link href="dashboard" className={`${styles.card_custom_office}`}>
            <div className="flex justify-center items-center gap-2 ">
              <SiMicrosoftoffice size={50} />
              <p className="text-2xl font-bold text-center select-none">
                Office 365
              </p>
            </div>
            <p className="text-center select-none">
              INSPIRE, LEARN, COLLABORATE FOR FREE
            </p>
          </Link>
        </div>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
          <CustomContactButton />
          <CustomLegalNoticeButton />
          <CustomFAQButton />
          <CustomGuideButton />
          <CustomEmailButton />
          <CustomPhoneButton />
        </div>
      </section>
    </motion.div>
  );
}
