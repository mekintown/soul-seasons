"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useBackgroundStore } from "@/store/background";

const Page3_2_3 = () => {
  const { setBackground } = useBackgroundStore();
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setBackground("/background/3-2-11_3.gif"); // Change background immediately on press
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <motion.div
        className="absolute bottom-[39%] right-[4%] w-16 h-16"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {/* Press Button - Changes Background Instantly */}
        <div
          onClick={handlePress}
          className="w-full h-full rounded-full opacity-50 bg-[#D9D9D9] cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Page3_2_3;
