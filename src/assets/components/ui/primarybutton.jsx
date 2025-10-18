// src/components/primarybutton.jsx
import React from 'react';

const PrimaryButton = ({ label, onClick, type }) => {
  let baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer";
  let typeClasses = "";

  switch (type) {
    case "primary":
      typeClasses = "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-lg";
      break;
    case "secondary":
      typeClasses = "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 hover:scale-105";
      break;
    case "outline":
      typeClasses = "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-105";
      break;
    default:
      typeClasses = "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-lg";
  }

  return (
    <button
      className={`${baseClasses} ${typeClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;