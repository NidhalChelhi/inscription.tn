"use client";

import { guide } from "@/constants";
import {
  CustomEmailButton,
  CustomFAQButton,
  CustomLegalNoticeButton,
  CustomPhoneButton,
} from "@/components";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="m-auto bg-slate-50 rounded-3xl w-5/6 h-auto flex flex-col justify-center drop-shadow-2xl text-left py-10"
    >
      <section className="w-3/4 mx-auto flex flex-col items-center justify-center gap-8">
        {/* Header */}
        <div className="flex flex-col gap-12 py-2">
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
    </motion.div>
  );
}
