"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import router from "next/router";

const Two2 = () => {
  const t = useTranslations("2-1");
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const locale = useLocale();

  // TODO: Fix this. use my Next button
  const HandleClick = () => {
    if (clicks === 3) {
      router.push(`${locale}/2`);
    }
    handleClick();
  };
  return (
    <section className="w-full h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex text-white justify-start mt-[200px] items-center w-full flex-col text-center h-[100px]"
      >
        <p>
          {t("p1.s1")}
          <br />
          {t("p1.s2")}
          <br />
          {t("p1.s3")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <p className="flex text-white justify-start w-full h-full flex-col text-center mt-5">
          {`${clicks}/3`}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="flex text-white font-light justify-start mt-[200px] items-center w-full h-full flex-col text-center"
      >
        <div className="flex justify-center items-center h-full w-full ">
          <Image
            src={"/icons/pot/potOrange.png"}
            alt="Orange Pot"
            width={100}
            height={200}
          />
          <Image
            src={"/icons/pot/potPurple.png"}
            alt="Purple Pot"
            width={100}
            height={200}
          />
          <Image
            src={"/icons/pot/potRed.png"}
            alt="Red Pot"
            width={100}
            height={100}
          />
          <Image
            src={"/icons/pot/potGreen.png"}
            alt="Green Pot"
            width={100}
            height={100}
          />
          <Image
            src={"/icons/pot/potBlue.png"}
            alt="Blue Pot"
            width={100}
            height={100}
          />
          <Image
            src={"/icons/pot/potIndigo.png"}
            alt="Indigo Pot"
            width={100}
            height={100}
          />
          <Image
            src={"/icons/pot/potPink.png"}
            alt="Pink Pot"
            width={100}
            height={100}
          />
          <Image
            src={"/icons/pot/potYellow.png"}
            alt="Yellow Pot"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-center items-start h-full mt-10">
          <button
            onClick={HandleClick}
            className=" bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve_slow  ease-out"
          >
            {t("btn")}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Two2;
