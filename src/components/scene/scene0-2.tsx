"use client";

import MessageBox from "../ui/messagebox";
import Shadow from "../ui/Shadow";
import Background1 from "../../img/background/0.png";
import { useRouter } from "next/navigation";
import { Trans } from 'react-i18next';

const Scene2 = () => {
  const router = useRouter();
  const HandleClick = () => {
    router.push("/en/0/0-3-1");
  };

  return (
    <section
      className="w-full justify-center h-lvh flex flex-col"
      style={{
        backgroundImage: `url(${Background1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Shadow>
        {/* Warning Header */}
        <div className="flex justify-end items-center h-full flex-col">
          <h1 className="font-kanit text-primaryblue text-[28px] mb-[10px]">คำเตือน</h1>
        </div>

        {/* Message Box */}
        <div className="flex justify-end items-center h-full flex-col">
          <MessageBox
            size="w-[274px] h-auto"
            BoxPadding=" py-5"
            message={
              
              <div className="flex flex-col text-primaryblue font-kanit font-light text-[18px] w-[243px] leading-6 space-y-3">
               <Trans i18nKey="Zero2.p1">
                <p>
                  เว็บไซต์นี้นำเสนอเนื้อหาเกี่ยวกับ
                  <span className="font-semibold"> การค้นหาตัวตนที่สูญหายและ</span>
                  <span className="font-semibold"> การทำความเข้าใจกับความกังวลและ</span>
                  <span className="font-semibold"> ความกลัวที่อยู่ในจิตใจของคุณ</span>
                </p>
                </Trans>
                <Trans i18nKey="Zero2.p2">
                  <p>
                    เนื้อหาภายในเรื่องเกี่ยวกับ
                    <span className="font-semibold">
                      เป้าหมายที่ยังไปไม่ถึง การเผชิญอุปสรรคและความล้มเหลว
                    </span>
                    ไม่ควรนำไปคิดต่อทั้งตัวเนื้อเรื่อง และชีวิตจริง
                  </p>
                </Trans>
                <Trans i18nKey="Zero2.p3">
                  <p>
                    หากคุณรู้สึกไม่สบายใจระหว่างการเล่น คุณสามารถหยุดได้ทันที
                    <span className="font-semibold"> เพราะความรู้สึกของคุณสำคัญที่สุด</span>
                  </p>
                </Trans>
               
            
              </div>
              
              
            }
            
          />
        </div>

        {/* Confirmation Button */}
        <div className="flex justify-start items-center h-full flex-col mt-10 ">
          <button
            onClick={HandleClick}
            className="font-kanit font-medium bg-primaryblue w-[173px] h-[55px] rounded-lg text-white font-cloud font-bold animate-dissolve duration-300 ease-out"
          >
            รับทราบ
          </button>
        </div>
      </Shadow>
    </section>
  );
};

export default Scene2;
