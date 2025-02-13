'use client'
import { motion } from 'framer-motion';
import { useRouter } from "@/i18n/routing";
import { useEffect } from 'react';
const Scene3_1_1 = ()=>{
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("3-1-2");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
    return(
        <section className="w-full justify-start items-center h-lvh flex flex-col" 
        style={{
          
        }}
        >
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' h-full flex text-white justfy-center items-start mt-[248px] font-light text-center'
                >
          
                </motion.div>
           
        </section>
    )
}

export default Scene3_1_1