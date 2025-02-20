"use client";

import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Page6_2_1 = () => {
  const t = useTranslations("6-2-1");
  const [isTextShifted, setIsTextShifted] = useState(false);
  const [showLink, setShowLink] = useState(false); // Controls when the link appears

  const handleClick = () => {
    setIsTextShifted(true);
    setTimeout(() => {
      setShowLink(true);
    }, 6000);
  };

  return (
    <div
      className="flex h-screen flex-col items-center justify-center relative"
      onClick={handleClick}
    >
      <motion.div
        className="text-center text-black absolute top-[40%]"
        style={{ fontSize: "18px" }}
        initial={{ y: 0 }}
        animate={{
          y: isTextShifted ? -65 : 0,
          transition: { duration: 1 },
        }}
      >
        <p>{t("p1.s1")}</p>
        <p>{t("p1.s2")}</p>
        <p>{t("p1.s3")}</p>
        <p>{t("p1.s4")}</p>
      </motion.div>

      <motion.div
        className="text-center text-black absolute top-[50%]"
        style={{ fontSize: "18px" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isTextShifted ? 1 : 0,
          transition: { duration: 4, delay: 1 },
        }}
      >
        <p>{t("p1.s5")}</p>
        <p>{t("p1.s6")}</p>
        <p>{t("p1.s7")}</p>
        <p>{t("p1.s8")}</p>
      </motion.div>

      {showLink && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="flex justify-center absolute top-[85%] inset-x-0"
        >
          <NextDisplay />
        </motion.div>
      )}

      {showLink && <DelayedFullScreenLink href="6-2-4" delay={2000} />}
    </div>
  );
};

export default Page6_2_1;
