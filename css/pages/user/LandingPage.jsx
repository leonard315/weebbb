// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../src/assets/components/ui/primarybutton.jsx';
import NavBar from '../../../src/assets/components/ui/navbar.jsx';
import FeatureCard from '../../../src/assets/components/ui/card.jsx';

const LandingPage = () => {
  // Use the useNavigate hook for SPA-friendly navigation
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/listing');
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full text-gray-800">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-20 md:py-32 gap-12 bg-gradient-to-br from-blue-600 via-green-500 to-red-500">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight text-shadow-sm">
            Find Your Next Car With Confidence
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed">
            Browse our curated inventory of high-quality, pre-owned vehicles. Trusted by thousands nationwide.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <PrimaryButton
              label="Browse Cars"
              onClick={handleExplore}
              type="secondary"
            />
            <PrimaryButton
              label="Learn More"
              onClick={() => {}} // Add navigation to an "About" or "Contact" page
              type="primary"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A modern blue car"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-video hover:scale-105 transition-transform duration-500"
          />
        </div>
      </header>

      {/* CTA Section */}
      <section className="w-full bg-white text-center py-20 px-6 md:px-12">
        <div className="w-full">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Drive Home?</h3>
          <p className="mb-8 text-lg text-gray-600">Join thousands of happy customers who found their perfect car with us.</p>
          <PrimaryButton
            label="View Inventory"
            onClick={handleExplore}
            type="primary"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm mb-4 md:mb-0">© 2025 RC CarDeal. All rights reserved.</p>
          <p className="text-sm mb-4 md:mb-0">© 2025 CarDeal. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;