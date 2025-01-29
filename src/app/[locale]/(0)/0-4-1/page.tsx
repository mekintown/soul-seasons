"use client";
import { useTranslations } from "next-intl";
import MessageBox from "@/components/ui/messagebox";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";

const Scene041 = () => {
  const t = useTranslations("0-4-1");
  return (
    <section className="w-full h-lvh flex flex-col pt-[150px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          easings: "easeOut",
        }}
        className="flex justify-center items-center h-full flex-col "
      >
        <div className="flex justify-end items-center h-full flex-col">
          <MessageBox
            message={
              <p className="text-primaryblue  font-light text-[18px] w-[227px] leading-6">
                <span className="font-semibold">Soul Seasons</span>
                <br></br> Interactive website <br></br> {t("p1.s2")}
                <span className="font-semibold">{t("p1.s3")}</span>
                {t("p1.s4")}
                <span className="font-semibold">{t("p1.s5")}</span>
              </p>
            }
            // size=' '
            BoxPadding="px-5 py-5"
          />
        </div>

        <div className="flex justify-center items-center h-full flex-col">
          <NextButton url="/0-4-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Scene041;
