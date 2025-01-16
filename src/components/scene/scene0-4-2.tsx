'use client';
import Background1 from '../../img/background/0.png';
import NameInput from '../ui/NameInput';
import { useRouter } from 'next/navigation';
const Scene4_2 = ()=>{
    const router = useRouter();
    const HandleClick = ()=>{
        router.push('/en/0/0-4-3');
    }   
    setTimeout(()=>{
        router.push('/en/0/0-4-3');
    },1000)
    return(
        <section className='w-full h-lvh flex flex-col pt-[150px]'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex justify-end items-center h-full flex-col font-kanit text-center gap-[20px] mt-[200px] animate-dissolve duration-300 ease-out'> 
                 <div className='flex justify-end items-center h-full flex-col  '>
                    <h1 className='font-extralight text-white text-[28px]'>อยากให้เราเรียกคุณว่าอะไร</h1> {/* change to weith 300 once get cloud font*/}
                </div>
                <NameInput/>
            </div>
            <div className='flex justify-start items-center h-full flex-col mt-[100px]'>
                    <button className='opacity-70 font-kanit font-medium bg-[#8E8E93] w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out'>
                        ถัดไป
                    </button>
            </div>
    </section>

    )
}

export default Scene4_2;

