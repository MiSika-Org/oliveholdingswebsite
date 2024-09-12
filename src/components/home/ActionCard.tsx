import { ArrowRight24Filled } from "@fluentui/react-icons";
import React from "react";

interface ActionCardProps {}

const ActionCard: React.FC<ActionCardProps> = ({}) => {
  return (
    <div className="action-stories">
      <div className="action-top">STORIES</div>
      <div className="action-card-title">NUTS FOR GROWTH</div>
      <div className="action-card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>

      <button className="flex flex-row items-center justify-center action-link">
        <p className="action-card-link">Read more</p>{" "}
        <ArrowRight24Filled color="#62b46a" />
      </button>
    </div>
  );
};

export default ActionCard;
