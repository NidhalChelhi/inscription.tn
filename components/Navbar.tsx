import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setToggle(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:px-24 px-12 py-8 sm:py-2"
    >
      <div className="w-full relative z-10 flex justify-between items-center gap-4 sm:gap-8">
        <div className="hidden sm:flex h-20">
          <img src="/assets/tunisia-flag.png" className="object-contain" />
        </div>

        <Link href="/" className="w-44">
          <img
            src="/logo/logo_ex.svg"
            alt="logo"
            height={24}
            className="object-contain"
          />
        </Link>

        <div className="flex flex-row items-center justify-between">
          <div className="relative inline-block text-left">
            <button
              onClick={() => setToggle(!toggle)}
              className="flex gap-2 cursor-pointer"
            >
              <img
                src="/assets/globe.png"
                alt="language"
                width={30}
                height={30}
                className="object-cover"
              />
              <span className="font-bold text-[18px] leading-[30.24px] text-gray-600 hover:text-blue-700 select-none">
                {i18n.language === "ar"
                  ? "AR"
                  : i18n.language === "en"
                  ? "EN"
                  : "FR"}
              </span>
            </button>
            {toggle && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-2xl shadow-lg bg-blue-50 ring-2 ring-black ring-opacity-5">
                <div
                  className="py-0"
                  role="menu"
                  aria-orientation="horizontal"
                  aria-labelledby="options-menu"
                >
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="flex flex-row items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-t-2xl hover:text-gray-900"
                    role="menuitem"
                  >
                    <img
                      src="/assets/tunisia.png"
                      alt="tunisia"
                      width={30}
                      height={30}
                      className="object-cover"
                    />
                    عربي
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className="flex flex-row items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <img
                      src="/assets/france.png"
                      alt="france"
                      width={30}
                      height={30}
                      className="object-cover"
                    />
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex flex-row items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-b-2xl hover:text-gray-900"
                    role="menuitem"
                  >
                    <img
                      src="/assets/uk.png"
                      alt="uk"
                      width={30}
                      height={30}
                      className="object-cover"
                    />
                    English
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
