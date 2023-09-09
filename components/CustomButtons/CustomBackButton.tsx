import React from "react";

import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
import { useTranslation } from "react-i18next";
const CustomBackButton = () => {
  const { t } = useTranslation();

  return (
    <div className="w-auto flex items-center justify-center">
      <button className={`${styles.modal_button_secondary}`} type="button">
        <Image
          src={"/assets/back.png"}
          alt="print"
          width={24}
          height={24}
          className="object-contain"
        ></Image>
        <p className="select-none">{t("Back")}</p>
      </button>
    </div>
  );
};

export default CustomBackButton;
