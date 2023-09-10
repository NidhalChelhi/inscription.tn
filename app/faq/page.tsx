"use client";
import { faq } from "@/constants";
import {
  CustomEmailButton,
  CustomGuideButton,
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
            FAQ - Inscription en ligne
          </h1>
          <div className="flex flex-col gap-8">
            {faq.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="font-bold text-gray-800 md:text-xl text-lg">
                  <span className="md:text-4xl text-3xl text-gray-800 ">{`Q${
                    index + 1
                  }: `}</span>
                  {item.question}{" "}
                </h2>
                <span className="font-normal text-gray-500 md:text-lg text-sm">
                  {item.answer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="md:w-full w-full grid md:grid-cols-2 grid-cols-1 gap-5">
          <CustomLegalNoticeButton />
          <CustomGuideButton />
          <CustomEmailButton />
          <CustomPhoneButton />
        </div>
      </section>
    </motion.div>
  );
}
