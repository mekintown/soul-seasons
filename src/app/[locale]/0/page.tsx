'use client'
import { useLocale } from 'next-intl';
import Background1 from '../../../img/background/0.png';
import { useRouter } from "next/navigation"; // Use next/navigation in App Router

const Scene0 = () => {
    const router = useRouter();
    const locale = useLocale();

    const HandleClick = () => { 
        router.push(`/${locale}/0/0-1`); 
    };

    return (
        <section onClick={HandleClick} className='w-full h-lvh flex flex-col'style={{ backgroundImage: `url(${Background1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
    );
};

export default Scene0;
