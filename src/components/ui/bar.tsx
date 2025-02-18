"use client";
import { useEffect } from "react";
import Marker from "./marker";

interface BarProps {
  stressScore: number;
  localStorageKey?: string;
  setStressScore: (score: number) => void;
  setMouseDown: (mouseDown: boolean) => void;
}

const Bar: React.FC<BarProps> = ({
  stressScore,
  localStorageKey = "stressScore",
  setStressScore,
  setMouseDown,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStressScore(Number(e.target.value));
    setMouseDown(true);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, stressScore.toString());
  }, [stressScore]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col items-center justify-center relative ">
        {/* Bubble */}
        <div
          className="absolute -top-12 rounded-full"
          style={{
            left: `calc(${stressScore * 10}% - 20px)`, // Adjust position dynamically
          }}
        >
          <Marker stressScore={stressScore} />
        </div>
        <input
          type="range"
          min="1"
          max="10"
          name="score"
          className="w-[265px] h-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] custom-range rounded-xl"
          value={stressScore}
          style={{
            background: `linear-gradient(to right, #182649 ${stressScore * 10}%, #ffffff ${
              stressScore * 10
            }%)`,
          }}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between text-lg font-light text-white">
        <span>1</span>
        <span>10</span>
      </div>
    </div>
  );
};

export default Bar;
