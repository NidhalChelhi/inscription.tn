"use client";
import { useTranslation } from "react-i18next";

import { legalNotice } from "@/constants";
import {
  CustomEmailButton,
  CustomFAQButton,
  CustomGuideButton,
  CustomPhoneButton,
} from "@/components";

export default function Page() {
  const { t, i18n } = useTranslation();

  return (
    <div className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl text-center py-10">
      <section
        className="w-3/4 mx-auto flex flex-col items-center justify-center gap-8"
        style={
          i18n.language === "ar"
            ? { direction: "rtl", textAlign: "left" }
            : { direction: "ltr", textAlign: "left" }
        }
      >
        {/* Header */}
        <div className="flex flex-col gap-12 py-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-800 md:text-4xl text-2xl">
              Mentions légales - Inscription en ligne
            </h1>
            <p className="w-auto mx-auto text-gray-400">
              Les mentions légales visent les conditions juridiques,
              informations légales relatives à l'utilisation du site web
              www.inscription.tn. Elles visent également la protection des
              données personnelles et la protection des droits de propriété
              intellectuelle.
            </p>
          </div>
          {legalNotice.map((item, index) => (
            <div key={index} className="flex flex-col gap-0">
              <h2 className="font-bold text-gray-800 md:text-2xl text-lg">
                {item.title}
              </h2>
              <p className="w-auto mx-auto text-gray-400 ">{item.paragraph}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="md:w-full w-full grid md:grid-cols-2 grid-cols-1 gap-5">
          <CustomFAQButton />
          <CustomGuideButton />
          <CustomEmailButton />
          <CustomPhoneButton />
        </div>
      </section>
    </div>
  );
}
