"use client";
import { Link } from "@/i18n/routing";
import Background1 from "@/img/background/0.png";

const Scene0 = () => {
  return (
    <Link href="/0-1">
      <section
        className="w-full h-lvh flex flex-col"
        style={{
          backgroundImage: `url(${Background1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Link>
  );
};

export default Scene0;
