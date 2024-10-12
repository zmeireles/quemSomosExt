import React, { useEffect, useState } from 'react';
import { IQuemSomos } from "../models/database";
import ProgressDotsExt from "./ProgressDotsExt";

interface TQuemSomosBlock extends IQuemSomos {
  bgColor: string;
  textColor: string;
  index: number;
  length: number;
  opacity?: number;
  blurAmount?: number;
  animationDuration?: number;
  fadeInDuration?: number;
  slideInLeftDuration?: number;
  slideInRightDuration?: number;
  animationDelay?: number;
  isActive: boolean;
  onDotClick: (index: number) => void;
  activeIndex: number;
}

const QuemSomosItemExt: React.FC<TQuemSomosBlock> = ({
  data,
  titulo,
  texto,
  background,
  bgColor,
  textColor,
  index,
  length,
  opacity = 0.7,
  blurAmount = 10,
  animationDuration = 800,
  fadeInDuration = 1000,
  slideInLeftDuration = 800,
  slideInRightDuration = 800,
  animationDelay = 0,
  isActive,
  onDotClick,
  activeIndex,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), animationDuration);
      return () => clearTimeout(timer);
    }
  }, [isActive, animationDuration]);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section
      className="h-screen w-full flex items-end justify-start bg-cover bg-center bg-no-repeat snap-start snap-always"
      style={{ backgroundImage: `url(${background})` }}
    >
      {activeIndex === index && <div className="absolute inset-0 bg-black opacity-20" />}
      <div className="relative w-full sm:w-1/2 mb-0 sm:mb-16 mx-0 sm:ml-16">
        <div
          className={`flex flex-col gap-8 rounded-lg p-8 shadow-2xl backdrop-saturate-150 transition-all duration-1000 ease-in-out`}
          style={{
            backgroundColor: hexToRgba(bgColor, isActive ? opacity : 0.1),
            boxShadow: `0 8px 32px 0 ${hexToRgba(bgColor, 0.3)}`,
            border: `1px solid ${hexToRgba(bgColor, 0.15)}`,
            color: textColor,
            backdropFilter: `blur(${isActive ? blurAmount : 0}px)`,
          }}
        >
          <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-shadow ${shouldAnimate ? 'animate-fadeIn' : ''}`} style={{ animationDuration: `${fadeInDuration}ms`, animationDelay: `${animationDelay}ms` }}>{data}</h1>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 text-shadow ${shouldAnimate ? 'animate-slideInLeft' : ''}`} style={{ animationDuration: `${slideInLeftDuration}ms`, animationDelay: `${animationDelay + 200}ms` }}>{titulo}</h2>
          {texto && (
            <div className={`prose prose-lg sm:prose-xl prose-invert max-w-none ${shouldAnimate ? 'animate-slideInRight' : ''}`} style={{ animationDuration: `${slideInRightDuration}ms`, animationDelay: `${animationDelay + 400}ms` }}>
              <p className="text-base sm:text-lg leading-relaxed text-shadow">{texto}</p>
            </div>
          )}
          <div className="mt-8">
            <ProgressDotsExt
              totalDots={length}
              activeDot={activeIndex}
              dotColor={textColor}
              onDotClick={onDotClick}
              activeDotSize={15}
              inactiveDotSize={10}
              animationDuration={500}
              animationDelay={0}
              activeDotAnimationSpeed={2000}
              inactiveDotAnimationSpeed={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosItemExt;