import React from "react";
import handleg from "../assets/gallery/hand-leg.jpg";
import hand from "../assets/gallery/hand.jpg";
import mehandi from "../assets/gallery/mehandi3.png";
import mehandi1 from "../assets/gallery/mehandi.png";
import mehandi2 from "../assets/gallery/mehandi2.png";

function Gallery() {
  return (
    <div className="min-h-[380px] py-5 px-10 sm:px-40 md:px-50">
      <h1 className="text-4xl font-bold text-center mb-6">Our Gallery</h1>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] px-5 sm:px-10">
        {/* Image 1 */}
        <div className="w-[90px] h-[80px] absolute left-[10px] top-[10px] sm:w-[140px] sm:h-[100px] md:w-[180px] md:h-[120px] z-20 shadow-2xl shadow-gray-500 rounded-md overflow-hidden">
          <img
            src={mehandi}
            alt="Mehndi design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-[100px] h-[90px] absolute left-[120px] top-[40px] sm:w-[160px] sm:h-[110px] md:w-[200px] md:h-[140px] z-10 shadow-2xl shadow-gray-500 rounded-md overflow-hidden">
          <img
            src={mehandi1}
            alt="Mehndi art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="w-[120px] h-[100px] absolute left-[40px] top-[140px] sm:w-[180px] sm:h-[130px] md:w-[220px] md:h-[160px] z-30 shadow-2xl shadow-gray-500 rounded-md overflow-hidden">
          <img
            src={hand}
            alt="Hand Mehndi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="w-[130px] h-[120px] absolute right-[80px] top-[90px] sm:w-[200px] sm:h-[150px] md:w-[240px] md:h-[180px] z-0 shadow-2xl shadow-gray-500 rounded-md overflow-hidden">
          <img
            src={mehandi2}
            alt="Colorful Mehndi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 */}
        <div className="w-[160px] h-[140px] absolute right-[20px] top-[200px] sm:w-[220px] sm:h-[160px] md:w-[280px] md:h-[200px] shadow-2xl shadow-gray-500 rounded-md overflow-hidden">
          <img
            src={handleg}
            alt="Hand & Leg Mehndi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
