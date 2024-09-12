import React from "react";

interface CirclesProps {
  currentIndex: number;
}

interface CircleProps {
  currentCircle: number;
  selected: boolean;
  selectedCircle: number;
}

const items = [5, 4, 3, 2, 1, 0];

const Circle: React.FC<CircleProps> = ({
  currentCircle,
  selected,
  selectedCircle,
}) => {
  return (
    <div
      className={`circle circle-${currentCircle} ${
        selected ? "circle-selected" : ""
      }`}
      style={{
        zIndex: selectedCircle <= currentCircle - 1 ? 10 : "initial",
      }}
    ></div>
  );
};

const Circles: React.FC<CirclesProps> = ({ currentIndex }) => {
  const current = items[currentIndex];

  return (
    <div className="circles">
      {Array.from({ length: 6 }, (_, i) => (
        <Circle
          currentCircle={i + 1}
          key={i}
          selected={i === current}
          selectedCircle={current}
        />
      ))}
      <hr className="circle-line" />
    </div>
  );
};

export default Circles;
