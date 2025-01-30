<<<<<<< HEAD
"use client";
import { Button } from "@/components/ui/button";
import { TextareaWithCounter } from "@/components/ui/textareaWithCounter";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import React from "react";

const Scene5Page4: React.FC = () => {
  const [text, setText] = React.useState("");

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-1.webp')] flex-col items-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="absolute bottom-[64%] w-full"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TextareaWithCounter
            onChange={(e) => setText(e.target.value)}
            value={text}
            maxCount={80}
            className="mx-12 h-[214px]"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-[52%] right-[14%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-center text-sm text-black">name & คนสำคัญ</p>
        </motion.div>

        <motion.div
          className="absolute bottom-[18%]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <div>
            <Link href="/5-5">
              <Button />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Scene5Page4;
=======
"use client"
import NextButton from "@/components/ui/NextButton"
import { TextareaWithCounter } from "@/components/ui/textareaWithCounter"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React from "react"

const Scene1_4Page6: React.FC = () => {
  const t = useTranslations("1-4-6")
  const [text, setText] = React.useState("")

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[46%] right-[16%] flex items-center justify-center text-[64px] font-normal blur-sm"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        Goals!
      </motion.div>
      <motion.div
        className="absolute bottom-[60%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <div className="flex h-[135px] w-full">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow">
              {t("whatIsAGoal")}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <TextareaWithCounter
          onChange={(e) => setText(e.target.value)}
          value={text}
          maxCount={80}
          className="mx-12 h-[214px]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[9%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <div onClick={() => localStorage.setItem("goal", text)}>
          <NextButton url="1-4-8" disabled={text.length === 0} />
        </div>
      </motion.div>
    </div>
  )
}

export default Scene1_4Page6
>>>>>>> origin/main
