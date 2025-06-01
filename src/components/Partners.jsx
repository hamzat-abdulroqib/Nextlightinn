import React from "react";

const Partners = ({ partners }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Partners
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="col-span-1 flex justify-center py-8 px-8 bg-white"
            >
              <img
                className="max-h-12"
                src={partner.logoUrl}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
