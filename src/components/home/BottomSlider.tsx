"use client";
import { ArrowLeft24Filled, ArrowRight24Filled } from "@fluentui/react-icons";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
// import './MyCarousel.css'; // Optional: for custom styles
import type { Carousel as CarouselType } from "react-responsive-carousel";

interface BottomSliderProps {
  children: unknown;
  autoPlay?: boolean;
  onChange?: (index: number) => void;
  swipeable?: boolean;
  carouselRef?: React.LegacyRef<CarouselType>;
  currentIndex?: number;
}

const BottomSlider: React.FC<BottomSliderProps> = (props) => {
  const {
    autoPlay,
    onChange,
    swipeable = true,
    carouselRef,
    currentIndex,
  } = props;
  const customNextArrow = (clickHandler: () => void, hasNext: boolean) => {
    return (
      <button
        type="button"
        onClick={clickHandler}
        className="custom-arrow custom-next"
        disabled={!hasNext}
      >
        <ArrowRight24Filled color="#BABCBE" />
      </button>
    );
  };
  const customPrevArrow = (clickHandler: () => void, hasPrev: boolean) => (
    <button
      type="button"
      onClick={clickHandler}
      className="custom-arrow custom-prev"
      disabled={!hasPrev}
    >
      <ArrowLeft24Filled color="#BABCBE" />
    </button>
  );

  const customIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean
  ) => (
    <a
      onClick={clickHandler}
      className={`action-circle ${isSelected ? "action-circle-active" : ""}`}
    />
  );

  return (
    <Carousel
      ref={carouselRef}
      interval={5000}
      autoPlay={autoPlay}
      onChange={(index) => onChange && onChange(index)}
      infiniteLoop
      selectedItem={currentIndex}
      renderArrowPrev={customPrevArrow}
      renderArrowNext={customNextArrow}
      swipeable={swipeable}
      showThumbs={false}
      renderIndicator={customIndicator}
    >
      {props.children as never}
    </Carousel>
  );
};

export default BottomSlider;
