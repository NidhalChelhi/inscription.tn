import React from "react";
import { CustomInput, CustomSelect } from "../CustomInput";
import { useTranslation } from "react-i18next";

const ParentsInfoForm = ({ formik }: any) => {
  const { t } = useTranslation();

  const fatherStatusOptions = [
    {
      label: t("Etat du père"),
      value: "none",
    },
    {
      label: t("Vivant"),
      value: "Vivant",
    },
    {
      label: t("Decede"),
      value: "Decede",
    },
  ];

  const motherStatusOptions = [
    {
      label: t("Etat de la mère"),
      value: "none",
    },
    {
      label: t("Vivante"),
      value: "Vivante",
    },
    {
      label: t("Decedee"),
      value: "Decedee",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="text-start font-semibold text-lg">
        {t("Informations parentales")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomSelect
          options={fatherStatusOptions}
          name="etatPere"
          value={formik.values.etatPere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Nom du père")}
          name="nomPere"
          value={formik.values.nomPere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Prénom du père")}
          name="prenomPere"
          value={formik.values.prenomPere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Profession du père")}
          name="professionPere"
          value={formik.values.professionPere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Etablissement de père")}
          name="etablissementPere"
          value={formik.values.etablissementPere}
          onChange={formik.handleChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomSelect
          options={motherStatusOptions}
          name="etatMere"
          value={formik.values.etatMere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Nom de la mère")}
          name="nomMere"
          value={formik.values.nomMere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Prénom de la mère")}
          name="prenomMere"
          value={formik.values.prenomMere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Profession de la mère")}
          name="professionMere"
          value={formik.values.professionMere}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Etablissement de la mère")}
          name="etablissementMere"
          value={formik.values.etablissementMere}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default ParentsInfoForm;
