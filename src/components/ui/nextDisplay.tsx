"use client";
import { useTranslations } from "next-intl";

const NextDisplay = () => {
  const t = useTranslations("NextDisplay");

  return (
    <div className="flex items-center justify-center ">
      <span
        className="text-sm font-light text-gray-700"
        style={{
          textShadow:
            "0 0 8px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.5)",
        }}
      >
        {t("next")}
      </span>
    </div>
  );
};

export default NextDisplay;
