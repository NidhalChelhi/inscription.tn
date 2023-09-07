"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const CustomLegalNoticeButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link href="/legalnotice" className={styles.navigation_button}>
      <Image
        src={"/assets/legal.png"}
        alt="legal notice"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p className="flex-grow">{t("Legal Notice Page")}</p>
    </Link>
  );
};

export default CustomLegalNoticeButton;
