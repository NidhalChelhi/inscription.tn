"use client";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";

import {
    HiOutlineUser,
    HiAtSymbol,
    HiOutlineDeviceMobile,
    HiOutlineQrcode,
} from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Page() {
    const { t, i18n } = useTranslation();
    const [randomWord, setRandomWord] = useState("insc8");

    useEffect(() => {
        const generateRandomWord = () => {
            const characters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let word = "";
            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                word += characters[randomIndex];
            }
            setRandomWord(word);
        };
        generateRandomWord();
    }, []);

    return (
        <motion.div
            variants={fadeIn('left', 'spring', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto grid lg:grid-cols-2 drop-shadow-2xl"
        >
            <div className="w-full rounded-l-3xl relative overflow-hidden">
                <div className="bg-register-img bg-cover absolute inset-0 bg-no-repeat z-10 w-full h-full bg-center"></div>
            </div>
            <div className="right flex flex-col justify-center">
                <div className="text-center py-10">
                    <section
                        className="w-3/4 mx-auto flex flex-col gap-10"
                        style={
                            i18n.language === "ar"
                                ? { direction: "rtl" }
                                : { direction: "ltr" }
                        }
                    >
                        <div className="title">
                            <h1 className="text-gray-800 text-4xl font-bold py-4">
                                {t("Register")}
                            </h1>
                            <p className="w-auto mx-auto text-gray-400">
                                {t("Register Paragraph")}
                            </p>
                        </div>

                        {/* form */}
                        <form className="flex flex-col gap-5">
                            <div className={styles.input_group}>
                                <input
                                    type="number"
                                    name="cin"
                                    placeholder={t("CIN or DGCI")}
                                    className={styles.input_text}
                                />
                                <span className="icon flex items-center sm:px-4 px-2">
                                    <HiOutlineUser size={25} />
                                </span>
                            </div>
                            <div className={styles.input_group}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t("Email")}
                                    className={styles.input_text}
                                />
                                <span className="icon flex items-center sm:px-4 px-2">
                                    <HiAtSymbol size={25} />
                                </span>
                            </div>
                            <div className={styles.input_group}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t("Mobile Phone Number")}
                                    className={styles.input_text}
                                />
                                <span className="icon flex items-center sm:px-4 px-2">
                                    <HiOutlineDeviceMobile size={25} />
                                </span>
                            </div>
                            <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
                                <div className={`${styles.input_group} flex-grow`}>
                                    <input
                                        type="text"
                                        name="code"
                                        placeholder={t("Security Code")}
                                        className={styles.input_text}
                                    />
                                    <span className="icon flex items-center sm:px-4 px-2">
                                        <HiOutlineQrcode size={25} />
                                    </span>
                                </div>
                                <div className="flex  rounded-2xl">
                                    <span className="w-full px-6 py-4 border rounded-2xl bg-slate-50 line-through select-none font-bold">
                                        {randomWord}
                                    </span>
                                </div>
                            </div>
                            <span className="text-blue-700 text-start flex justify-start items-center gap-2">
                                <label htmlFor="checkbox-1 cursor-pointer">
                                    {t("I accept")}{" "}
                                    <Link
                                        href="https://www2.inscription.tn/ORegMx/mentionslegales.jsp" target="_blank"
                                        className="underline"
                                    >
                                        {t("The privacy terms")}
                                    </Link>
                                </label>
                                <input id="checkbox-1" type="checkbox"></input>
                            </span>
                            {/* login buttons */}
                            <div className="input-button">
                                <Link href='dashboard' type="submit" className={styles.button}>
                                    {t("Confirm")}
                                </Link>
                            </div>

                            <div className="input-button">
                                <Link
                                    href="mailto:inscription@mesrs.tn"
                                    className={styles.button_custom}
                                >
                                    <Image
                                        src={"/assets/email.png"}
                                        alt="mail"
                                        width="20"
                                        height={20}
                                    ></Image>
                                    inscription@mesrs.tn
                                </Link>
                            </div>
                            <div className="input-button">
                                <Link href="tel:+216 71 834 746" className={styles.button_custom}>
                                    <Image
                                        src={"/assets/mobile.png"}
                                        alt="mobile"
                                        width={25}
                                        height={25}
                                    ></Image>
                                    (+216) 71 834 746
                                </Link>
                            </div>
                        </form>

                        {/* bottom */}
                        <p className="text-center text-gray-400 ">
                            {t("Already have an account?")}{" "}
                            <Link className="text-blue-700" href={"login"}>
                                {t("Login")}
                            </Link>
                        </p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
}
