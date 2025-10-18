// src/components/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-32 py-5 bg-white shadow-sm">
      <Link to="/" className="text-2xl font-bold text-indigo-600">RC CarDeal</Link>
      <div className="space-x-8 hidden md:flex items-center">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
        <Link to="/listing" className="text-gray-700 hover:text-indigo-600 font-medium">Cars</Link>
        <Link to="/cart" className="text-gray-700 hover:text-indigo-600 font-medium">Cart</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;