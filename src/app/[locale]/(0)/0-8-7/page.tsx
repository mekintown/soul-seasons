"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Page0_8_8 = () => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  const t = useTranslations("0-8-7");

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <Image
        src="/0-8/0-8-tree-3.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {showText && (
        <motion.div
          className="relative text-center flex justify-center items-center bottom-16"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
          }}
          animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
        >
          <Image
            width={181}
            height={69}
            src="/0-8/0-8-text.webp"
            alt="text background"
            className="relative inset-0 z-0"
          />

          <span
            className="absolute font-th text-[#182649] z-10"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {t("p1.s1")}
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default Page0_8_8;
