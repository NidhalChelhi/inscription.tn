"use client";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

import { dashboardItems } from "@/constants";
import { SiMicrosoftoffice } from "react-icons/si";

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <motion.div
            variants={fadeIn("left", "spring", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl text-center py-10"
        >
            <section
                className="w-3/4 mx-auto flex flex-col items-center justify-center gap-8"
                style={
                    i18n.language === "ar" ? { direction: "rtl", textAlign: "right" } : { direction: "ltr", textAlign: 'left' }
                }
            >
                {/* Header */}
                <div className="flex flex-col gap-4 py-2">
                    <h1 className="text-gray-700 md:text-3xl text-lg font-semibold">
                        {t("Fullname: ")} <span className="font-bold text-gray-800 truncate"> {t("Username")}</span>
                    </h1>
                    <h1 className="text-gray-700 md:text-3xl text-lg font-semibold">
                        {t("University: ")}<span className="font-bold text-gray-800">{t("User University")} </span>
                    </h1>
                </div>
                {/* Content */}
                <div className="md:w-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {dashboardItems.map((item, index) => (
                        <Link href={item.route} className={styles.card_custom}>
                            <div className="">
                                <img
                                    src={item.image}
                                    alt="mail"
                                    className="w-full h-[50px] object-cover"
                                ></img>
                            </div>

                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
                <div className="w-full">
                    <Link
                        href="dashboard"
                        className={`${styles.card_custom_office}`}
                    >
                        <div className="flex justify-center items-center gap-2">
                            <SiMicrosoftoffice size={50} />
                            <p className="text-2xl font-bold">Office 365</p>
                        </div>
                        <p>INSPIRE, LEARN, COLLABORATE FOR FREE</p>
                    </Link>
                </div>

                {/* Footer */}
                <div className="md:w-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <Link
                        href="mailto:inscription@mesrs.tn"
                        className={styles.button_custom}
                    >
                        <Image
                            src={"/assets/email.png"}
                            alt="mail"
                            width={24}
                            height={24}
                        ></Image>
                        inscription@mesrs.tn
                    </Link>

                    <Link href="tel:+216 71 834 746" className={styles.button_custom}>
                        <Image
                            src={"/assets/mobile.png"}
                            alt="mobile"
                            width={24}
                            height={24}
                            className="object-cover"
                        ></Image>
                        (+216) 71 834 746
                    </Link>
                    <Link href="login" className={styles.button_custom}>
                        {t("Logout")}
                        <Image
                            src={"/assets/logout.png"}
                            alt="logout"
                            width={24}
                            height={24}
                            className="object-cover"
                        ></Image>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
}
