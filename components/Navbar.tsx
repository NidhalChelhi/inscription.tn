"use client";

import { navVariants } from "@/utils/motions";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { GiTunisia, GiFrance } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
      className="w-full sm:px-24 px-12 py-8 sm:py-2"
    >
      <div className="w-full flex justify-between items-center gap-4 sm:gap-8 ">
        <div className="hidden sm:flex h-20">
          <img src="/assets/tunisia-flag.png" className="object-contain" />
        </div>

        <Link href="/" className="w-44">
          <img
            src="/assets/logo.svg"
            alt="logo"
            height={24}
            className="object-contain"
          />
        </Link>

        <div className="flex flex-row items-center justify-between">
          {toggle ? (
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                toggleLanguage("fr");
              }}
            >
              <img
                src="/assets/translate.png"
                alt="tunisia"
                width={30}
                height={30}
                className="object-cover"
              />

              <h2 className="font-bold text-[18px] leading-[30.24px] text-gray-600 hover:text-blue-600 select-none">
                عربي
              </h2>
            </div>
          ) : (
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                toggleLanguage("ar");
              }}
            >
              <img
                src="/assets/translate.png"
                alt="france"
                width={30}
                height={30}
                className="object-cover"
              />
              <h2 className="font-bold text-[18px] leading-[30.24px] text-gray-600 hover:text-blue-700 select-none">
                Français
              </h2>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
