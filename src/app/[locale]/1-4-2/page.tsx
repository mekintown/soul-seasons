"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React from "react"

const Scene1_4Page2: React.FC = () => {
  const t = useTranslations("1-4-2")
  // get name from localstorage
  const name = typeof window !== "undefined" ? localStorage.getItem("name") : null
  const importantPerson =
    typeof window !== "undefined" ? localStorage.getItem("importantPerson") : null

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-2.webp')] flex-col items-center bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center">
        {/* Screen text */}

        <motion.div
          className="absolute bottom-[49%] right-[19%] w-60 h-10 flex items-center justify-center text-center text-lg text-black"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          {name ?? t("name")} &<br /> {importantPerson ?? t("importantPerson")}
        </motion.div>
      </div>
    </div>
  )
}

export default Scene1_4Page2
