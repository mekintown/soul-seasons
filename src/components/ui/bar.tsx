'use client'
import { useEffect } from 'react';
import High from '../../img/icons/high.png';
import Low from '../../img/icons/low.png';

interface BarProps {
  stressScore: number;
  setStressScore: (score: number) => void;
}

const Bar: React.FC<BarProps> = ({ stressScore, setStressScore }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStressScore(Number(e.target.value));
  };

  useEffect(() => {
    localStorage.setItem('stressScore', stressScore.toString());
  }, [stressScore]);

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center">
        <img src={High.src} alt="High" />
      </div>
      <div className="flex flex-col items-center justify-center relative">
        {/* Bubble */}
        <div
          className="absolute -top-6 bg-gray-300 text-black text-sm rounded-full px-2 py-1"
          style={{
            left: `calc(${stressScore * 10}% - 20px)`, // Adjust position dynamically
          }}
        >
          {stressScore}
        </div>

        {/* Range Input */}
        <input
          type="range"
          min="0"
          max="10"
          name="score"
          className="w-[200px]"
          value={stressScore}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <img src={Low.src} alt="Low" />
      </div>
    </div>
  );
};

export default Bar;
