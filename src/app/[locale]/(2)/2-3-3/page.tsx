"use client";
import SparklingChristmasTree from "@/components/ui/SparklingChristmasTree";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

const Page2_3_3 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("2-3-5");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <SparklingChristmasTree delay={2} />
    </div>
  );
};

export default Page2_3_3;
