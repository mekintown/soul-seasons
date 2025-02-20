'use client'
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useRouter } from "@/i18n/routing"
const Scene7_1_1 = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/7-1-2");
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 0 }}
    >
    <section className="w-full h-lvh flex flex-col items-center justify-center"
    onClick={handleClick}>
          <h1 className="relative left-[30px] top-[70px] text-center font-['TAN - MON CHERI'] font-normal italic text-[64px] leading-[90.25px] tracking-normal">
            Goal
          </h1>
          <div className="mt-10">
            <Textarea className="w-[170px] h-[100px] left-[50px] top-[30px]" />
          </div>
    </section>
    </motion.div>
    
  )
}

export default Scene7_1_1
