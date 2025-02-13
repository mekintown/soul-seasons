import { useState, useRef, useCallback } from "react";

const SlideUnlock: React.FC<{ onUnlock: () => void; className?: string }> = ({
  onUnlock,
  className,
}) => {
  const maxValue = 100; // Smoothness level
  const speed = 12; // Sliding back speed
  const [currValue, setCurrValue] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  let rafID: number;

  const handleUnlockStart = useCallback(() => {
    if (inputRef.current) {
      cancelAnimationFrame(rafID);
      setCurrValue(Number(inputRef.current.value));
    }
  }, []);

  const handleUnlockEnd = useCallback(() => {
    if (inputRef.current) {
      const value = Number(inputRef.current.value);
      setCurrValue(value);

      if (value >= maxValue) {
        onUnlock();
      } else {
        rafID = requestAnimationFrame(animateHandler);
      }
    }
  }, [onUnlock]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrValue(Number(e.target.value));
  };

  const animateHandler = useCallback(() => {
    setCurrValue((prevValue) => {
      if (prevValue > -1) {
        rafID = requestAnimationFrame(animateHandler);
      }
      return prevValue - speed;
    });
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Slider */}
      <div className="flex flex-col items-center justify-center relative">
        <input
          ref={inputRef}
          type="range"
          value={currValue}
          min="0"
          max={100}
          onMouseDown={handleUnlockStart}
          onMouseUp={handleUnlockEnd}
          onTouchEnd={handleUnlockEnd}
          onChange={handleSliderChange}
          className="w-[265px] h-5 rounded-xl appearance-none 
                     drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] transition-all ease-out duration-200
                     bg-gradient-to-r from-[#182649] to-[#ffffff] 
                     [&::-webkit-slider-runnable-track]:rounded-xl [&::-webkit-slider-runnable-track]:h-5 
                     [&::-webkit-slider-thumb]:appearance-none 
                     [&::-webkit-slider-thumb]:bg-[#D9D9D9] [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                     [&::-webkit-slider-thumb]:cursor-pointer transform scale-105"
          style={{
            background: `linear-gradient(to right, #182649 ${currValue}%, #ffffff ${currValue}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default SlideUnlock;
