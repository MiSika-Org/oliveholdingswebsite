import React from "react";

interface GearCardProps {
  className?: string;
  title: string;
  body: string;
}

const GearCard: React.FC<GearCardProps> = ({ className, title, body }) => {
  return (
    <div className={`portfolio-right-card font-montserrat ${className}`}>
      <div className="portfolio-right-card-title">{title}</div>
      <div className="portfolio-right-card-body font-lato">{body}</div>
    </div>
  );
};

export default GearCard;
