"use client";
import NextButton from "@/components/ui/NextButton";
import { TextareaWithCounter } from "@/components/ui/textareaWithCounter";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Page1_2_2 = () => {
  const t = useTranslations("1-2-2");
  const importantPerson =
    typeof window !== "undefined" &&
    localStorage.getItem("importantPerson") != null
      ? localStorage.getItem("importantPerson")
      : t("importantPerson");

  const [text, setText] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : {t("callYou")}
        </p>
      </motion.div>

      <motion.div
        className="text-center text-base text-white absolute top-[40%]"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 2.5 } }}
      >
        <TextareaWithCounter
          onChange={(e) => setText(e.target.value)}
          value={text}
          maxCount={80}
          className="mx-12 h-[214px] pb-4"
        />
        <NextButton
          url="1-2-4"
          disabled={text == null}
          variant="nextSecondary"
        />
      </motion.div>
    </div>
  );
};

export default Page1_2_2;
