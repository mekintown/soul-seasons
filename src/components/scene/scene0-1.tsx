"use client";

import Background1 from '../../img/background/0.png';
import SoulSeasons from '../../img/icons/Soul Seasons-MAIN LOGO 1.png';
import { useRouter } from 'next/navigation';


const Scene1: React.FC = () => {
  const router = useRouter();

  const HandleClick = () => {
    router.push('/en/0/0-2');
  };

  return (
    <section
      className="w-full h-lvh flex flex-col"
      style={{
        backgroundImage: `url(${Background1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center h-full flex-col">
        {/* Animated Image */}
        <img
          src={SoulSeasons.src}
          alt="Soul Seasons Logo"
          className="animate-dissolve duration-300 ease-out"
        />

        {/* Animated Button */}
        <button
          onClick={HandleClick}
          className="bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out cursor-pointer mt-4"
        >
          เริ่ม
        </button>
      </div>
    </section>
  );
};

export default Scene1;
