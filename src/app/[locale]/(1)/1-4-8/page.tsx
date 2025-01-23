"use client"
import { motion } from "framer-motion"
import React from "react"

const Scene1_4Page8: React.FC = () => {
  const goal = typeof window !== "undefined" ? localStorage.getItem("goal") : null

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-8.webp')] flex-col items-center bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="absolute bottom-[46%] right-[16%] flex items-center justify-center text-[64px] font-normal"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          Goals!
        </motion.div>
        <motion.div
          className="absolute top-[57%] right-[24%] w-32 h-36 text-start text-[15px] font-light"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          {goal}
        </motion.div>
      </div>
    </div>
  )
}

export default Scene1_4Page8
