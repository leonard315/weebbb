// src/components/card.jsx
import React from 'react';

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-16 h-16 mb-4 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>
      <h4 className="text-xl font-semibold mb-3 text-center text-gray-800 group-hover:text-indigo-600 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;