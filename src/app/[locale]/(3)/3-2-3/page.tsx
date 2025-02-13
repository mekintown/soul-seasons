"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useBackgroundStore } from "@/store/background";

const Page3_2_3 = () => {
  const { setBackground } = useBackgroundStore();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    const id = setTimeout(() => {
      setBackground("/background/3-2-11_3.gif"); // Change background after 2 seconds
    }, 2000);

    setIntervalId(id);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearTimeout(intervalId);
      setIntervalId(null);
    }
    setBackground("/background/3-2-11_1.gif"); // Reset background when released
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="absolute bottom-[35%] right-[33%] w-16 h-16"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <button
          className="w-full h-full rounded-full opacity-50 bg-[#D9D9D9]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Prevents issues when mouse leaves
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_3;
