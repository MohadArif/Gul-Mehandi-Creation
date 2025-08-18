import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import couple from "../assets/images/couple.jpg";
import bridehand from "../assets/images/bridehand.jpg";
import coupleBiHandicap from "../assets/images/couplehand.jpg";
import couple2 from "../assets/images/couple2.jpg";
import groome from "../assets/images/groome.jpg";
import mehandi3 from "../assets/images/mehandi3.jpg";

function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    // nextArrow: true,
    // prevArrow: true,
    speed: 500,
    pushOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // optional
    autoplaySpeed: 2000, // optional
  };

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };

  return (
    <div className="slider-container w-full h-[280px] md:h-[430px] px-10">
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 my-20 mx-20 pb-30 sm:mx-30 sm:mb-60 md:mx-40  md:my-70">
        <h1 className="text-xl xsm:text-3xl md:text-4xl text-white font-extrabold drop-shadow-lg">
          Gul Mehandi Creations
        </h1>
        <div>
          <p className="text-[9px]  xsm:text-[12px] md:text-xl text-white drop-shadow-md">
            “Mehandi that speaks the heritage of love, tradition, and artistry.”
          </p>
          <p className="text-[8px] xsm:text-[12px] md:text-xl text-white drop-shadow-md">
            At Gul Mehandi Creations, we believe Mehandi is more than just a
            design — it’s a celebration of culture, tradition, and new
            beginnings. With years of experience in bridal and festive Mehandi,
            we bring intricate designs, natural henna, and a personal touch to
            every hand we adorn.
          </p>
        </div>
      </div>
      {/* Slider */}
      <Slider {...settings} className="p-5">
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={couple}
            alt="Couple"
          />
        </div>
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={couple2}
            alt="Couple 2"
          />
        </div>
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={bridehand}
            alt="Bride hand"
          />
        </div>
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={coupleBiHandicap}
            alt="Couple handicap"
          />
        </div>
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={groome}
            alt="Groom"
          />
        </div>
        <div>
          <img
            className="w-full h-[280px] object-cover md:h-[430px]"
            src={mehandi3}
            alt="Groom"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
