"use client";
import Background1 from "../../../../img/background/0.png";
import Bar from "../../../../components/ui/bar";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import MessageBox from "../../../../components/ui/messagebox";
import { motion } from "framer-motion";
import NextButton from "@/components/ui/NextButton";
import { useState } from "react";

const Scene5 = () => {
  const t = useTranslations("0-5");
  const locale = useLocale();
const [stressScore, setStressScore] = useState(1);
const [mouseDown, setMouseDown] = useState(false);

  return (
    <section className="w-full h-lvh flex flex-col pt-[150px]">
      <Image
        src={Background1}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex justify-center items-center h-full flex-col font-th text-center gap-[20px] z-10 mt-[100px]"
      >
        <div className="flex justify-center items-center h-full flex-col gap-[20px]">
          <MessageBox
            message={
              <div className="flex flex-col text-center text-primaryblue font-th font-light text-[18px] w-[246px] leading-6 space-y-3">
                <p>
                  {t("p1.s1")}
                  <br />
                  {t("p1.s2")}
                  <br/>
                  {t("p1.s3")}
                 
                  {t("p1.s4")}
                  <span className="font-bold">{t("p1.push")}</span>
                  {locale === 'th'? <br/> : null}
                  {t("p1.or")}
                  <span className="font-bold">{t("p1.stress")}</span>
                  {t("p1.s5")}
                </p>
              </div>
            }
            size="w-[278px] h-[150px]"
            BoxPadding="px-5 py-5"
          />
          <div className="flex justify-center items-center h-full flex-col">
            <Bar  setMouseDown={setMouseDown} stressScore={stressScore} setStressScore={setStressScore} />
          </div>

          <div className="flex justify-start items-center h-full flex-col ">
            <NextButton disabled= {!mouseDown} url="/0-6" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Scene5;
