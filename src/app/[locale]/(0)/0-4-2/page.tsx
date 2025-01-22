"use client";
import { useLocale, useTranslations } from "next-intl";
import Background1 from "@/img/background/0.png";
import NameInput from "@/components/ui/NameInput";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";
const Scene042 = () => {
  const t = useTranslations("0-4-2");
  const locale = useLocale();
  const fontWeights = locale === "th" ? "font-light" : "font-medium";
  return (
    <section
      className="w-full justify-center h-lvh flex flex-col"
      style={{
        backgroundImage: `url(${Background1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex justify-center items-center h-full flex-col "
      >
        <div className="flex justify-end items-center h-full flex-col  text-center gap-[20px] mt-[200px] ">
          <div className="flex justify-end items-center h-full flex-col  ">
            <h1 className={`${fontWeights} text-white text-[28px]`}>
              {t("title")}
            </h1>{" "}
            {/* change to weith 300 once get cloud font*/}
          </div>
          <NameInput placeholder={t("input")} />
        </div>
        <div className="flex justify-start items-center h-full flex-col mt-[100px]">
          <NextButton url="/0-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default Scene042;
