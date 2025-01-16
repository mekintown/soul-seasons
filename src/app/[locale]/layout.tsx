import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"
import Sounds from "@/components/sounds"
import SoundToggle from "@/components/sound-toggle"
import LangSwitch from "@/components/ui/language"

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>

      <body className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

        <NextIntlClientProvider messages={messages}>
          
        
          <Sounds />
          <div className="absolute right-8 top-12 z-50 flex w-full items-center justify-end">
          <LangSwitch/>
          <SoundToggle />
          </div >
          <div className="relative z-10">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
