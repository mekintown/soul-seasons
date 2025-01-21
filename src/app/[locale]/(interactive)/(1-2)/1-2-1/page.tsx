"use client";
import NextButton from "@/components/ui/nextButton";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Page1_2_1 = () => {
  const t = useTranslations("1-2-1");

  const name =
    typeof window !== "undefined" && localStorage.getItem("name") != null
      ? localStorage.getItem("name")
      : t("name");
  const importantPerson =
    typeof window !== "undefined" &&
    localStorage.getItem("importantPerson") != null
      ? localStorage.getItem("importantPerson")
      : t("importantPerson");

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : "{name} {name} {name}"
        </p>
      </motion.div>

      <Link href="1-2-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="flex justify-center absolute top-[75%] inset-x-0"
        >
          <NextButton />
        </motion.div>
      </Link>
    </div>
  );
};

export default Page1_2_1;
