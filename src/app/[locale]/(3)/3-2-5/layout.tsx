import BaseLayout from "@/components/BaseLayout";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const Layout = async ({ children, params }: LayoutProps) => {
  const resolvedParams = await params; // Ensure params is resolved before use
  const { locale } = resolvedParams;

  return (
    <BaseLayout locale={locale} messageScope="3-2-4">
      {children}
    </BaseLayout>
  );
};

export default Layout;
