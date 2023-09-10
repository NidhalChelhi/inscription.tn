import React from "react";

import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
import { useTranslation } from "react-i18next";
const CustomSaveButton = () => {
  const { t } = useTranslation();

  return (
    <div className="w-auto flex items-center justify-center">
      <button className={`${styles.modal_button}`} type="submit">
        <Image
          src={"/assets/checkmark.png"}
          alt="save"
          width={24}
          height={24}
          className="object-contain"
        ></Image>
        <p className="select-none">{t("Save")}</p>
      </button>
    </div>
  );
};

export default CustomSaveButton;
