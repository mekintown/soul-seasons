import Background1 from '../../img/background/0.png';
import MessageBox from '../ui/messagebox';
const Scene2 = ()=>{
    return(
        <section className='w-full h-lvh flex flex-col'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex justify-end items-center h-full flex-col'>
                <h1>คำเตือน</h1>

               </div>
               <div className='flex justify-start items-center h-full flex-col'>
                <MessageBox message="ยินดีต้อนรับสู่ Soul Seasons Interactive website ที่จะพาคุณกลับไปค้นหาตัวตนที่อาจหล่นหายไประหว่างทาง ผ่านเรื่องราวเหนือจินตนาการ ท่องไปในฤดูกาลที่ผันเปลี่ยนของชีวิต เพื่อนำตัวคุณกลับมาอีกครั้ง"/>

               </div>

            <div className='flex justify-center items-center h-full flex-col'>
            <button className='bg-indigo w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold'>
                รับทราบ
            </button>
            </div>
           
        </section>

    )
}

export default Scene2;