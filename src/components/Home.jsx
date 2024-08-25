// src/components/Home.jsx
import React from 'react';
import {assets} from '../assets/assets'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <div  className='inset-x-0 top-0 h-52 bg-gradient-to-r from-cyan-500 to-blue-500' >
          <h1 className="text-white p-4 text-4xl font-bold">Welcome to Ujwal Systems</h1>             
        </div>
      
      <nav className="mt-4 bg-gray-200 p-4 rounded shadow flex justify-center">
        <ul className="flex space-x-8">
          <li><a href="/" className="text-blue-500 hover:text-blue-700">Home</a></li>
          <li><a href="/services" className="text-blue-500 hover:text-blue-700">Services</a></li>
          <li><a href="/product" className="text-blue-500 hover:text-blue-700">Product</a></li>
          <li><a href="/aboutus" className="text-blue-500 hover:text-blue-700">About Us</a></li>
          <li><a href="/contact" className="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>
      <main className="mt-8 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="col-span-1 bg-white p-4 rounded shadow">
            <div className="box bg-blue-100 p-4 rounded mb-4 shadow">
              <h4 className="text-lg font-semibold">Project</h4>
            </div>
            <div className="sample bg-white p-4 rounded shadow mb-4">
              <ul className="space-y-2">
                <li><a href="http://www.realview.in" className="text-blue-500 hover:text-blue-700">Real View</a></li>
                <li><a href="http://www.ezpropbuy.com" className="text-blue-500 hover:text-blue-700">Ez prop buy</a></li>
                <li><a href="http://www.karwarkonkanmaratha.org" className="text-blue-500 hover:text-blue-700">Community website</a></li>
              </ul>
            </div>
            <div className="box bg-blue-100 p-4 rounded mb-4 shadow">
              <h4 className="text-lg font-semibold">NEWS Update</h4>
            </div>
            <div className="sample bg-white p-4 rounded shadow mb-4">
              <p>News updates go here...</p>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4" style={{ backgroundImage: 'url(newsbox.png)' }}>
              <h5 className="text-blue-500 font-semibold">Newsletter Signup</h5>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your email" />
              <button className="text-green-500 font-bold mt-2"> </button>
            </div>
          </aside>
          <section className="col-span-3 bg-white p-8 rounded shadow flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Ujwal Systems</h2>
            <p className="text-lg mb-4">Your one-stop solution for all your needs. We offer a wide range of services and products tailored to meet your requirements.</p>
            <img src={assets.airplane2} alt="Welcome" className="w-full rounded shadow mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
                <img src={assets.airplane2} alt="" className="w-full rounded mb-4" />
                <h3 className="text-xl font-semibold">Service 1</h3>
                <p className="text-center">Description of Service 1.</p>
              </div>
              <div className="bg-blue-100 p-4 rounded shadow flex flex-col items-center">
                <img src={assets.airplane2} alt="Service 2" className="w-full rounded mb-4" />
                <h3 className="text-xl font-semibold">Service 2</h3>
                <p className="text-center">Description of Service 2.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="mt-8 p-4 text-center text-gray-600 bg-white rounded shadow">
        &copy; 2023 Ujwal Systems. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
