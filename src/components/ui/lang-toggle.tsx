"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

const LangToggle = () => {
  const locale = useLocale();
  const path = usePathname();
  const targetLang = locale === "en" ? "th" : "en";

  return (
    <Link href={path} locale={targetLang}>
      <div
        className={cn(
          "rounded-3xl bg-primaryblue flex w-[69px] h-[37px] justify-center items-center gap-2"
        )}
        role="button"
      >
        {locale === "th" ? (
          <div className="rounded-full bg-white flex h-[29px] w-[29px] justify-center items-center cursor-pointer">
            <h1>TH</h1>
          </div>
        ) : (
          <h1 className="text-white cursor-pointer">TH</h1>
        )}

        {locale === "en" ? (
          <div className="rounded-full bg-white flex h-[29px] w-[29px] justify-center items-center cursor-pointer">
            <h1>EN</h1>
          </div>
        ) : (
          <h1 className="text-white cursor-pointer">EN</h1>
        )}
      </div>
    </Link>
  );
};

export default LangToggle;
