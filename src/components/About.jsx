import React from "react";
import { FcAbout } from "react-icons/fc";

function About() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-10 gap-2 mt-25 mb-10">
      <h1 className="flex justify-center items-center gap-2 text-2xl font-bold sm:text-3xl md:text-4xl mb-5 text-amber-800">
        <FcAbout />
        About us
      </h1>
      <div className="flex flex-col justify-center items-center gap-3 px-2 md:px-10">
        <p className="text-[12px] sm:text-[15px]">
          At Gul Mehandi Creations, we transform hands and hearts with the
          timeless beauty of Mehandi. Founded with a passion for art and
          tradition, our journey began with a simple belief — every bride and
          every celebration deserves a touch of elegance and heritage.
        </p>
        {/* <br /> */}
        <p className="text-[12px] sm:text-[15px]">
          With years of expertise in bridal and festive Mehandi, we specialize
          in creating intricate designs that blend cultural richness with modern
          trends. From classic Indian motifs to contemporary Arabic patterns,
          our artistry is tailored to suit every occasion.
        </p>
        {/* <br /> */}
        <p className="text-[12px] sm:text-[15px]">
          We use 100% natural henna, ensuring deep, long-lasting stains that are
          safe for your skin. Whether it’s a grand wedding, a joyful festival,
          or a personal celebration, our Mehandi tells your story with
          creativity, precision, and love.
        </p>
        {/* <br /> */}
        <p className="text-[12px] sm:text-[15px]">
          ✨ At Gul Mehandi Creations, we don’t just draw patterns — we create
          memories that stay with you forever.
        </p>
      </div>
    </div>
  );
}

export default About;
