"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  firstFormValidate,
  fourthFormValidate,
  secondFormValidate,
  thirdFormValidate,
} from "../../lib/infosvalidate";

import {
  AddressInfoForm,
  BacInfoForm,
  CustomSaveButton,
  GeneralInfoForm,
  ParentsAddressForm,
  ParentsInfoForm,
  PartnerForm,
} from "..";
import { useState } from "react";
import CustomBackButton from "../CustomButtons/CustomBackButton";
const InfosModal = (props: any) => {
  const { t } = useTranslation();
  const [currentForm, setCurrentForm] = useState(1);
  const handleNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };
  const handlePreviousForm = (props: any) => {
    setCurrentForm((prevForm) => prevForm - 1);
  };
  const formik1 = useFormik({
    initialValues: {
      nomComplet: "",
      sexe: "",
      dateNaissance: "",
      lieuNaissance: "",
      gouvernoratNaissance: "",
      paysNaissance: "",
      nationalite: "",
      numeroPasseport: "",
      numeroCNSS: "",
      etatCivil: "",
      statutMilitaire: "",
    },
    onSubmit: onSubmit1,
  });
  const formik2 = useFormik({
    initialValues: {
      anneeBac: "",
      sectionBac: "",
      mentionBac: "",
      sessionBac: "",
      paysBac: "",
    },
    onSubmit: onSubmit2,
  });
  const formik3 = useFormik({
    initialValues: {
      rue: "",
      ville: "",
      codePostal: "",
      gouvernoratAdresse: "",
      paysAdresse: "",
      telephone: "",
      profession: "",
      etablissement: "",
      email: "",
    },
    onSubmit: onSubmit3,
  });

  const formik4 = useFormik({
    initialValues: {
      etatPere: "",
      nomPere: "",
      prenomPere: "",
      professionPere: "",
      etablissementPere: "",
      etatMere: "",
      nomMere: "",
      prenomMere: "",
      professionMere: "",
      etablissementMere: "",
    },
    onSubmit: onSubmit4,
  });

  const formik5 = useFormik({
    initialValues: {
      parentsRue: "",
      parentsVille: "",
      parentsCodePostale: "",
      parentsGov: "",
      parentsPays: "",
      parentsPhone: "",
    },
    onSubmit: onSubmit5,
  });

  const formik6 = useFormik({
    initialValues: {
      partnerNom: "",
      partnerPrenom: "",
      partnerProfession: "",
      partnerEtablissement: "",
      nbEnfants: "",
    },
    onSubmit: onSubmit6,
  });

  async function onSubmit1(values: any) {
    const errors = firstFormValidate(values);
    if (Object.keys(errors).length === 0) {
      toast.success(t("Data Saved"));
      handleNextForm();
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(t(errors[key as keyof typeof errors]));
      });
    }
  }

  async function onSubmit2(values: any) {
    const errors = secondFormValidate(values);
    if (Object.keys(errors).length === 0) {
      toast.success(t("Data Saved"));
      handleNextForm();
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(t(errors[key as keyof typeof errors]));
      });
    }
  }

  async function onSubmit3(values: any) {
    const errors = thirdFormValidate(values);
    if (Object.keys(errors).length === 0) {
      toast.success(t("Data Saved"));
      handleNextForm();
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(t(errors[key as keyof typeof errors]));
      });
    }
  }
  async function onSubmit4(values: any) {
    const errors = fourthFormValidate(values);
    if (Object.keys(errors).length === 0) {
      toast.success(t("Data Saved"));
      handleNextForm();
    } else {
      Object.keys(errors).forEach((key) => {
        toast.error(t(errors[key as keyof typeof errors]));
      });
    }
  }
  async function onSubmit5(values: any) {
    toast.success(t("Data Saved"));
    handleNextForm();
  }

  async function onSubmit6(values: any) {
    toast.success(t("Data Saved"));
    props.onClose();
  }

  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
          {currentForm === 1 && (
            <form
              onSubmit={formik1.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <GeneralInfoForm formik={formik1} />
              <CustomSaveButton />
            </form>
          )}
          {currentForm === 2 && (
            <form
              onSubmit={formik2.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <BacInfoForm formik={formik2} />
              <div className="flex flex-row items-center justify-center gap-5">
                <div
                  className="cursor-pointer select-none"
                  onClick={handlePreviousForm}
                >
                  <CustomBackButton />
                </div>
                <CustomSaveButton />
              </div>
            </form>
          )}
          {currentForm === 3 && (
            <form
              onSubmit={formik3.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <AddressInfoForm formik={formik3} />
              <div className="flex flex-row items-center justify-center gap-5">
                <div
                  className="cursor-pointer select-none"
                  onClick={handlePreviousForm}
                >
                  <CustomBackButton />
                </div>
                <CustomSaveButton />
              </div>
            </form>
          )}
          {currentForm === 4 && (
            <form
              onSubmit={formik4.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <ParentsInfoForm formik={formik4} />
              <div className="flex flex-row items-center justify-center gap-5">
                <div
                  className="cursor-pointer select-none"
                  onClick={handlePreviousForm}
                >
                  <CustomBackButton />
                </div>
                <CustomSaveButton />
              </div>
            </form>
          )}
          {currentForm === 5 && (
            <form
              onSubmit={formik5.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <ParentsAddressForm formik={formik5} />
              <div className="flex flex-row items-center justify-center gap-5">
                <div
                  className="cursor-pointer select-none"
                  onClick={handlePreviousForm}
                >
                  <CustomBackButton />
                </div>
                <CustomSaveButton />
              </div>
            </form>
          )}
          {currentForm === 6 && (
            <form
              onSubmit={formik6.handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <PartnerForm formik={formik6} />
              <div className="flex flex-row items-center justify-center gap-5">
                <div
                  className="cursor-pointer select-none"
                  onClick={handlePreviousForm}
                >
                  <CustomBackButton />
                </div>
                <CustomSaveButton />
              </div>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfosModal;
