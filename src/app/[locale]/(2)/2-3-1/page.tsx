"use client";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";

interface MotivationGoal {
  index: string;
  name: string;
}

const Scene2_3Page1: React.FC = () => {
  const motivationGoals: MotivationGoal[] = JSON.parse(
    getLocalStorageWithFallback("motivationGoal", "[]")
  );
  const t = useTranslations("2-3-1");

  const importantPerson = getLocalStorageWithFallback(
    "importantPerson",
    t("importantPerson")
  );
  const motivations = getLocalStorageWithFallback(
    "motivations",
    t("motivations")
  );

  // TODO: Extract this into a util
  const colorMapping: Record<string, string> = {
    Family: "blue",
    "Finance/Money": "yellow",
    "Spirituality/Religion": "purple",
    Health: "green",
    "Relationships/Friends": "red",
    "Sharing/Contribution": "orange",
    "Career/Work": "pink",
    "Self-Development": "cyan",
  };

  const selectedColors = motivationGoals
    .map((goal) => colorMapping[goal.name] || "blue")
    .slice(0, 3);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/4"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>
          {importantPerson} : {t("iSee")}
        </p>
        <p>{motivations}</p>
        <p>{t("isMotivations")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 0,
          transition: { duration: 1, delay: 2 },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center top-[85%] inset-x-0"
      >
        {/* Sparkles */}
        {selectedColors.map((color) => (
          <div
            className="w-[130%] h-[130%] absolute -bottom-[200px]"
            key={color}
          >
            <Image
              src={`/img/motivation/sparkle-${color}-1x.webp`}
              fill
              objectFit="contain"
              alt={`sparkle-${color}`}
            />
          </div>
        ))}

        {/* Christmas tree */}
        <div className="w-[130%] h-[130%] absolute -bottom-[100px]">
          <Image
            src="/img/motivation/christmas-tree.webp"
            fill
            objectFit="contain"
            alt="christmas-tree"
          />
        </div>
      </motion.div>

      <DelayedFullScreenLink href="2-3-2" delay={2000} />
    </div>
  );
};

export default Scene2_3Page1;
