"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const CustomContactButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link href="contact" className={styles.button_custom}>
      <Image
        src={"/assets/contact.png"}
        alt="contact"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p className="flex-grow">{t("Contact Page")}</p>
    </Link>
  );
};

export default CustomContactButton;
