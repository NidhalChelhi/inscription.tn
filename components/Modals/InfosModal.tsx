"use client";

import { fadeIn, slideIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Buttons.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from "react";
import { changePasswordValidate } from "@/lib/validate";
import { HiFingerPrint } from "react-icons/hi";
import { CustomInput, CustomSelect } from "../CustomInput";
import {
  civilOptions,
  govOptions,
  mentionOptions,
  militaryOptions,
  paysOptions,
  sectionOptions,
  sessionOptions,
  sexeOptions,
} from "@/constants";
const InfosModal = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      actual: "",
      new: "",
      newconfirm: "",
    },
    onSubmit: onSubmit,
  });

  // Handle form submission
  async function onSubmit(values: any) {
    const validationErrors = changePasswordValidate(values);
    if (Object.keys(validationErrors).length === 0) {
      toast.success(t("Password Changed"));
    } else {
      Object.keys(validationErrors).forEach((key) => {
        toast.error(t(validationErrors[key as keyof typeof validationErrors]));
      });
    }
  }

  return (
    <motion.div
      variants={fadeIn("down", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" w-full flex flex-col rounded-3xl border-2 px-8 py-4 gap-8 items-center justify-center"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-800 text-2xl font-bold">
          {t("Informations")}
        </h1>
        <p className="text-center text-gray-600">
          {t("Informations Paragraph")}
        </p>
      </div>
      {/* Content */}
      <form
        className="flex flex-col gap-6 w-full"
        // onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <p className="text-start font-semibold">Informations générales</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
            <CustomInput type="text" placeholder="Nom Complet" />
            <CustomSelect options={sexeOptions} />
            <CustomInput type="date" placeholder="Date de naissance" />
            <CustomInput type="text" placeholder="Lieu de naissance" />
            <CustomSelect options={govOptions} />
            <CustomSelect options={paysOptions} />
            <CustomInput type="text" placeholder="Nationalité" />
            <CustomInput type="number" placeholder="N° de passeport" />
            <CustomInput type="number" placeholder="N° CNSS" />
            <CustomSelect options={civilOptions} />
            <CustomSelect options={militaryOptions} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-start font-semibold">
            Baccalauréat ou diplôme équivalent
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
            <CustomInput type="number" placeholder="Année du bac" />
            <CustomSelect options={sectionOptions} />
            <CustomSelect options={mentionOptions} />
            <CustomSelect options={sessionOptions} />
            <CustomSelect options={paysOptions} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-start font-semibold">Adresse</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
            <CustomInput type="text" placeholder="N° et Rue" />
            <CustomInput type="text" placeholder="Ville" />
            <CustomInput type="number" placeholder="Code postal" />
            <CustomSelect options={govOptions} />
            <CustomSelect options={paysOptions} />
            <CustomInput type="tel" placeholder="Téléphone" />
            <CustomInput type="text" placeholder="Profession" />
            <CustomInput type="text" placeholder="Etablissement" />
            <CustomInput type="email" placeholder="Email" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className={`${styles.changepwd_button}`} type="submit">
            <Image
              src={"/assets/pwd.png"}
              alt="print"
              width={24}
              height={24}
              className="object-contain"
            ></Image>
            <p className="select-none">{t("Confirm")}</p>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default InfosModal;
