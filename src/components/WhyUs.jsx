import React from "react";
import { FaLeaf, FaPenFancy, FaClock, FaSmile } from "react-icons/fa";

function WhyUs() {
  const reasons = [
    {
      id: 1,
      icon: <FaLeaf className="text-green-400 text-4xl mb-3" />,
      title: "100% Natural Henna",
      description:
        "We use only natural and skin-friendly henna, ensuring safe application with rich and long-lasting stains.",
    },
    {
      id: 2,
      icon: <FaPenFancy className="text-orange-400 text-4xl mb-3" />,
      title: "Intricate & Trendy Designs",
      description:
        "From traditional motifs to modern styles, our Mehandi reflects artistry, elegance, and cultural heritage.",
    },
    {
      id: 3,
      icon: <FaClock className="text-purple-500 text-4xl mb-3" />,
      title: "On-Time Service",
      description:
        "We value your time and ensure punctual service at your venue, with designs that match your celebration.",
    },
    {
      id: 4,
      icon: <FaSmile className="text-yellow-300 text-4xl mb-3" />,
      title: "Happy Clients",
      description:
        "Our passion lies in making every bride and client smile with designs that create lifelong memories.",
    },
  ];

  return (
    <div className="w-full py-12 px-6 md:px-16 bg-white" id="why-choose-us">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-10">
        Why Choose Us
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-green-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 text-center"
          >
            {reason.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {reason.title}
            </h3>
            <p className="text- text-white">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
