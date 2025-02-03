'use client'
import {useEffect, useState} from 'react'
import Background3 from "../../../../img/background/3-1.gif"
import { motion } from 'framer-motion';
const Scene3 = ()=>{
    const [username, setUsername] = useState("");
    const importantPerson = 'importantPerson'
    useEffect(() => {
        if (typeof window !== "undefined") {
          setUsername(localStorage.getItem("name") || "Guest");
        }
      }, []);
    return(
        <section className="w-full justify-start items-center h-lvh flex flex-col" 
        style={{
            backgroundImage: `url(${Background3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          
        }}
        >
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' h-full flex text-white justfy-center items-start mt-[720px] font-light text-center '
                >
                    
                <p className='w-[279px] h-auto'>
                  {username} : “แต่ถึงจะเหนื่อย 
                  <br/>
                  มามากขนาดนี้...ก็ยังไม่ไปถึงเป้าหมายซักที
                <br/>
                ทำไมกันนะ...”                
                </p>
          
                </motion.div>
           
        </section>
    )
}

export default Scene3