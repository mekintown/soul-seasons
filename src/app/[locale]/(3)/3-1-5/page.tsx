'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Check from '../../../../../public/icons/ei_check.png'
import Selected from '../../../../../public/icons/selected.png' 

const Scene3_1_5 = () => {
  const [username, setUsername] = useState<string>("")
  const [select, setSelect] = useState<number>(0)
  const [currentGoal, setCurrentGoal] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("3-1-5")

  // Create an array of translations from p1.s1 to p1.s10.
  const choice = Array.from({ length: 10 }, (_, i) => t(`p1.s${i + 1}`))

  // Handle clicking a choice (max 3 selections)
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedText = (e.currentTarget as HTMLDivElement).innerText;
  
    setCurrentGoal(prevGoals => {
      if (prevGoals.includes(selectedText)) {
        return prevGoals.filter(goal => goal !== selectedText);
      } else if (prevGoals.length < 3) {
        return [...prevGoals, selectedText];
      }
      return prevGoals;
    });
  };
  

  // Detect scrolling to update the selected choice
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const itemHeight = 45 ; // Each item is 50px tall
      const centeredIndex = Math.round(scrollTop / itemHeight); // Detect centered item
      // Prevent going out of bounds
      if ( centeredIndex < choice.length) {
        setSelect(centeredIndex);
      }
      containerRef.current.scrollTo({
        
      })
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("name") || "Guest"
      setUsername(storedName)
    }
  }, [])

  return (
    <section className="w-full justify-start items-center h-lvh flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex font-[18px] text-white justify-center items-start sm:mt-[185px] mt-[248px] font-light text-center"
      >
        <p className='text-[18px]'>
          {t("title.s1")}
          <br />{t("title.s2")}
          <br />{t("title.s3")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" w-full flex flex-col text-white px-2 justify-start items-center sm:mt-[20px] mt-[30px] font-light text-center"
      >
        {currentGoal.map((goal, index) => (
          <p key={index}>
            {index + 1}. {goal}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full w-full mt-[70px] flex justify-center items-start text-center"
      >
        {/* Scrollable container with smooth motion */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex h-[150px] w-[252px] flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white/25 rounded-lg"
        >
          {choice.map((choiceItem, index) => (
            <div
              key={index}
              tabIndex={0}
              className="flex flex-row justify-center items-center w-full h-[60px] snap-start cursor-pointer p-[10px]"
            >
              <img 
                src={currentGoal.includes(choiceItem) ? Selected.src : Check.src}
                alt="Checkmark" 
                className={`w-5 h-5 mr-2 ${currentGoal.includes(choiceItem)? "opacity-100" : "opacity-25"}`} 
              />
              <p 
className={`font-light text-white ${currentGoal.includes(choiceItem) ? "opacity-100" : "opacity-50"}`}
onClick={handleClick}
            
              >
                {choiceItem}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Scene3_1_5;
