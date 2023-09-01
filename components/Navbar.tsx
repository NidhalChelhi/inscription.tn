"use client";

import { navVariants } from "@/utils/motions";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GiTunisia, GiFrance } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    const [toggle, setToggle] = useState(false);

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="w-full sm:px-24 px-12 py-8"
        >
            <div className="w-full flex justify-between gap-4 sm:gap-8">
                <div className="hidden sm:flex flex-row items-center justify-between">
                    <BsFacebook size={24} className="sm:mr-5 mr-3" />
                    <BsTwitter size={24} />
                </div>

                <h2 className="font-extrabold text-[24px] leading-[30.24px] text-gray-800">
                    Inscription.tn
                </h2>

                <div className="flex flex-row items-center justify-between">
                    {toggle ? (
                        <div
                            className="flex flex-row"
                            onClick={() => {
                                setToggle(!toggle);
                                toggleLanguage("fr");
                            }}
                        >
                            <GiFrance size={24} className="mx-1 object-contain" />
                            <h2 className="font-bold text-[18px] leading-[30.24px] text-black">
                                FR
                            </h2>
                        </div>
                    ) : (
                        <div
                            className="flex flex-row"
                            onClick={() => {
                                setToggle(!toggle);
                                toggleLanguage("ar");
                            }}
                        >
                            <GiTunisia size={24} className="mx-1 object-contain" />
                            <h2 className="font-bold text-[18px] leading-[30.24px] text-black">
                                AR
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
