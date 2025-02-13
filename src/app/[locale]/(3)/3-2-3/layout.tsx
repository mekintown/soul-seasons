import BaseLayout from "@/components/BaseLayout";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: { locale: string }; // Ensure params is NOT a Promise
}

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <BaseLayout locale={params.locale} messageScope="3-2-3">
      {children}
    </BaseLayout>
  );
};

export default Layout;
