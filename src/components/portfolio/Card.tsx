import { ArrowRight24Filled } from "@fluentui/react-icons";
import React from "react";

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className="action-stories" style={{ marginLeft: "-30px" }}>
      <div className="action-top">Send us a pitch!</div>
      <div className="action-card-title">{`We're eager to hear from you`}</div>
      <div className="action-card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>

      <button className="flex flex-row items-center justify-center action-link">
        <p className="action-card-link">Submit pitch</p>{" "}
        <ArrowRight24Filled color="#62b46a" />
      </button>
    </div>
  );
};

export default Card;
