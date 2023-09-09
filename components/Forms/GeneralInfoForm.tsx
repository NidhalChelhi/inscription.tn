import React from "react";
import { CustomInput, CustomSelect } from "../CustomInput";
import { useTranslation } from "react-i18next";
import { countries, Country } from "countries-list";
type CustomCountry = {
  label: string;
  value: string;
};
const GeneralInfoForm = ({ formik }: any) => {
  const { t } = useTranslation();
  const countryData: Record<string, Country> = countries;
  const EmptyPaysNaissanceOption: CustomCountry = {
    label: t("Pays de naissance"),
    value: "none",
  };
  const excludedCountryCodes = ["IL"];
  const paysNaissanceOptions: CustomCountry[] = Object.keys(countryData)
    .filter((countryCode) => !excludedCountryCodes.includes(countryCode))
    .map((countryCode) => ({
      label: t(countryData[countryCode].name),
      value: countryCode,
    }));

  paysNaissanceOptions.unshift(EmptyPaysNaissanceOption);

  const govNaissanceOptions = [
    {
      label: t("Gouvernorat de naissance"),
      value: "none",
    },
    {
      label: t("Tunis"),
      value: "tunis",
    },
    {
      label: t("Ariana"),
      value: "ariana",
    },
    {
      label: t("Ben Arous"),
      value: "ben_arous",
    },
    {
      label: t("Manouba"),
      value: "manouba",
    },
    {
      label: t("Nabeul"),
      value: "nabeul",
    },
    {
      label: t("Zaghouan"),
      value: "zaghouan",
    },
    {
      label: t("Bizerte"),
      value: "bizerte",
    },
    {
      label: t("Béja"),
      value: "beja",
    },
    {
      label: t("Jendouba"),
      value: "jendouba",
    },
    {
      label: t("Le Kef"),
      value: "kef",
    },
    {
      label: t("Siliana"),
      value: "siliana",
    },
    {
      label: t("Kairouan"),
      value: "kairouan",
    },
    {
      label: t("Kasserine"),
      value: "kasserine",
    },
    {
      label: t("Sidi Bouzid"),
      value: "sidi_bouzid",
    },
    {
      label: t("Sousse"),
      value: "sousse",
    },
    {
      label: t("Mahdia"),
      value: "mahdia",
    },
    {
      label: t("Monastir"),
      value: "monastir",
    },
    {
      label: t("Sfax"),
      value: "sfax",
    },
    {
      label: t("Gafsa"),
      value: "gafsa",
    },
    {
      label: t("Tozeur"),
      value: "tozeur",
    },
    {
      label: t("Kebili"),
      value: "kebili",
    },
    {
      label: t("Tataouine"),
      value: "tataouine",
    },
    {
      label: t("Medenine"),
      value: "medenine",
    },
    {
      label: t("Gabès"),
      value: "gabes",
    },
  ];
  const sexeOptions = [
    {
      label: t("Sexe"),
      value: "none",
    },
    {
      label: t("Masculin"),
      value: "male",
    },
    {
      label: t("Feminin"),
      value: "female",
    },
  ];

  const civilOptions = [
    {
      label: t("Etat civil"),
      value: "none",
    },
    {
      label: t("Celibataire"),
      value: "single",
    },
    {
      label: t("Marie"),
      value: "married",
    },
    {
      label: t("Divorce"),
      value: "divorced",
    },
    {
      label: t("Veuf"),
      value: "widower",
    },
  ];

  const militaryOptions = [
    {
      label: t("Situation militaire"),
      value: "none",
    },
    {
      label: t("Sursitaire"),
      value: "sursitaire",
    },
    {
      label: t("Non concerne"),
      value: "non concerne",
    },
    {
      label: t("Exempte"),
      value: "Exempte",
    },
    {
      label: t("Accompli"),
      value: "accompli",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="text-start font-semibold text-lg">
        {t("Informations générales")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomInput
          type="text"
          placeholder={t("Nom Complet")}
          name="nomComplet"
          value={formik.values.nomComplet}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={sexeOptions}
          name="sexe"
          value={formik.values.sexe}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="date"
          placeholder={t("Date de naissance")}
          name="dateNaissance"
          value={formik.values.dateNaissance}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Lieu de naissance")}
          name="lieuNaissance"
          value={formik.values.lieuNaissance}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={govNaissanceOptions}
          name="gouvernoratNaissance"
          value={formik.values.gouvernoratNaissance}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={paysNaissanceOptions}
          name="paysNaissance"
          value={formik.values.paysNaissance}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Nationalité")}
          name="nationalite"
          value={formik.values.nationalite}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="number"
          placeholder={t("N° de passeport")}
          name="numeroPasseport"
          value={formik.values.numeroPasseport}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="number"
          placeholder={t("N° CNSS")}
          name="numeroCNSS"
          value={formik.values.numeroCNSS}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={civilOptions}
          name="etatCivil"
          value={formik.values.etatCivil}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={militaryOptions}
          name="statutMilitaire"
          value={formik.values.statutMilitaire}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default GeneralInfoForm;
