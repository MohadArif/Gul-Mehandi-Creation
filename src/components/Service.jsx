import React from "react";
import { FaHeart, FaHands, FaLeaf, FaPaintBrush } from "react-icons/fa";

function Service() {
  const services = [
    {
      id: 1,
      icon: <FaHeart className="text-pink-500 text-4xl mb-4" />,
      title: "Bridal Mehandi",
      description:
        "Intricate and elegant designs crafted especially for brides, making your big day unforgettable.",
    },
    {
      id: 2,
      icon: <FaHands className="text-green-500 text-4xl mb-4" />,
      title: "Engagement & Guests",
      description:
        "Stylish and simple Mehandi patterns for bridesmaids, family, and friends to celebrate together.",
    },
    {
      id: 3,
      icon: <FaPaintBrush className="text-yellow-500 text-4xl mb-4" />,
      title: "Festive Mehandi",
      description:
        "Celebrate Eid, Karwa Chauth, Diwali, and more with creative and trendy designs that last long.",
    },
    {
      id: 4,
      icon: <FaLeaf className="text-teal-500 text-4xl mb-4" />,
      title: "Custom Mehandi",
      description:
        "Personalized designs that blend tradition with your unique style, perfect for any occasion.",
    },
  ];

  return (
    <div className="w-full py-12 px-6 md:px-16 bg-green-800" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Our Services
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition-transform duration-300 hover:-translate-y-2"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
