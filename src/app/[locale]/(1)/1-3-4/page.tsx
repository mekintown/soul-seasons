"use client";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page1_3_4 = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("1-3-5");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative"></div>
  );
};

export default Page1_3_4;
