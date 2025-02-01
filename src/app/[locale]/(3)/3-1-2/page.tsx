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
                className=' h-full flex text-white justfy-center items-start mt-[248px] font-light text-center'
                >
                    
                <p className='w-[279px] h-auto'>
                    {importantPerson} : “ขอโทษนะ {username} 
                    <br/>
                    ช่วงนี้ฉันไม่ว่างเลย
                    <br/>
                     คงไม่ได้ไปที่ต้นไม้ด้วยนะฤดูนี้”
                </p>
          
                </motion.div>
           
        </section>
    )
}

export default Scene3