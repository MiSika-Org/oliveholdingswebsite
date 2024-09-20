import { ArrowRight24Filled } from "@fluentui/react-icons";
import React from "react";

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className="action-stories" style={{ marginLeft: "-30px" }}>
      <div className="action-top">Send us a pitch!</div>
      <div className="action-card-title">{`We're eager to hear from you`}</div>
      <div className="action-card-body">
        If you are an entrepreneur building agribusiness in west Africa, connect
        with us by uploading a short document on your company. We will reach out
        to start a conversation to find out if there is any way we can support
        you to build. We are always looking for new partners and potential
        portfolio companies.
      </div>

      <a
        href="https://z05wpu23433.typeform.com/to/mNjhGf10"
        className="flex flex-row items-center justify-center action-link"
      >
        <p className="action-card-link">Submit pitch</p>{" "}
        <ArrowRight24Filled color="#62b46a" />
      </a>
    </div>
  );
};

export default Card;
