import React from 'react';
import PrimaryButton from '../../../src/assets/components/ui/primarybutton.jsx';

const CarListingPage = () => {
  const cars = [
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

  const handleAddToCart = (car) => {
    console.log(`Added ${car.make} ${car.model} to cart.`);
    // In a real application, you would typically dispatch an action to a state management store here.
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Browse Our Inventory</h1>
        
        <input
          type="text"
          placeholder="Search by make or model..."
          className="block w-full max-w-md mx-auto px-4 py-3 border border-gray-300 rounded-lg mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl">
              <img className="h-48 w-full object-cover" src={car.imageUrl} alt={`${car.make} ${car.model}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold">{car.make} {car.model}</h3>
                <p className="text-gray-600">Year: {car.year}</p>
                <p className="text-indigo-600 font-bold text-2xl my-4">{car.price}</p>
                <PrimaryButton label="Add to Cart" type="secondary" onClick={() => handleAddToCart(car)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListingPage;