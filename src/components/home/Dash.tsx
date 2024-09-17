import React from "react";

interface DashProps {
  className: string;
}

const Dash: React.FC<DashProps> = ({ className }) => {
  return (
    <svg height="20" preserveAspectRatio="none" className={className}>
      <line
        x1="0"
        y1="10"
        x2={"100%"}
        y2="10"
        stroke="black"
        strokeWidth="1"
        strokeDasharray="10, 5"
      />
    </svg>
  );
};

export default Dash;
