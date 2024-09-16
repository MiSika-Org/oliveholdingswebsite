"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface ApproachProps {
  body: string;
  step: number;
  position: "top" | "bottom";
  icon: string;
  iconSize: number;
  isSvg?: boolean;
}

function bottomWidth(p: number) {
  switch (p) {
    case 1:
      return "401px";
    case 2:
      return "507px";
    case 3:
      return "628px";
    case 4:
      return "468px";
    default:
      return "401px";
  }
}

function bottomHeight(p: number) {
  switch (p) {
    case 1:
      return "100px";
    case 2:
      return "100px";
    case 3:
      return "123px";
    case 4:
      return "70px";
    default:
      return "401px";
  }
}

function left(p: number) {
  switch (p) {
    case 1:
      return "82px";
    case 2:
      return "25.28%";
    case 3:
      return "44.7916666667%";
    default:
      return "64.5138888889%";
  }
}

function marginLeft(p: number) {
  switch (p) {
    case 1:
      return "45px";
    case 2:
      return "115px";
    case 3:
      return "100px";
    default:
      return "108px";
  }
}

function bottom(p: number) {
  switch (p) {
    case 1:
      return "7.37179487179%";
    case 3:
      return "7.37179487179%";
    case 2:
      return "57%";
    case 4:
      return "48.8247863248%";
    default:
      return "69px";
  }
}

const Approach: React.FC<ApproachProps> = ({
  step,
  body,
  position,
  icon,
  isSvg,
  iconSize,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleNoUserMouseEnter = () => {
    setHovered(true);
  };

  const handleNoUserMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={`approach approach-${step}`}
      style={{
        left: left(step),
        bottom: bottom(step),
        flexDirection: position === "bottom" ? "column" : "column-reverse",
        zIndex: 2,
      }}
    >
      <div
        className={`approach-icon ${hovered ? " approach-icon-selected" : ""}`}
        style={{
          marginLeft: marginLeft(step),
        }}
        onMouseEnter={handleNoUserMouseEnter}
        onMouseLeave={handleNoUserMouseLeave}
      >
        {isSvg ? (
          <Image
            src={icon}
            alt={step + "-" + "icon-approach"}
            // fill
            width={iconSize}
            height={iconSize}
          />
        ) : (
          <Icon icon={icon} width={85} />
        )}
      </div>
      <div
        className={`approach-main-body ${
          hovered ? " approach-body-selected" : ""
        }`}
        style={{
          width: bottomWidth(step),
        }}
      >
        <div
          className={`approach-title ${
            hovered ? " approach-title-selected" : ""
          }`}
        >{`Step 0${step}`}</div>
        <div
          className="approach-body"
          style={{
            height: bottomHeight(step),
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

export default Approach;
