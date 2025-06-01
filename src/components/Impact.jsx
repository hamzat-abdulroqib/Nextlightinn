import React from "react";
import { impactData } from "../data/impactData.jsx";

function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since our founding, we've made significant progress in achieving our
            mission. Here's how we're making a difference.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactData.statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-blue-600 mb-3">
                <stat.icon className="h-10 w-10 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
