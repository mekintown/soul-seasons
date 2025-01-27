"use client";

import { motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";
import { useRouter } from "@/i18n/routing";

const Page = () => {
  const router = useRouter();

  const texts = [
    {
      text: (
        <>
          <div className="mt-12">
            <span className="font-th text-[#182649] opacity-40">
              คุณ : "ก็ดี งั้นไว้เจอกัน"
            </span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 130,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentTextIndex + 1;

      if (nextIndex === texts.length) {
        router.push("/0-8/3");
        clearInterval(interval);
        return;
      }
      setCurrentTextIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length, router]);

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        style={{
          ...texts[currentTextIndex].style,
          position: "relative",
        }}
      >
        {texts[currentTextIndex].text}
      </motion.div>
    </div>
  );
};

export default Page;
