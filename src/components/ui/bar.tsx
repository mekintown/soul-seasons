'use client'
import { useEffect } from 'react';
import High from '../../img/icons/high.png';
import Low from '../../img/icons/low.png';

interface BarProps {
  stressScore: number;
  setStressScore: (score: number) => void;
  setMouseDown: (mouseDown: boolean) => void;
}

const Bar: React.FC<BarProps> = ({ stressScore, setStressScore, setMouseDown }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStressScore(Number(e.target.value));
    setMouseDown(true);
  };

  useEffect(() => {
    localStorage.setItem('stressScore', stressScore.toString());
  }, [stressScore]);

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center  font-bold text-white">
        <img src={Low.src} alt="High" />
        1
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

       
        <input
          type="range"
          min="1"
          max="10"
          name="score"
          className="w-[200px] h-[20px]"
          value={stressScore}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-center font-bold text-white">
        <img src={High.src} alt="Low" />
        10
      </div>
    </div>
    
  );
};

export default Bar;
