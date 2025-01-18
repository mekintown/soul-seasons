'use client'
import Background1 from '../../img/background/0.png';
import Bar from '../../components/ui/bar';
import Image from 'next/image';

import MessageBox from '../ui/messagebox';
const Scene5 = () => {
    return (
        <section className='w-full h-lvh flex flex-col pt-[150px]'>
            <Image
                src={Background1}
                alt="Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
        />
            <div className='flex justify-center items-center h-full flex-col font-kanit text-center gap-[20px] animate-dissolve_slow z-10 mt-[100px]'>
                <div className='flex justify-center items-center h-full flex-col gap-[20px]'>  
                    <MessageBox message={
                         <div className="flex flex-col text-center text-primaryblue font-kanit font-light text-[18px] w-[246px] leading-6 space-y-3">
                         <p>ก่อนจะเริ่มต้นการเดินทางครั้ง 
                            <br/>นี้ลองสำรวจจิตใจของคุณซักครู่
                             ตอนนี้คุณมี<span className='font-bold'>ความรู้สึกกดดัน </span>
                            <br/>หรือ<span className='font-bold'>เครียด</span>จากเรื่องราวต่างๆ แค่ไหน?
                           </p>
                         </div>
                    }
                    size='w-[278px] h-[132px]'
                    BoxPadding='px-5 py-5'
                    />
                    <div className='flex justify-center items-center h-full flex-col'>
                        <Bar/>  
                    </div>
                    
                    <div className='flex justify-start items-center h-full flex-col '>
                        <button  className='font-kanit font-medium bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve_slow  ease-out'>
                            ถัดไป
                        </button>
                    </div>
                </div>
               
                
               
            </div>
            

        </section>
    )
}

export default Scene5;  