"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
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
  ChangePasswordModal,
} from "@/components";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Page() {
  const { t, i18n } = useTranslation();

  const [showCardModal, setShowCardModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptsModal, setShowReceiptsModal] = useState(false);
  const [showChangePwdModal, setShowChangePwdModal] = useState(false);

  const [small, setSmall] = useState(false);

  const scrollToModal = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleCardModal = () => {
    setShowPaymentModal(false);
    setShowReceiptsModal(false);
    setShowChangePwdModal(false);
    setShowCardModal(!showCardModal);
    scrollToModal();
  };

  const togglePaymentModal = () => {
    setShowCardModal(false);
    setShowReceiptsModal(false);
    setShowChangePwdModal(false);
    setShowPaymentModal(!showPaymentModal);
    scrollToModal();
  };

  const toggleReceiptsModal = () => {
    setShowCardModal(false);
    setShowPaymentModal(false);
    setShowChangePwdModal(false);
    setShowReceiptsModal(!showReceiptsModal);
    scrollToModal();
  };

  const toggleChangePwdModal = () => {
    setShowCardModal(false);
    setShowPaymentModal(false);
    setShowReceiptsModal(false);
    setShowChangePwdModal(!showChangePwdModal);
    scrollToModal();
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
            className={styles.logout_button}
            onClick={() => toast.success(t("Logout Successful"))}
          >
            <Image
              src={"/assets/logout.png"}
              alt="logout"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p>{t("Logout")}</p>
          </Link>
        </div>

        {/* Content */}
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {dashboardItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className={styles.dashboard_button}
            >
              <div>
                <img
                  src={item.image}
                  alt="icon"
                  className="w-full h-[50px] object-cover"
                ></img>
              </div>

              <p> {t(item.name)} </p>
            </Link>
          ))}

          {/* Student Card Button */}
          <div onClick={toggleCardModal} className={styles.dashboard_button}>
            <div>
              <img
                src="/assets/card.png"
                alt="Student Card"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>
            <p> {t("Student Card")} </p>
          </div>

          {/* Payment Button */}
          <div onClick={togglePaymentModal} className={styles.dashboard_button}>
            <div>
              <img
                src="/assets/payment.png"
                alt="student card"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>
            <p> {t("Payment")} </p>
          </div>

          {/* Receipts Button */}
          <div
            onClick={toggleReceiptsModal}
            className={styles.dashboard_button}
          >
            <div>
              <img
                src="/assets/recus.png"
                alt="Receipts"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>
            <p> {t("Receipts")} </p>
          </div>

          {/* Change Password Button */}
          <div
            onClick={toggleChangePwdModal}
            className={styles.dashboard_button}
          >
            <div>
              <img
                src="/assets/pwd.png"
                alt="Change Password"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>
            <p> {t("Change Password")} </p>
          </div>

          {/* Results Button */}
          <div className={styles.dashboard_button_disabled}>
            <div>
              <img
                src="/assets/results.png"
                alt="Results"
                className="w-full h-[50px] object-cover"
              ></img>
            </div>
            <p id="modal"> {t("Results")} (0) </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex items-center justify-center">
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
          {showReceiptsModal ? <ReceiptsModal /> : <></>}
          {showChangePwdModal ? <ChangePasswordModal /> : <></>}
        </div>
        <div className="w-full">
          <Link
            href="https://www.microsoft.com/en-us/microsoft-365"
            target="_blank"
            className={`${styles.dashboard_button_office}`}
          >
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
