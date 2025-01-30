"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import NextDisplay from "@/components/ui/nextDisplay";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const Page1_2_4 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center relative">
      <Link href="1-2-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 4 },
          }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center absolute top-[75%] inset-x-0"
        >
          <NextDisplay />
        </motion.div>

        <DelayedFullScreenLink href="1-2-5" delay={2000} />
      </Link>
    </div>
  );
};

export default Page1_2_4;
