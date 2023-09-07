"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const CustomGuideButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link href="/guide" className={styles.navigation_button}>
      <Image
        src={"/assets/guide.png"}
        alt="guide"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p className="flex-grow">{t("Guide Page")}</p>
    </Link>
  );
};

export default CustomGuideButton;
