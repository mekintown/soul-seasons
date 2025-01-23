"use client";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const Scene1_4Page1: React.FC = () => {
  const t = useTranslations("1-4-1");

  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-1.webp')] flex-col items-center bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="absolute bottom-[62%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex h-[135px] w-[400px]">
            <div className="items-cemter flex h-full w-full flex-col justify-center">
              <p className="text-center text-lg text-white font-light whitespace-break-spaces">
                {t("thereMightBe")}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[51%] right-[24%] w-36 h-10 flex items-center justify-center text-center text-sm text-black"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {name ?? t("name")} & {importantPerson ?? t("importantPerson")}
        </motion.div>
      </div>
    </div>
  );
};

export default Scene1_4Page1;
