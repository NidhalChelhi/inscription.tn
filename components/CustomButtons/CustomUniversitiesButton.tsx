"use client";
import Link from "next/link";
import styles from "../../styles/Buttons.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const CustomUniversitiesButton = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      href="http://www6.inscription.tn/images/stories/inscription/annuaire_fr.pdf"
      download="annuaire_fr.pdf"
      target="_blank"
      className={styles.navigation_button}
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
