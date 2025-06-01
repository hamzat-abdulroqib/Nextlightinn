import React, { useState } from "react";
import { initiativesData } from "../data/initiativesData.jsx";

function Initiatives() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="initiatives" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Key Initiatives
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our programs that are making a difference in communities
            around the world.
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Initiative Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {initiativesData.map((initiative, index) => (
                <button
                  key={index}
                  className={`py-4 px-6 text-left transition-colors focus:outline-none ${
                    activeTab === index
                      ? "bg-blue-50 border-t-2 md:border-t-0 md:border-l-2 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        activeTab === index
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <initiative.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold ${
                          activeTab === index
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {initiative.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {initiative.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Initiative Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {initiativesData[activeTab].title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {initiativesData[activeTab].description}
                  </p>

                  <h4 className="font-bold text-gray-800 mt-6 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {initiativesData[activeTab].achievements.map(
                      (achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="mt-8">
                    <a
                      href={`#learn-more-${initiativesData[activeTab].id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                    >
                      Learn more about this initiative
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-md">
                  <img
                    src={initiativesData[activeTab].imageUrl}
                    alt={initiativesData[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
