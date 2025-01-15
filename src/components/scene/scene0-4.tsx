import Background1 from '../../img/background/0.png';
import MessageBox from '../ui/messagebox';
const Scene4 = ()=>{
    return(
        <section className='w-full h-lvh flex flex-col pt-[150px]'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <div className='flex justify-end items-center h-full flex-col '>
            

           </div> */}
           <div className='flex justify-end items-center h-full flex-col'>
            
            <MessageBox 
            message={<p className='text-indigo font-kanit font-light text-[18px] w-[227px] leading-6'>ยินดีต้อนรับสู่ 
            <span className='font-semibold'>Soul Seasons</span> 
            <br></br> Interactive website <br></br> ที่จะ
            <span className='font-semibold'>พาคุณกลับไปค้นหาตัวตนที่อาจหล่นหายไประหว่างทาง
                </span>ผ่านเรื่องราวเหนือจินตนาการ ท่องไปในฤดูกาลที่ผันเปลี่ยนของชีวิต
            <span className='font-semibold'>เพื่อนำตัวคุณกลับมาอีกครั้ง</span></p>}
            size='w-[265px] h-[207px]'
            />

           </div>

        <div className='flex justify-center items-center h-full flex-col'>
        <button className='font-kanit font-medium bg-indigo w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out animate'>
            ถัดไป
        </button>
        </div>
       
    </section>

    )
}

export default Scene4;