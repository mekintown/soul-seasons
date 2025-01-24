'use client';

import Background2 from '../../../img/background/2.png';
import DarkBlueCenter from '../../../img/background/darkBlueCenter.png';
import BlueCenter from '../../../img/background/blueCenter.png';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

const Scene2 = () => {
    const router = useRouter();
    const locale = useLocale();
    const backgrounds = [DarkBlueCenter, BlueCenter, Background2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === backgrounds.length - 1) {
                clearInterval(interval); // Stop interval at the last background
                return;
            }

            setIsFading(true); // Trigger fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next index
                setIsFading(false); // Trigger fade-in
            }, 500); // Half the transition duration
        }, 1000); // Change background every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex, backgrounds.length]);

    const handleClick = () => {
        router.push(`/${locale}/2/2-1`);
    };

    return (
        <section
            onClick={currentIndex === backgrounds.length - 1 ? handleClick : undefined}
            className={`w-full h-lvh flex flex-col transition-opacity duration-500 ${
                isFading ? 'opacity-80' : 'opacity-100'
            }`}
            style={{
                backgroundImage: `url(${backgrounds[currentIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    );
};

export default Scene2;
