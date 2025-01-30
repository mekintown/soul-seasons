"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";

const Page3_2_12 = () => {
  const t = useTranslations("3-2-12");
  const router = useRouter();
  const [hasClicked, setHasClicked] = useState(false);
  const [pressStartTime, setPressStartTime] = useState<number | null>(null);
  const [pressDuration, setPressDuration] = useState(0);

  const handleMouseDown = () => {
    setPressStartTime(Date.now());
  };

  const handleMouseUp = () => {
    if (pressStartTime !== null) {
      const duration = Date.now() - pressStartTime;
      setPressDuration(duration);
      console.log(`Pressed for ${duration} ms`);
      setPressStartTime(Date.now());
    }

    if (!hasClicked) {
      setHasClicked(true);
      setTimeout(() => {
        router.push("3-3");
      }, 8000);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="text-center text-base text-white absolute top-1/3 w-2/3"
        initial={{ opacity: 0, z: -20 }}
        animate={{ opacity: 1, z: 0, transition: { duration: 1, delay: 1 } }}
      >
        <p>{t("rainDoll")}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] right-[33%] w-16 h-16"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: hasClicked ? 0 : 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <button
          className="w-full h-full rounded-full opacity-50 bg-[#D9D9D9]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_12;
