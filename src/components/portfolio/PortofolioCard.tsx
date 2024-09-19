"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PortofolioCardProps {
  title: string;
  text: string;
  image: string;
  imgHeight: number;
  imgWidth: number;
}

const PortofolioCard: React.FC<PortofolioCardProps> = ({
  title,
  text,
  image,
  imgHeight,
  imgWidth,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-center portfolio-section-images-item ">
        <Image
          width={imgWidth}
          height={imgHeight}
          src={image}
          alt="Nuts for Growth"
        />
      </div>
      <div>
        <div className="portfolio-image-text">{title}</div>
        {show && <div className="portfolio-text">{text}</div>}

        <a onClick={() => setShow(!show)} className="portfolio-text underline">
          {show ? "less" : "more"}
        </a>
      </div>
    </div>
  );
};

export default PortofolioCard;
