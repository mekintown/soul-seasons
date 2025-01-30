"use client";
import { useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const Page1_3_6 = () => {
  const router = useRouter();
  const t = useTranslations("1-3-6");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("1-4-1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p> {t("diaryHere")}</p>
      </motion.div>
    </div>
  );
};

export default Page1_3_6;
