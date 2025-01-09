import React, { ReactNode } from "react";
import { RenderOptions, render as rtlRender } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

interface CustomRenderProps {
  locale?: string;
  messages?: Record<string, any>;
  children: ReactNode;
}

const CustomRender = ({
  locale = "en",
  messages = en,
  children,
}: CustomRenderProps) => (
  <NextIntlClientProvider locale={locale} messages={messages}>
    {children}
  </NextIntlClientProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries"> & CustomRenderProps
) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <CustomRender {...options}>{children}</CustomRender>
    ),
    ...options,
  });
};

export { customRender as render };
