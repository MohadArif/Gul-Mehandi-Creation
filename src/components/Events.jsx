import React from "react";
import { MdEmojiEvents } from "react-icons/md";
// import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
// import video3 from "../assets/videos/video3.mp4";

function Events() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-800 relative  sm:py-8 md:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold flex justify-center items-center gap-2 mb-5">
        <MdEmojiEvents /> Our Events
      </h1>

      <div className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-[130vh]">
        {" "}
        {/* Ensures enough height */}
        {/* Card 1 */}
        <div className="absolute  md:top-5 left-8  sm:left-6 md:left-20 w-[280px] h-[120px] sm:w-[360px] sm:h-[120px] md:w-[600px] md:h-[180px] flex rounded-2xl shadow-2xl shadow-gray-500 bg-white">
          <video
            // src={video1}
            autoPlay
            muted
            loop
            className="w-1/2 h-full rounded-l-2xl object-cover"
          />
          <div className="flex flex-col justify-center gap-0 md:gap-2 px-5 md:px-10  md:py-10">
            <h1 className="text-xl md:text-2xl font-bold">Mehndi Ceremony</h1>
            <p className="text-[10px] overflow-hidden sm:overflow-auto">
              Celebrating love with colors and tradition. The bride{" "}
              <b>Ayesha</b> adorns her hands with beautiful mehndi while{" "}
              <b>Arjun</b> shares the joy with family & friends.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="absolute top-[150px] md:top-[250px] right-8 sm:right-6 md:right-20 w-[280px] sm:w-[360px] md:w-[600px] h-[120px] sm:h-[120px] md:h-[180px] flex rounded-2xl shadow-2xl shadow-gray-500 bg-white">
          <video
            src={video2}
            autoPlay
            muted
            loop
            className="w-1/2 h-full rounded-l-2xl object-cover"
          />
          <div className="flex flex-col justify-center gap-0 md:gap-2 px-5 md:px-10  md:py-10">
            <h1 className="text-xl md:text-2xl font-bold ">Sangeet Night</h1>
            <p className="text-[10px] overflow-hidden sm:overflow-auto">
              A musical evening filled with dance, laughter, and melodies where{" "}
              <b>Ayesha & Arjun</b> celebrate togetherness with their loved
              ones.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="absolute top-[300px] md:top-[480px] left-8 sm:left-6 md:left-20 w-[280px] sm:w-[360px] md:w-[600px] h-[120px] sm:h-[120px] md:h-[180px] flex rounded-2xl shadow-2xl shadow-gray-500 bg-white">
          <video
            // src={video3}
            autoPlay
            muted
            loop
            className="w-1/2 h-full rounded-l-2xl object-cover"
          />
          <div className="flex flex-col justify-center gap-0 md:gap-2 px-5 md:px-10  md:py-10">
            <h1 className="text-xl md:text-2xl font-bold">Wedding Ceremony</h1>
            <p className="text-[10px] overflow-hidden sm:overflow-auto">
              The big day where <b>Ayesha & Arjun</b> tie the knot, surrounded
              by blessings, rituals, and the warmth of family and friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
