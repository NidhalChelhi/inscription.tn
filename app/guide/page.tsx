"use client";
import { useTranslation } from "react-i18next";

import { guide } from "@/constants";
import {
  CustomEmailButton,
  CustomFAQButton,
  CustomLegalNoticeButton,
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
        <div 
          className="flex flex-col gap-12 py-2"
          dir="ltr"
          //in case the hooks not making effects, the dir attribute will be used
        >
          <h1 className="font-bold text-gray-800 md:text-4xl text-2xl">
            Guide - Inscription en ligne
          </h1>

          {guide.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="font-bold text-gray-800 md:text-2xl text-lg">
                {item.phase}
              </h2>
              <div className="flex flex-col gap-2 ">
                {item.etapes.map((etape, index) => (
                  <h3
                    key={index}
                    className="font-semibold text-gray-700 md:text-xl text-sm"
                  >
                    {etape.title}{" "}
                    <span className="w-auto mx-auto text-gray-400 font-normal md:text-base text-xs">
                      {etape.text}
                    </span>
                  </h3>
                ))}{" "}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="md:w-full w-full grid md:grid-cols-2 grid-cols-1 gap-5">
          <CustomLegalNoticeButton />
          <CustomFAQButton />
          <CustomEmailButton />
          <CustomPhoneButton />
        </div>
      </section>
    </div>
  );
}
