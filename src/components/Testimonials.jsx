import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bridal Client",
      feedback:
        "Gul Mehandi Creations made my wedding day extra special! The designs were so intricate and the stain came out so dark. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      role: "Festival Client",
      feedback:
        "Booked them for Karwa Chauth and I loved my Mehandi. Simple, elegant, and lasted beautifully for over a week!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Ritika Singh",
      role: "Bridesmaid",
      feedback:
        "Such amazing creativity! My bridesmaid Mehandi was stylish yet minimal. Everyone at the wedding complimented it.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      role: "Bride's Sister",
      feedback:
        "The artists were so patient and talented. They made sure every detail was perfect. My sister’s wedding felt even more beautiful with their Mehandi work.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 5,
      name: "Pooja Verma",
      role: "Engagement Client",
      feedback:
        "I booked Gul Mehandi Creations for my engagement, and everyone was in awe of the designs. It felt royal and elegant!",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 6,
      name: "Simran Kaur",
      role: "Sangeet Guest",
      feedback:
        "Absolutely loved my Mehandi! The stain was dark, the design was trendy, and the service was super professional.",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 770, // md
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // xsm
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-6 md:px-16 bg-white" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-10">
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-3">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between items-start w-[280px] h-[280px] mx-auto">
              <div>
                <FaQuoteLeft className="text-amber-500 text-2xl mb-2" />
                <p className="text-gray-700 italic line-clamp-3 text-sm">
                  "{testimonial.feedback}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
