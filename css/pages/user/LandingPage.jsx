// src/pages/LandingPage.jsx
import React from 'react';
import PrimaryButton from '../../../src/assets/components/ui/primarybutton.jsx';
import NavBar from '../../../src/assets/components/ui/navbar.jsx';
import FeatureCard from '../../../src/assets/components/ui/card.jsx';

const LandingPage = () => {
  const handleExplore = () => {
    window.location.href = '/listing'; // Simple redirect for demo
  };

  const handleOrder = () => {
    window.location.href = '/cart'; // Simple redirect for demo
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen w-full">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-20 md:py-32 gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Find Your Next Car With Confidence
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Browse our curated inventory of high-quality, pre-owned vehicles. Trusted by thousands nationwide.
          </p>
          <PrimaryButton
            label="Browse Cars"
            onClick={handleExplore}
            type="outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Modern web design"
            className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <FeatureCard
              icon="⚡"
              title="Instant Approval"
              description="Get pre-approved in minutes with our secure online system."
              onClick={() => {}}
            />
            <FeatureCard
              icon="🛡️"
              title="7-Day Return"
              description="Not satisfied? Return your car within 7 days, no questions asked."
              onClick={() => {}}
            />
            <FeatureCard
              icon="🔍"
              title="Vehicle History"
              description="Every car comes with a full Carfax report and inspection."
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20 px-6 md:px-12">
        <div className="w-full">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive Home?</h3>
          <p className="mb-10 text-lg">Join thousands of happy customers who found their perfect car with us.</p>
          <PrimaryButton
            label="View Inventory"
            onClick={handleExplore}
            type="secondary"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 RC CarDeal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;