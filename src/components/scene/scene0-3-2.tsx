'use client';
import { useRouter } from "next/navigation";
import Shadow from "../ui/Shadow";
import Background1 from "../../img/background/0.png";
import MessageBox from "../ui/messagebox";
import Tab from '../../img/icons/tab.png';
import HideTab from '../../img/icons/hidetab.png';

const Scene3_2 = () => {
    const router = useRouter();
    const HandleClick = ()=>{
        router.push("/en/0/0-4-1");
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
        <h1 className="font-kanit text-primaryblue text-[28px] mb-[10px] font-bold">สำหรับผู้ใช้งาน iOS</h1>
      </div>
      <div className="flex justify-start items-center h-full flex-col gap-5">
        <MessageBox message={
          <div className="flex flex-col text-primaryblue font-kanit font-light text-[18px] w-[292px] leading-6 space-y-3">
          <p>ขอแนะนำให้เปิดเว็บไซต์ผ่าน <span className="font-bold">Safari</span>
            <br/> และซ่อนแถบเครื่องมือเพื่อการแสดงผล
          ที่สมบูรณ์ที่สุด
            </p>
            
          </div>
        }
        BoxPadding="px-3 py-5"/>
        <div className="flex justify-start items-center h-full flex-col gap-5 relative">
            <img src={Tab.src}/>
            <div className=" absolute w-[27px] h-[27px] border-solid border-[2px] border-black rounded-[100%] top-[9px] left-[25px] "/>
            <img src={HideTab.src}/>
            <div className=" absolute w-[220px] h-[32px] border-solid border-[2px] border-black rounded-[12px] top-[160px] "/>
        </div>
      </div>
      
      <div className='flex justify-start items-start h-full flex-col mt-10'>
        <button onClick={HandleClick} className='font-kanit font-medium bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            ถัดไป
        </button>
        </div>
   

  </Shadow>

  </section>
  )
}

export default Scene3_2;