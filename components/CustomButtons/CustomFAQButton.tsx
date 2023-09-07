"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const CustomFAQButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link href="/faq" className={styles.navigation_button}>
      <Image
        src={"/assets/faq.png"}
        alt="faq"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p className="flex-grow">{t("FAQ Page")}</p>
    </Link>
  );
};

export default CustomFAQButton;
