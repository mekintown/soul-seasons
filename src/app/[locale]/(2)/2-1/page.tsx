'use client';
import { useTranslations } from "next-intl";
import Background2Blur from '../../../../img/background/blur2.png';
import ChristmasTree from '../../../../img/background/christmas tree  1.png';
import { motion } from 'framer-motion';
import potOrange from '../../../../img/icons/pot/potOrange.png';
import potPurple from '../../../../img/icons/pot/potPurple.png';
import potGreen from '../../../../img/icons/pot/potGreen.png';
import potRed from '../../../../img/icons/pot/potRed.png';
import potPink from '../../../../img/icons/pot/potPink.png';
import potYellow from '../../../../img/icons/pot/potYellow.png';
import potBlue from '../../../../img/icons/pot/potBlue.png';
import potIndigo from '../../../../img/icons/pot/potIndigo.png';
import potIndigoGlow from '../../../../img/icons/potGlow/indigoGlow.png';
import potPurpleGlow from '../../../../img/icons/potGlow/purpleGlow.png';
import potYellowGlow from '../../../../img/icons/potGlow/yellowGlow.png';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Two2 = () => {
    const t = useTranslations('two2');
    const [clicks, setClicks] = useState(0);
    const [glowingPots, setGlowingPots] = useState<Array<{ index: number; name: string }>>([]); // Store glowing pots with name
    const locale = useLocale();
    const router = useRouter();
    
    useEffect(()=>{  
            localStorage.setItem('motivationGoal', JSON.stringify(glowingPots));
         },[glowingPots]);

    const handleClick = (index: number, name: string) => {
        setGlowingPots((prev) => {
            const existingIndex = prev.findIndex((pot) => pot.index === index);
            if (existingIndex >= 0) {
                // If pot is already glowing, remove it
                setClicks(() => clicks - 1);
                return prev.filter((_, i) => i !== existingIndex);
            } else {
                // If pot is not glowing, add it
                if (clicks < 3) {
                    setClicks(() => clicks + 1);
                    return [...prev, { index, name }];
                }
            }
            return prev;
        });
    };

    const potImagesLeft = [
        { src: potPink.src, label: "Career/Work", pos: "", glow: "" },
        { src: potIndigo.src, label: "Family", pos: "right-[70px]", glow: potIndigoGlow.src },
        { src: potRed.src, label: "Relationship/Friends", pos: "right-[70px]", glow: "" },
        { src: potOrange.src, label: "Sharing/Contributions", pos: "", glow: "" },
    ];

    const potImagesRight = [
        { src: potBlue.src, label: "Self-Development", pos: "", glow: "" },
        { src: potYellow.src, label: "Finance/Money", pos: "left-[70px]", glow: potYellowGlow.src },
        { src: potGreen.src, label: "Health", pos: "left-[70px]", glow: "" },
        { src: potPurple.src, label: "Spiritual", pos: "", glow: potPurpleGlow.src },
    ];

    return (
        <motion.div
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                >
                     <section
            className="relative w-full h-lvh flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${Background2Blur.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Christmas Tree */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                className="absolute bottom-[40px] w-full h-full flex justify-center items-center">
                    <img src={ChristmasTree.src} alt="Christmas Tree"/>
              </motion.div>

            {/* Intro Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="flex text-white flex-col justify-center items-center w-full mt-[120px] text-center"
            >
                <p>
                    {t("p1.s1")}
                    <br />
                    {t("p1.s2")}
                    <br />
                    {t("p1.s3")}
                </p>
            </motion.div>

            {/* Click Counter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="mt-2 text-white text-center"
            >
                <p>{`${clicks}/3`}</p>
            </motion.div>

            {/* Pot Layout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative flex justify-center h-full w-full mx-auto gap-3"
            >
                {/* Left Column */}
                <div className="flex flex-col items-center">
                    {potImagesLeft.map((pot, index) => (
                        <div
                            key={index}
                            className={`relative ${pot.pos} flex flex-col h-[120px] items-center gap-5`}
                            onClick={() => handleClick(index, pot.label)}
                        >
                            <img
                                src={
                                    glowingPots.some((glow) => glow.index === index) && pot.glow
                                        ? pot.glow
                                        : pot.src
                                }
                                alt={`${pot.label} Pot`}
                                className="w-auto h-[180px]"
                            />
                            <p className="mt-2 relative bottom-[90px] font-light text-xs text-white text-center">
                                {pot.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-center">
                    {potImagesRight.map((pot, index) => (
                        <div
                            key={index + potImagesLeft.length}
                            className={`relative ${pot.pos} flex flex-col h-[120px] items-center gap-5`}
                            onClick={() => handleClick(index + potImagesLeft.length, pot.label)}
                        >
                            <img
                                src={
                                    glowingPots.some((glow) => glow.index === index + potImagesLeft.length) &&
                                    pot.glow
                                        ? pot.glow
                                        : pot.src
                                }
                                alt={`${pot.label} Pot`}
                                className="w-auto h-[180px]"
                            />
                            <p className="mt-2 relative bottom-[90px] text-xs text-white text-center">
                                {pot.label}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
            

            {/* Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="relative flex justify-center items-center h-[300px] w-[300px] mx-auto"
            >
                <div className="flex justify-center w-full">
                    <button
                        className={`font-medium ${clicks === 3 ? 'bg-primaryblue': 'bg-primaryGrey'} w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold`}
                        onClick={() => clicks === 3 && router.push(`/${locale}/2/2-3`)}
                    >
                        {t("btn")}
                    </button>
                </div>
            </motion.div>
        </section>
                </motion.div>
       
    );
};

export default Two2;
