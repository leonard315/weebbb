import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../src/assets/components/ui/primarybutton.jsx';
import NavBar from '../../../src/assets/components/ui/navbar.jsx';

const CarListingPage = () => {
  const allCars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: '$25,000',
      imageUrl: 'https://images.pexels.com/photos/17050963/pexels-photo-17050963/free-photo-of-a-white-toyota-camry-trd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      price: '$22,000',
      imageUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2023,
      price: '$35,000',
      imageUrl: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      make: 'BMW',
      model: '3 Series',
      year: 2021,
      price: '$40,000',
      imageUrl: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      make: 'Audi',
      model: 'A4',
      year: 2022,
      price: '$42,000',
      imageUrl: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    { id: 6, make: 'Mercedes-Benz', model: 'C-Class', year: 2023, price: '$45,000', imageUrl: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredCars = useMemo(() => {
    if (!searchQuery) return allCars;
    return allCars.filter(car =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allCars]);

  const handleAddToCart = (car) => {
    console.log(`Added ${car.make} ${car.model} to cart.`);
    // In a real application, you would typically dispatch an action to a state management store here.
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
          {/* --- Filter Sidebar (Dashboard Element) --- */}
          <aside className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
              
              {/* Search Input */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Make or model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Make Filter */}
              <div className="mb-6">
                <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                <select id="make" className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500 transition">
                  <option>All Makes</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Ford</option>
                  <option>BMW</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <input type="range" id="price" min="10000" max="50000" className="w-full" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$10k</span>
                  <span>$50k</span>
                </div>
              </div>
            </div>
          </aside>

          {/* --- Main Content: Car Listings --- */}
          <main className="lg:w-3/4">
            {/* Page Header with Back Button */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Car Inventory</h1>
              <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back
              </button>
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCars.length > 0 ? (
                filteredCars.map(car => (
                  <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <img className="h-48 w-full object-cover" src={car.imageUrl} alt={`${car.make} ${car.model}`} />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900">{car.make} {car.model}</h3>
                      <p className="text-gray-600 mt-1">Year: {car.year}</p>
                      <p className="text-indigo-600 font-bold text-2xl my-4 flex-grow">{car.price}</p>
                      <PrimaryButton 
                        label="Add to Cart" 
                        type="secondary" 
                        onClick={() => handleAddToCart(car)} 
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 xl:col-span-3 text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-700">No cars found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CarListingPage;