"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";

const interFont = Inter({
  weight: "600",
  subsets: ["greek"],
});

const LangToggle = () => {
  const locale = useLocale();
  const path = usePathname();
  const isEnglish = locale === "en";
  const targetLang = isEnglish ? "th" : "en";

  return (
    <Link href={path} locale={targetLang}>
      <div
        className={cn(
          "relative flex items-center justify-between w-[69px] h-[39px] rounded-[16px] bg-[#202A44] p-2 text-white hover:bg-[#2d3b5e] transition-colors",
          interFont.className
        )}
        role="button"
      >
        <div
          className={cn(
            "absolute w-[29px] h-[29px] rounded-full bg-white transition-transform",
            isEnglish ? "translate-x-[28px]" : "translate-x-[-4px]"
          )}
        />
        <div
          className={cn(
            "z-50 text-sm font-semibold",
            isEnglish ? "text-white" : "text-[#202A44]"
          )}
        >
          TH
        </div>
        <div
          className={cn(
            "z-50 text-sm font-semibold",
            isEnglish ? "text-[#202A44]" : "text-white"
          )}
        >
          EN
        </div>
      </div>
    </Link>
  );
};

export default LangToggle;
