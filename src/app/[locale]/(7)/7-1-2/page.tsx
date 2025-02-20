'use client';
import { useCalculation } from "@/lib/calculation";
import { useTranslations } from "next-intl";
import { MarbleImg } from "@/lib/enum";


const Scene7_1_2 = ()=>{
    const marbleImg = { 
        "Inspiring flame": MarbleImg.Marble1, 
         "Trophies and Triumphs": MarbleImg.Marble2, 
         "Heart & Home":MarbleImg.Marble3, 
         "Life Canvas":MarbleImg.Marble4, 
         "Refilled Heart":MarbleImg.Marble5, 
         "Ribbons and Paper Boxes":MarbleImg.Marble6
        };

    const t = useTranslations(`7-1-2`)
    const {seasons} = useCalculation();

    return(
        <section className="w-full justify-center items-center h-lvh flex flex-col ">
            {seasons && 
            <div className=" pl-10 mt-24 flex flex-col w-full text-white justfy-center items-center  font-light text-center">
            <img src={marbleImg[seasons as keyof typeof marbleImg]} alt="7-1-2" className="w-[148px] h-auto"/>
            <p className="font-bold text-primaryblue text-[18px] mb-1">
                {t(`title.${seasons}.s1`)}
                <br/>
                {t(`title.${seasons}.s2`)}
            </p>
            <p className="text-primaryblue font-light text-[14px]">
           {t(`p1.${seasons}.s1`)}
            <br/> {t(`p1.${seasons}.s2`)}
            <br/> {t(`p1.${seasons}.s3`)} 
            <br/>{t(`p1.${seasons}.s4`)} 
            <br/>{t(`p1.${seasons}.s5`)}  
            <br/>{t(`p1.${seasons}.s6`)} 
            <br />{t(`p1.${seasons}.s7`)}
            <br />{t(`p1.${seasons}.s8`)}
            <br />{t(`p1.${seasons}.s9`)}
            <br />{t(`p1.${seasons}.s10`)}
            <br />{t(`p1.${seasons}.s11`)}
            </p>
    
        </div>
            }
            
            
        </section>
    )
}

export default Scene7_1_2