import { pick } from "lodash"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { PropsWithChildren } from "react"

const Layout = ({
  children,
  params: { locale },
}: PropsWithChildren<{
  params: {
    locale: string
  }
}>) => {
  setRequestLocale(locale)
  const messages = useMessages()

  return (
    <NextIntlClientProvider messages={pick(messages, ["1-4-1", "NextButton"])}>
      {children}
    </NextIntlClientProvider>
  )
}

export default Layout
