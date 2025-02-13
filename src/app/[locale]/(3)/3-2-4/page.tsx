"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page3_2_4 = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/3-2-5");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return <div>Redirecting...</div>; // Ensure the component renders valid JSX
};

export default Page3_2_4;
