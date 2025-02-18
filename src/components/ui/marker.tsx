import React from "react";

interface MessageBoxProps {
  stressScore: number;
}

const Marker: React.FC<MessageBoxProps> = ({ stressScore }) => {
  return (
    <>
      <svg
        width="27"
        height="37"
        viewBox="0 0 27 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="27" height="25" rx="12.5" fill="white" />
        <path d="M2 18L13 34" stroke="white" />
        <path d="M14 33.9626L25.054 17.9999" stroke="white" />
        <path d="M13 33.905L24.1368 18" stroke="white" />
        <path d="M13.1644 32.5239L13 19.0001" stroke="white" />
        <path d="M14.1644 32.5239L14 22.0001" stroke="white" />
        <path d="M14 31L14 22" stroke="white" />
        <path d="M12 31L12 22" stroke="white" />
        <path d="M10 28L10 22" stroke="white" />
        <path d="M9 25L9 19" stroke="white" />
        <path d="M11 29L11 23" stroke="white" />
        <path d="M13 29L13 23" stroke="white" />
        <path d="M13 33L13 27" stroke="white" />
        <path d="M15 32L15 19" stroke="white" />
        <path d="M16 30L16 19" stroke="white" />
        <path d="M17 28L17 17" stroke="white" />
        <path d="M18 27L18 16" stroke="white" />
        <path d="M19 26L19 15" stroke="white" />
        <line
          x1="6.42183"
          y1="22.7316"
          x2="13.4218"
          y2="33.7316"
          stroke="white"
        />
        <line
          x1="7.42183"
          y1="22.7316"
          x2="14.4218"
          y2="33.7316"
          stroke="white"
        />
        <path d="M13 34L13.5 35L13.75 34.5L14 34" stroke="white" />
        <path
          d="M13.1798 33.3071C13.1532 33.3138 13.1704 33.4995 13.1704 33.5362C13.1704 33.5566 13.165 33.5841 13.1751 33.6023C13.1831 33.6166 13.1955 33.624 13.1991 33.6398C13.2124 33.6998 13.2812 33.6913 13.3256 33.6913C13.3598 33.6913 13.3994 33.6969 13.4328 33.6893C13.4533 33.6846 13.4803 33.6643 13.4984 33.6632C13.5596 33.6596 13.6171 33.7165 13.6624 33.7517C13.683 33.7678 13.6936 33.797 13.7119 33.8152C13.7262 33.8296 13.7803 33.8658 13.7514 33.8225"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-0 h-full w-full text-primaryblue font-light text-lg text-center">
        {stressScore}
      </div>
    </>
  );
};

export default Marker;
