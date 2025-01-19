import { pick } from "lodash"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { PropsWithChildren } from "react"

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={pick(messages, ["1-4-6"])}>{children}</NextIntlClientProvider>
  )
}

export default Layout
