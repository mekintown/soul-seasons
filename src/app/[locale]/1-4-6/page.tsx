"use client"
import { Button } from "@/components/ui/button"
import { TextareaWithCounter } from "@/components/ui/textareaWithCounter"
import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"
// import { useTranslations } from "next-intl"
import React from "react"

const Scene5Page4: React.FC = () => {
  // const t = useTranslations("5-4")
  const [text, setText] = React.useState("")

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-1.webp')] flex-col items-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        {/* Screen text */}

        <motion.div
          className="absolute bottom-[64%] w-full"
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
          className="absolute bottom-[52%] right-[14%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          <p className="text-center text-sm text-black">name & คนสำคัญ</p>
        </motion.div>

        {/* Next button */}
        <motion.div
          className="absolute bottom-[18%]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ delay: 2, duration: 1.5 }}>
          <div>
            <Link href="/5-5">
              <Button />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Scene5Page4
