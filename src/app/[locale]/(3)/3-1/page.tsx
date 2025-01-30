'use client'
import {useEffect, useState} from 'react'
import Background3 from "../../../../img/background/3-1.gif"
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
          
        }}>
            <div className='w-[279px] h-[75px] flex text-white justfy-center items-center font-light'>
                <p>
                    {importantPerson} : “ขอโทษนะ {username} ช่วงนี้ฉันไม่ว่างเลย คงไม่ได้ไปที่ต้นไม้ด้วยนะฤดูนี้”
                </p>
            </div>
        </section>
    )
}

export default Scene3