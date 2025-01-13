'use client'
import Scene0 from "@/components/scene/scene0";
import { useRouter } from "next/navigation"; // Use next/navigation in App Router

const Zero = () => {
    const router = useRouter();

    const HandleClick = () => { 
        router.push('/en/0/0-1'); // Replace with your desired route
    };

    return (
        <div className="h-lvh overflow-hidden" onClick={HandleClick}>
            <Scene0 />
        </div>
    );
};

export default Zero;
