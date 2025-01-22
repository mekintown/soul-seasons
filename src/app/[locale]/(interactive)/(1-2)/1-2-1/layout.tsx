import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, ["1-2-1", "NextDisplay"])}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;
