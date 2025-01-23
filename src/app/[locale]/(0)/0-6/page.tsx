"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
const Zero6 = () => {
  const t = useTranslations("0-6");

  return (
    <Link href="/0-7">
      <section className="bg-linear-radial-gradient w-full justify-center h-lvh flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className=" flex justify-center items-center w-full h-full flex-col text-center">
            <p>
              {t("p1.s1")}
              <br />
              {t("p1.s2")}
              <br />
              {t("p1.s3")}
              <br />
              {t("p1.s4")}
            </p>
          </div>
        </motion.div>
      </section>
    </Link>
  );
};

export default Zero6;
