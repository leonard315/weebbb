import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../css/pages/user/LandingPage.jsx";
import CarListingPage from "../css/pages/user/CarListingPage.jsx";
import OrderPage from "../css/pages/user/order.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing" element={<CarListingPage />} />
      <Route path="/cart" element={<OrderPage />} />
    </Routes>
  );
}

export default App;