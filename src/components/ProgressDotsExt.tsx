import React from "react";

interface ProgressDotsExtProps {
  totalDots: number;
  activeDot: number;
  dotColor?: string;
  activeDotSize?: number;
  inactiveDotSize?: number;
  animationDuration?: number;
  animationDelay?: number;
  onDotClick?: (index: number) => void;
  activeDotAnimationSpeed?: number;
  inactiveDotAnimationSpeed?: number;
}

const ProgressDotsExt: React.FC<ProgressDotsExtProps> = ({
  totalDots,
  activeDot,
  dotColor = "#ffffff",
  activeDotSize = 15,
  inactiveDotSize = 10,
  animationDuration = 300,
  animationDelay = 0,
  onDotClick,
  activeDotAnimationSpeed = 2000,
  inactiveDotAnimationSpeed = 1500,
}) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          className={`mx-2 rounded-full focus:outline-none transition-all duration-300 ease-in-out relative ${index === activeDot ? 'cursor-default' : 'cursor-pointer'}`}
          style={{
            height: `${Math.max(activeDotSize, inactiveDotSize)}px`,
            width: `${Math.max(activeDotSize, inactiveDotSize)}px`,
          }}
          onClick={() => index !== activeDot && onDotClick && onDotClick(index)}
        >
          <span
            className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
              index === activeDot ? 'animate-pulse' : 'hover:scale-125'
            }`}
            style={{
              backgroundColor: dotColor,
              opacity: index === activeDot ? 1 : 0.5,
              transform: `scale(${index === activeDot ? activeDotSize / inactiveDotSize : 1})`,
            }}
          ></span>
          {index !== activeDot && (
            <span 
              className="absolute inset-0 rounded-full opacity-0 hover:opacity-30 transition-all duration-500 ease-out pointer-events-none"
              style={{
                backgroundColor: dotColor,
                animation: `ripple ${inactiveDotAnimationSpeed}ms infinite 2s ease-out`,
              }}
            ></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ProgressDotsExt;