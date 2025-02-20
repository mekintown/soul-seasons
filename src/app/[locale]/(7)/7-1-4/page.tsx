'use client';
import { useCalculation } from '@/lib/calculation'
import {seasonImg} from "@/lib/enum";
import { useLocale, useTranslations } from 'next-intl';

const Scene7_1_4 = ()=>{
     
   const {seasons} = useCalculation()

   const t = useTranslations(`7-1-4`)
   const locale = useLocale()
    return(
        <section className="relative w-full h-lvh flex flex-col justify-center items-center">
            {seasons &&

            <div className=" mt-16 flex w-full justify-center items-center flex-col">
                <div className="w-full gap-6 h-auto flex justify-center items-center font-light text-primaryblue">
                    <div className=" text-[18px] font-bold h-auto flex flex-col items-center justify-center">  
                        <img src={seasonImg[seasons as keyof typeof seasonImg]["img"][0]} alt="7-1-4" className={`${seasonImg[seasons as keyof typeof seasonImg]["w"][0]} "h-auto"`}/>
                        <p>{t(`title.${seasons}.s1`)}</p>
                    </div>
                    <div className=" text-[14px] h-auto font-light text-primaryblue">
                        <p className='text-center'>
                            {t(`p1.${seasons}.s1`)}
                            <br /> {t(`p1.${seasons}.s2`)}
                            <br /> {t(`p1.${seasons}.s3`)}
                        </p>
                    </div>
                </div>
                <div className="w-full gap-5 h-auto flex justify-center items-center font-light text-primaryblue">
                    
                    <div className=" text-[14px] h-auto font-light text-primaryblue">
                        <p className='text-center'>
                            {t(`p2.${seasons}.s1`)}
                            <br /> {t(`p2.${seasons}.s2`)}
                            <br /> {t(`p2.${seasons}.s3`)}
                        </p>
                    </div>
                    <div className={`${
                        seasons === "Trophies and Triumphs" || 
                        seasons === "Life Canvas" || 
                        seasons === "Refilled Heart" || 
                        seasons === "Ribbons and Paper Boxes" ?
                        "text-[18px] font-bold  h-auto flex flex-col items-center justify-center"
                        :
                         "text-[18px] font-bold h-auto flex items-center justify-center"
                    }`}>  
                        <img src={seasonImg[seasons as keyof typeof seasonImg]["img"][1]} alt="7-1-4" className={`${
                        seasons === "Trophies and Triumphs" || 
                        seasons === "Life Canvas" || 
                        seasons === "Refilled Heart" || 
                        seasons === "Ribbons and Paper Boxes" ? 
                        `${seasonImg[seasons as keyof typeof seasonImg]["w"][1]} h-auto`
                        :
                         "relative w-[75px] h-auto bottom-6"  }`}
                        />
                        <p>{t(`title.${seasons}.s2`)}</p>
                    </div>
                </div>
                <div className='mt-6 w-full h-auto flex justify-center items-center font-light text-primaryblue '>
                    <p className="text-[14px] text-center font-light text-primaryblue">
                        {t(`p3.${seasons}.s1`)}
                        <br /> {t(`p3.${seasons}.s2`)}
                        <br /> {t(`p3.${seasons}.s3`)}
                        <br /> {t(`p3.${seasons}.s4`)}
                        <br /> {t(`p3.${seasons}.s5`)}
                        <br /> {t(`p3.${seasons}.s6`)}
                        <br /> {t(`p3.${seasons}.s7`)}
                        <br /> {t(`p3.${seasons}.s8`)}
                        {
                            seasons === "Life Canvas" && locale === "en" ? (
                                <>
                                    <br />{t(`p3.${seasons}.s9`)}
                                    <br /> {t(`p3.${seasons}.s10`)}
                                    <br /> {t(`p3.${seasons}.s11`)}
                                </>
                            ) : null
                        }
                        
                        </p>
                </div>
             </div>
             
        }
            
        </section>
    )
}
export default Scene7_1_4
