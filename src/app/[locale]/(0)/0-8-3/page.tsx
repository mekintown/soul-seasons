"use client";
import Image from "next/image";

const Page0_8_3 = () => {
  return (
    <div
      className="flex justify-center items-center relative w-full min-h-screen"
      style={{ cursor: "pointer" }}
    >
      {/* Background tree image */}
      <Image
        src="/0-8/0-8-tree-1.webp"
        alt="Tree"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
    </div>
  );
};

export default Page0_8_3;
