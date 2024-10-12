import React, { useState, useRef, useEffect } from "react";
import QuemSomosItemExt from "./QuemSomosItemExt";
import { IQuemSomos } from "../models/database";
import { FONT_COLORS, SECTION_COLORS } from "../util/consts";

interface QuemSomosExtProps {
  blocks: IQuemSomos[];
}

const QuemSomosExt: React.FC<QuemSomosExtProps> = ({ blocks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const newIndex = Math.round(scrollPosition / window.innerHeight);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      if (delta > 0 && activeIndex < blocks.length - 1) {
        scrollToIndex(activeIndex + 1);
      } else if (delta < 0 && activeIndex > 0) {
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, blocks.length]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}
      >
        {blocks.map((block, index) => (
          <QuemSomosItemExt
            key={block.id}
            {...block}
            bgColor={SECTION_COLORS[index % SECTION_COLORS.length]}
            textColor={FONT_COLORS[index % FONT_COLORS.length]}
            index={index}
            length={blocks.length}
            opacity={0.7}
            blurAmount={10}
            animationDuration={800}
            fadeInDuration={1000}
            slideInLeftDuration={800}
            slideInRightDuration={800}
            animationDelay={0}
            isActive={index === activeIndex}
            onDotClick={scrollToIndex}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default QuemSomosExt;