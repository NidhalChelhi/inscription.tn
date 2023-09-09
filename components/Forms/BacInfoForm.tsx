import React from "react";
import { CustomInput, CustomSelect } from "../CustomInput";
import { useTranslation } from "react-i18next";
import { countries, Country } from "countries-list";
type CustomCountry = {
  label: string;
  value: string;
};
const BacInfoForm = ({ formik }: any) => {
  const { t } = useTranslation();
  const countryData: Record<string, Country> = countries;
  const EmptyPaysBacOption: CustomCountry = {
    label: t("Pays d'obtention"),
    value: "none",
  };
  const excludedCountryCodes = ["IL"];
  const paysBacOptions: CustomCountry[] = Object.keys(countryData)
    .filter((countryCode) => !excludedCountryCodes.includes(countryCode))
    .map((countryCode) => ({
      label: t(countryData[countryCode].name),
      value: countryCode,
    }));

  paysBacOptions.unshift(EmptyPaysBacOption);
  const sectionOptions = [
    {
      label: t("Section"),
      value: "none",
    },
    {
      label: t("Mathématiques"),
      value: "math",
    },
    {
      label: t("Techniques"),
      value: "tech",
    },
    {
      label: t("Sciences Experimentales"),
      value: "science",
    },
    {
      label: t("Economie et Gestion"),
      value: "eco",
    },
    {
      label: t("Lettres"),
      value: "lettres",
    },
    {
      label: t("Informatique"),
      value: "info",
    },
    {
      label: t("Sport"),
      value: "sport",
    },
  ];

  const mentionOptions = [
    {
      label: t("Mention"),
      value: "none",
    },
    {
      label: t("Passable"),
      value: "passable",
    },
    {
      label: t("Assez Bien"),
      value: "assez bien",
    },
    {
      label: t("Bien"),
      value: "bien",
    },
    {
      label: t("Tres Bien"),
      value: "tres bien",
    },
  ];

  const sessionOptions = [
    {
      label: t("Session"),
      value: "none",
    },
    {
      label: t("Principale"),
      value: "principale",
    },
    {
      label: t("Controle"),
      value: "controle",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-start font-semibold text-lg">
        {t("Baccalauréat ou diplôme équivalent")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomInput
          type="number"
          placeholder={t("Année du bac")}
          name="anneeBac"
          value={formik.values.anneeBac}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={sectionOptions}
          name="sectionBac"
          value={formik.values.sectionBac}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={mentionOptions}
          name="mentionBac"
          value={formik.values.mentionBac}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={sessionOptions}
          name="sessionBac"
          value={formik.values.sessionBac}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={paysBacOptions}
          name="paysBac"
          value={formik.values.paysBac}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default BacInfoForm;
