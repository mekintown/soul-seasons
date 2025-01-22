"use client";

import { motion } from "framer-motion";
import { useState, CSSProperties } from "react";

const Page = () => {
  const texts = [
    // 1
    {
      text: (
        <>
          <span style={{ fontFamily: "Kanit, sans-serif", color: "#182649" }}>
            คุณ : "เรียบร้อย เสร็จสักที"
          </span>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 2
    {
      text: (
        <>
          <span className="font-th text-[#182649]">
            คุณ : "เรียบร้อย เสร็จสักที"
          </span>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "เหนื่อยชะมัด แต่ก็สนุกมากเลย"
            </span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 3
    {
      text: (
        <>
          <span className="font-th text-[#182649]">
            คุณ : "เรียบร้อย เสร็จสักที"
          </span>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "เหนื่อยชะมัด แต่ก็สนุกมากเลย"
            </span>
          </div>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "ขอบคุณนะ ที่มาชวนปลูกต้นไม้ด้วยกัน"
            </span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 4
    {
      text: (
        <>
          <span className="font-th text-[#182649]">
            คุณ : "อื้ม หวังว่ามันจะโตมาแข็งแรงนะ"
          </span>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "เหนื่อยชะมัด แต่ก็สนุกมากเลย"
            </span>
          </div>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "ขอบคุณนะ ที่มาชวนปลูกต้นไม้ด้วยกัน"
            </span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 5
    {
      text: (
        <>
          <span className="font-th text-[#182649]">
            คุณ : "อื้ม หวังว่ามันจะโตมาแข็งแรงนะ"
          </span>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "ไว้เรากลับมาดูแลมันกันบ่อยๆเถอะ จะได้เจอกันด้วย"
            </span>
          </div>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "ขอบคุณนะ ที่มาชวนปลูกต้นไม้ด้วยกัน"
            </span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 6
    {
      text: (
        <>
          <span className="font-th text-[#182649]">
            คุณ : "อื้ม หวังว่ามันจะโตมาแข็งแรงนะ"
          </span>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">
              ... : "ไว้เรากลับมาดูแลมันกันบ่อยๆเถอะ จะได้เจอกันด้วย"
            </span>
          </div>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">คุณ : "ก็ดี งั้นไว้เจอกัน"</span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
    // 7
    {
      text: (
        <>
          <div className="mt-12">
            <span className="text-[#4A4A4A]">คุณ : "ก็ดี งั้นไว้เจอกัน"</span>
          </div>
        </>
      ),
      style: {
        fontSize: "18px",
        marginTop: 30,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleScreenClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      onClick={handleScreenClick}
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
