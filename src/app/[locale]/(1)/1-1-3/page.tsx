"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";
import ImportantInput from "@/components/ui/ImportantInput";

const Page1_1_3 = () => {
  const t = useTranslations("1-1-3");
  const locale = useLocale();
  const fontWeights = locale === "th" ? "font-light" : "font-medium";

  const [importantPerson, setName] = useState("");

  return (
    <section className="w-full h-lvh flex flex-col relative">
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="w-full h-full flex justify-center items-center relative"
      >
        <h1
          className={`${fontWeights} text-white text-[28px] absolute top-[20%]`}
        >
          {t("p1.s1")}
        </h1>

        <div className="absolute top-[40%]">
          {" "}
          <ImportantInput
            placeholder={t("p1.s2")}
            name={importantPerson}
            setName={setName}
          />
        </div>

        <div className="absolute bottom-[15%] font-bold">
          <NextButton url="/1-2-1" disabled={!importantPerson} />
        </div>
      </motion.div>
    </section>
  );
};

export default Page1_1_3;
