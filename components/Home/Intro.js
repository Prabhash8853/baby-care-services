import React, { Component } from "react"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/img/maternity-care2.jpg" },
  { url: "/img/maternity-care1.jpg" },
  { url: "/img/parents.jpg" },
  { url: "/img/parents2.jpg" },
];


export default function Intro() {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={"88vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
      />
    </div>
  );
}
