// src/components/navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const NavBar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const navLinkClasses = "block text-gray-700 hover:text-indigo-600 font-medium px-4 py-3 rounded-md hover:bg-gray-100 transition duration-300 mb-2";
  const activeLinkClasses = "block text-indigo-600 bg-indigo-50 font-semibold px-4 py-3 rounded-md mb-2";

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">RC CarDeal</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Home</Link>
            <Link to="/listing" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Cars</Link>
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Cart</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Contact</Link>
          </div>

          {/* Side Panel Button */}
          <button
            onClick={() => setIsSidePanelOpen(true)}
            className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/listing" className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs mt-1">Cars</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13H5.4m1.6 0h10M9 21a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <span className="text-xs mt-1">Cart</span>
          </Link>
          <button
            onClick={() => setIsSidePanelOpen(true)}
            className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs mt-1">Menu</span>
          </button>
        </div>
      </nav>

      {/* Side Panel Modal */}
      {isSidePanelOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsSidePanelOpen(false)}
          ></div>

          {/* Side Panel */}
          <div className="relative ml-auto w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsSidePanelOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-4">
                <Link to="/" className={navLinkClasses} onClick={() => setIsSidePanelOpen(false)}>Home</Link>
                <Link to="/listing" className={navLinkClasses} onClick={() => setIsSidePanelOpen(false)}>Cars</Link>
                <Link to="/cart" className={navLinkClasses} onClick={() => setIsSidePanelOpen(false)}>Cart</Link>
                <Link to="/about" className={navLinkClasses} onClick={() => setIsSidePanelOpen(false)}>About</Link>
                <Link to="/contact" className={navLinkClasses} onClick={() => setIsSidePanelOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
