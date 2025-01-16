'use client';
import { useRouter } from "next/navigation";
import Shadow from "../ui/Shadow";
import Background1 from "../../img/background/0.png";
import MessageBox from "../ui/messagebox";

const Scene3_1 = () => {
    const router = useRouter();
    const HandleClick = ()=>{
        router.push("/en/0/0-3-2");
    }
  return(
    <section
    className="w-full justify-center h-lvh flex flex-col"
    style={{
      backgroundImage: `url(${Background1.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    <Shadow>
      
    <div className="flex justify-end h-full flex-col">
        <h1 className="font-kanit text-indigo text-[28px] mb-[10px] font-bold">คำแนะนำสำหรับการเล่น</h1>
      </div>
      <div className="flex justify-start items-center h-full flex-col">
        <MessageBox message={
          <div className="flex flex-col text-indigo font-kanit font-light text-[18px] w-[292px] leading-6 space-y-3">
          <p>เว็บไซต์นี้ใช้เวลาในการเล่นประมาณ <span className="font-bold w-full"> 7-12 นาที </span>
            <br/>เพื่อให้ได้ประสบการณ์ที่ดีที่สุด 
            <br/>ขอแนะนำให้ผู้เล่นอยู่ในสถานที่ที่สงบ
            <br/>ปิดเสียงประกอบเพื่อเพิ่มอรรถรส
            <br/>และ<span className="font-bold w-full">ปล่อยหัวใจไปตามความรู้สึก</span>
            </p>
            
          </div>
        }
        BoxPadding="px-5 py-5"/>
      </div>
      <div className='flex justify-center items-center h-full flex-col'>
        <button onClick={HandleClick} className='font-kanit font-medium bg-indigo w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            ถัดไป
        </button>
        </div>
   

  </Shadow>

  </section>
  )
}

export default Scene3_1;