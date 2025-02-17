"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";

const Page5_1_1 = () => {
  const t = useTranslations("5-1-1");
  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );
  const name = getLocalStorageWithFallback("name", t("name"));

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <motion.div
        className="text-center text-white absolute top-[77%] "
        style={{
          fontSize: "18px",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson}: {name} {t("p1.s1")}
        </p>
      </motion.div>

      {/* Delay 2 seconds before navigating */}
      <DelayedFullScreenLink href="5-1-2" delay={2000} />
    </div>
  );
};

export default Page5_1_1;
