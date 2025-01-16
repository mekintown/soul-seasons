import Background1 from '../../img/background/0.png';
import Bar from '../../components/ui/bar';
const Scene5 = () => {
    return (
        <section className='w-full h-lvh flex flex-col pt-[150px]'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex justify-center items-center h-full flex-col font-kanit text-center gap-[20px] mt-[200px] animate-dissolve_slow'>
                <Bar/>  
            </div>
            

        </section>
    )
}

export default Scene5;  