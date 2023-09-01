"use client";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineQrcode } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";
import { useFormik } from "formik";
import { loginValidate } from "../../lib/validate";
import { TbAlertSquareRounded } from "react-icons/tb";
import CustomEmailButton from "@/components/CustomEmailButton";
import CustomPhoneButton from "@/components/CustomPhoneButton";

export default function Page() {
    const [show, setShow] = useState(false);
    const [randomWord, setRandomWord] = useState("insc8");
    const { t, i18n } = useTranslation();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            code: "",
        },
        validate: (values) => loginValidate(values, randomWord),
        onSubmit,
    });
    async function onSubmit(values: any) {
        console.log(values);
    }
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
            variants={fadeIn("left", "spring", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto grid lg:grid-cols-2 drop-shadow-2xl"
        >
            <div className="w-full rounded-l-3xl relative overflow-hidden">
                <div className="bg-login-img bg-cover absolute inset-0 bg-no-repeat z-10 w-full h-full bg-center"></div>
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
                                {t("Login")}
                            </h1>
                            <p className="w-auto mx-auto text-gray-400">
                                {t("Login Paragraph")}
                            </p>
                        </div>

                        {/* form */}
                        <form
                            className="flex flex-col gap-5"
                            onSubmit={formik.handleSubmit}
                        >
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
                            {formik.errors.email && formik.touched.email ? (
                                <span className={styles.input_error}>
                                    <TbAlertSquareRounded size={18} /> {t(formik.errors.email)}
                                </span>
                            ) : (
                                <></>
                            )}
                            <div className={styles.input_group}>
                                <input
                                    type={`${show ? "text" : "password"}`}
                                    placeholder={t("Password")}
                                    className={styles.input_text}
                                    {...formik.getFieldProps("password")}
                                />
                                <span
                                    className="icon flex items-center sm:px-4 px-2"
                                    onClick={() => setShow(!show)}
                                >
                                    <HiFingerPrint size={25} />
                                </span>
                            </div>
                            {formik.errors.password && formik.touched.password ? (
                                <span className={styles.input_error}>
                                    <TbAlertSquareRounded size={18} /> {t(formik.errors.password)}
                                </span>
                            ) : (
                                <></>
                            )}
                            <div className="flex sm:flex-row flex-col gap-4 items-center justify-between">
                                <div className={`${styles.input_group} flex-grow`}>
                                    <input
                                        type="text"
                                        placeholder={t("Security Code")}
                                        className={styles.input_text}
                                        {...formik.getFieldProps("code")}
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
                            {formik.errors.code && formik.touched.code ? (
                                <span className={styles.input_error}>
                                    <TbAlertSquareRounded size={18} /> {t(formik.errors.code)}
                                </span>
                            ) : (
                                <></>
                            )}

                            {/* login buttons */}
                            <div className="input-button">
                                <button type="submit" className={styles.button}>
                                    {t("Confirm")}
                                </button>
                            </div>

                            <Link className="text-blue-700 text-start" href={"/forgetpwd"}>
                                {t("Forget your Password?")}
                            </Link>
                            <CustomEmailButton />
                            <CustomPhoneButton />
                        </form>

                        {/* bottom */}
                        <p className="text-center text-gray-400 ">
                            {t("Don't have an account yet?")}{" "}
                            <Link className="text-blue-700" href={"/register"}>
                                {t("Create an account")}
                            </Link>
                        </p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
}
