import React from "react";

interface ActionCardProps {
  slide: {
    title: string;
    body: string;
  };
}

const ActionCard: React.FC<ActionCardProps> = ({ slide }) => {
  return (
    <div className="action-stories">
      <div className="action-top" style={{ opacity: 0 }}>
        STORIES
      </div>
      <div className="action-card-title">{slide.title}</div>
      <div className="action-card-body" style={{ marginBottom: 71 }}>
        {slide.body}
      </div>

      {/* <button className="flex flex-row items-center justify-center action-link">
        <p className="action-card-link">Read more</p>{" "}
      </button> */}
    </div>
  );
};

export default ActionCard;
