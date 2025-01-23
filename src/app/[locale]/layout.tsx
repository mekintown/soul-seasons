import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Sounds from "@/components/sounds";
import SoundToggle from "@/components/sound-toggle";
import localFont from "next/font/local";
// public/fonts/Cloud-Soft-Bold.ttf public/fonts/Cloud-Soft-Light.ttf
const cloud = localFont({
  src: [
    {
      path: "./fonts/Cloud-Soft-Bold.ttf",
      weight: "bold",
    },
    {
      path: "./fonts/Cloud-Soft-Light.ttf",
      weight: "normal",
    },
  ],
  variable: "--cloud",
});
const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cloud.variable}`}>
      <body className="relative mx-auto min-h-screen w-full max-w-[393px] overflow-x-hidden overscroll-none">
        <NextIntlClientProvider messages={messages}>
          <Sounds />
          <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
            <SoundToggle />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
