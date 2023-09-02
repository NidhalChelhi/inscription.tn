"use client";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const CustomUniversitiesButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      href="http://www6.inscription.tn/images/stories/inscription/annuaire_fr.pdf"
      download="annuaaaaaaaire_fr.pdf"
      target="_blank"
      className={styles.button_custom}
    >
      <Image
        src={"/assets/university.png"}
        alt="university"
        width={24}
        height={24}
        className="object-contain"
      ></Image>
      <p className="flex-grow">{t("Download Universities List")}</p>
    </Link>
  );
};

export default CustomUniversitiesButton;
