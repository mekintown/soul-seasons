"use client";
import { useRouter } from "@/i18n/routing";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const Page1_3_3 = () => {
  const router = useRouter();
  const t = useTranslations("1-3-3");

  const name = getLocalStorageWithFallback("name", t("name"));
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("1-3-4");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-[80%]"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 0 } }}
      >
        <p>
          {importantPerson} : {name} {t("areYouHere")}
        </p>
      </motion.div>
    </div>
  );
};

export default Page1_3_3;
