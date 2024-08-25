// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-500 text-white p-4 rounded">
        <h1 className="text-3xl">Our Services</h1>
      </header>
      <nav className="mt-4 bg-gray-200 p-2 rounded">
        <ul className="flex space-x-4">
          <li><a href="/" className="text-blue-500">Home</a></li>
          <li><a href="/services" className="text-blue-500 active">Services</a></li>
          <li><a href="/product" className="text-blue-500">Product</a></li>
          <li><a href="/aboutus" className="text-blue-500">About Us</a></li>
          <li><a href="/contact" className="text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <main className="mt-4">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl">Our Services</h2>
          <p>Details about the services offered...</p>
        </section>
      </main>
      <footer className="mt-4 text-center text-gray-600">
        &copy; 2023 Ujwal Systems. All rights reserved.
      </footer>
    </div>
  );
}

export default Services;

