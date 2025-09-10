import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const images = [img1, img2, img3, img4, img5];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 176, 
    partialVisible: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 96,
    partialVisible: true,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisible: false,
  },
};

const ButtonGroup = ({ next, previous, carouselState }) => {
  const currentIdx = carouselState.currentSlide % images.length;
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 16, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        gap: 6, 
      }}
    >
      <button
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#444",
          fontSize: 14, 
          marginRight: 8, 
          padding: 0,
        }}
        onClick={previous}
        aria-label="Previous Slide"
      >
        <BsChevronLeft />
      </button>
      {images.map((_, idx) => (
        <button
          key={idx}
          style={{
            background: idx === currentIdx ? "#222" : "#f1f1f1",
            border: "none",
            width: 8,
            height: 8, 
            margin: "0 2px", 
            borderRadius: "50%",
            opacity: idx === currentIdx ? 1 : 0.7,
            cursor: "pointer",
            padding: 0,
          }}
          onClick={() => carouselState.goToSlide(idx)}
        />
      ))}
      <button
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#444",
          fontSize: 14, 
          marginLeft: 8,
          padding: 0,
        }}
        onClick={next}
        aria-label="Next Slide"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export const CarouselScreen = () => (
  <div style={{ margin: "0 auto", width: "76.5%", height: "100%" }}>
    <div style={{ position: "relative" }}>
      <Carousel
        responsive={responsive}
        partialVisible={window.innerWidth > 725}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        itemClass="image-item"
        containerClass="carousel-root"
        draggable={false}
        swipeable={false}
      >
        {images.map((img, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              style={{
                width: "100%",
                height: "32vw", 
                minHeight: "130px", 
                maxHeight: "430px", 
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);
