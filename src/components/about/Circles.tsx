import React from "react";
import type { Carousel as CarouselType } from "react-responsive-carousel";

interface CirclesProps {
  currentIndex: number;
  carouselRef?: React.LegacyRef<CarouselType>;
  onChange?: (index: number) => void;
}

interface CircleProps {
  currentCircle: number;
  selected: boolean;
  selectedCircle: number;
  onClick: () => void;
}

const items = [5, 4, 3, 2, 1, 0];

const Circle: React.FC<CircleProps> = ({
  currentCircle,
  selected,
  selectedCircle,
  onClick,
}) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`circle circle-${currentCircle} ${
        selected ? "circle-selected" : ""
      }`}
      style={{
        zIndex: selectedCircle <= currentCircle - 1 ? 10 : "initial",
      }}
    ></a>
  );
};

const Circles: React.FC<CirclesProps> = ({ currentIndex, onChange }) => {
  const current = items[currentIndex];

  function changeIndex(i: number) {
    if (onChange) {
      onChange(items[i]);
    }
  }
  return (
    <div className="circles">
      {Array.from({ length: 6 }, (_, i) => (
        <Circle
          currentCircle={i + 1}
          key={i}
          selected={i === current}
          selectedCircle={current}
          onClick={() => changeIndex(i)}
        />
      ))}
      <hr className="circle-line" />
    </div>
  );
};

export default Circles;
