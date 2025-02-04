"use client";
import React from "react";
import Image from "next/image";
import { getLocalStorageWithFallback } from "@/lib/localstorageUtils";
import { motion } from "framer-motion";

interface MotivationGoal {
  index: string;
  name: string;
}

type SparklingChristmasTreeProps = {
  delay?: number;
};

const SparklingChristmasTree: React.FC<SparklingChristmasTreeProps> = ({
  delay = 999999,
}) => {
  const motivationGoals: MotivationGoal[] = JSON.parse(
    getLocalStorageWithFallback("motivationGoal", "[]")
  );

  // TODO: Extract this into a util
  const colorMapping: Record<string, string> = {
    Family: "blue",
    "Finance/Money": "yellow",
    "Spirituality/Religion": "purple",
    Health: "green",
    "Relationships/Friends": "red",
    "Sharing/Contribution": "orange",
    "Career/Work": "pink",
    "Self-Development": "cyan",
  };

  const selectedColors = motivationGoals
    .map((goal) => colorMapping[goal.name] || "blue")
    .slice(0, 3);

  return (
    <div className="flex justify-center top-[85%] inset-x-0">
      {/* Sparkles */}

      <motion.div
        initial={{ opacity: 1, z: 0 }}
        animate={{
          opacity: 0,
          z: 0,
          transition: { duration: 1, delay: delay },
        }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center"
      >
        {selectedColors.map((color) => (
          <div
            className="w-[130%] h-[130%] absolute -bottom-[200px]"
            key={color}
          >
            <Image
              src={`/img/motivation/sparkle-${color}-1x.webp`}
              fill
              objectFit="contain"
              alt={`sparkle-${color}`}
            />
          </div>
        ))}
      </motion.div>

      {/* Christmas tree */}
      <div className="w-[130%] h-[130%] absolute -bottom-[100px]">
        <Image
          src="/img/motivation/christmas-tree.webp"
          fill
          objectFit="contain"
          alt="christmas-tree"
        />
      </div>
    </div>
  );
};

export default SparklingChristmasTree;
