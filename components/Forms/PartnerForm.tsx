import React from "react";
import { CustomInput } from "../CustomInput";
import { useTranslation } from "react-i18next";

const PartnerForm = ({ formik }: any) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-start font-semibold text-lg">
        {t("Information du conjoint")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomInput
          type="text"
          placeholder={t("Nom du conjoint")}
          name="partnerNom"
          value={formik.values.partnerNom}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Prénom du conjoint")}
          name="partnerPrenom"
          value={formik.values.partnerPrenom}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Profession du conjoint")}
          name="partnerProfession"
          value={formik.values.partnerProfession}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Etablissement partner")}
          name="partnerEtablissement"
          value={formik.values.partnerEtablissement}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Nombre d'enfants")}
          name="nbEnfants"
          value={formik.values.nbEnfants}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default PartnerForm;
