"use client";

import React, { useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageBackground from "@/components/imageContainer/ImageBackground";

function SampleNextArrow() {
  return (
    <div
      style={{
        display: "none",
        background: "red",
      }}
    />
  );
}

function PicSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    // dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  const btnStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: "4rem",
    position: "absolute",
    top: "45%",
    border: "none",
    cursor: "pointer",
    margin: "0",
    padding: "0",
    // borderRadius: "50%",
    // opacity: ".5",
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <ImageBackground src={"/slide1.jpg"} />
        </div>
        <div key={2}>
          <ImageBackground src={"/slide2.jpg"} />
        </div>
        <div key={3}>
          <ImageBackground src={"/slide3.jpg"} />
        </div>
      </Slider>

      <FaAngleLeft style={btnStyle} onClick={previous} />
      <FaAngleRight style={{ ...btnStyle, right: "1rem" }} onClick={next} />
    </div>
  );
}

export default PicSlider;
