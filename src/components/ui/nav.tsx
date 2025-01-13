'use client';
import LangSwitch from "./language";
import Image from "next/image";
import Sound from '../../img/icons/SOUND.png';

const Nav = () => {
    return (
        <nav className="flex items-center gap-[10px]">
            <div>
                <LangSwitch />
            </div>
            {/* Vertical Line */}
            <div className="h-[29px] border-l-[2px] border-[#182649]"></div>
            <div>
                <Image
                    src={Sound}
                    alt="Sound icon for toggling audio"
                    width={29}
                    height={29}
                    className="w-[29px] h-[29px]"
                />
            </div>
        </nav>
    );
};

export default Nav;
