import { notFound } from "next/navigation";
import "../globals.css";
import Sounds from "@/components/ui/sounds";
import SoundToggle from "@/components/ui/sound-toggle";
import LangSwitch from "@/components/ui/language";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  const validLocales = ["en", "th"];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const fontClass = locale === "th" ? "font-th" : "font-en";

  return (
    <html lang={locale}>
      <body className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
        <Sounds />
        <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
          <LangSwitch />
          <SoundToggle />
        </div>
        <div className={`${fontClass} relative z-10`}>{children}</div>
      </body>
    </html>
  );
};

export default LocaleLayout;
