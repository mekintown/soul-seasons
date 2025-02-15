"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl"; // Ensure locale support

const Page5_1_1 = () => {
  const t = useTranslations("5-1-1");
  const locale = useLocale(); // Get current locale

  return (
    <div className="flex h-screen flex-col text-white items-center justify-center relative">
      <motion.div
        style={{
          fontSize: "18px",
          marginTop: 640,
          textAlign: "center",
        }}
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {t("p1.name")}: {t("p1.s1")}
        </p>
        <p>{t("p1.s2")}</p>
      </motion.div>

      {/* Delay 2 seconds before navigating */}
      <DelayedFullScreenLink href={`/${locale}/2-1-5`} delay={2000} />
    </div>
  );
};

export default Page5_1_1;
