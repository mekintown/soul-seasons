"use client";
import { useTranslations } from "next-intl";

const NextDisplay = () => {
  const t = useTranslations("base");

  return (
    <div
      className="flex items-center justify-center w-[150px] h-[50px] 
                 rounded-[100 px] 
                 bg-[radial-gradient(ellipse_at_center,_white_0%,_rgba(255,255,255,0)_70%)] 
                 opacity-70"
    >
      <span
        className="text-sm font-light text-gray-700"
        style={{
          textShadow:
            "0 0 8px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.5)",
        }}
      >
        {t("tap")}
      </span>
    </div>
  );
};

export default NextDisplay;
