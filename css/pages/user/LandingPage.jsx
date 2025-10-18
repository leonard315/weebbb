// src/pages/LandingPage.jsx
import React from 'react';
import PrimaryButton from '../components/primarybutton';
import NavBar from '../components/navbar';
import FeatureCard from '../components/card';

const LandingPage = () => {
  // Handler functions
  const handleExplore = (index) => {
    console.log(`Exploring car listing at index: ${index}`);
    // In a real app, this would navigate to the car listing page.
    // For example: navigate(`/cars/${index}`);
  };

  const handleOrder = () => {
    console.log("Navigating to order page");
    // In a real app, this would navigate to the order page.
    // For example: navigate('/order');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-20 md:py-32 gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Modern Web Apps with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Ease</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Create fast, responsive, and modern web applications using React and Tailwind CSS. Get started in minutes with our flexible UI components and streamlined workflow.
          </p>
          <PrimaryButton
            label="Order Now →"
            onClick={handleOrder}
            type="primary"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Modern web design"
            className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-gray-600 text-lg">Powerful features designed to accelerate your development process</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FeatureCard
              icon="⚡"
              title="Fast Performance"
              description="Experience lightning-fast load times and optimized components that deliver seamless user experiences."
              onClick={() => handleExplore(0)}
            />

            {/* Card 2 */}
            <FeatureCard
              icon="📱"
              title="Responsive Design"
              description="Your website looks stunning on all devices, from mobile to desktop, with adaptive layouts."
              onClick={() => handleExplore(1)}
            />

            {/* Card 3 */}
            <FeatureCard
              icon="🎨"
              title="Easy Customization"
              description="Tailwind's utility-first classes make styling fast, flexible, and maintainable at scale."
              onClick={() => handleExplore(2)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-center py-20 px-6 md:px-12">
        <div className="w-full">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Next Project?</h3>
          <p className="mb-10 text-lg">Join thousands of developers who trust our modern UI components to build exceptional experiences.</p>
          <PrimaryButton
            label="Explore our Products"
            onClick={handleExplore}
            type="outline"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 Put your name here. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;