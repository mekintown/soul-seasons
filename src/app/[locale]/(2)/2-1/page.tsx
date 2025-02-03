/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Background2 from '../../../../img/background/2.png';
import DarkBlueCenter from '../../../../img/background/darkBlueCenter.png';
import BlueCenter from '../../../../img/background/blueCenter.png';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

const Scene2 = () => {
    const router = useRouter();
    const locale = useLocale();
    const backgrounds = [DarkBlueCenter, BlueCenter, Background2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === backgrounds.length - 1) {
                    clearInterval(interval); // Stop interval when the last background is reached
                    return prevIndex; // Return the same index to stop updates
                }
                return prevIndex + 1; // Move to the next index
            });
        }, 2000); // Change background every 2 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [backgrounds.length]);

    const handleClick = () => {
        router.push(`/${locale}/2-2`);
    };

    return (
        <section
            onClick={currentIndex === backgrounds.length - 1 ? handleClick : undefined}
            className="w-full h-lvh relative overflow-hidden"
        >
            {backgrounds.map((background, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity animation-dissolve duration-2000 ease-in-out ${
                        currentIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}
        </section>
    );
};

export default Scene2;
