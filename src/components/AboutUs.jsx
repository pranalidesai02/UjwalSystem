
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <header className="bg-blue-500 text-white p-4 rounded">
        <h1 className="text-3xl">About Us</h1>
      </header>
      <nav className="mt-4 bg-gray-200 p-2 rounded">
        <ul className="flex space-x-4">
          <li><a href="/" className="text-blue-500">Home</a></li>
          <li><a href="/services" className="text-blue-500">Services</a></li>
          <li><a href="/product" className="text-blue-500">Product</a></li>
          <li><a href="/aboutus" className="text-blue-500 active">About Us</a></li>
          <li><a href="/contact" className="text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <main className="mt-4 grid grid-cols-4 gap-4">
        <aside className="col-span-1 bg-white p-4 rounded shadow">
          <div className="box bg-blue-100 p-2 rounded mb-4">
            <h4 className="text-lg">Project</h4>
          </div>
          <div className="sample bg-white p-2 rounded shadow">
            <ul>
              <li><a href="http://www.realview.in" className="text-blue-500">Real View</a></li>
              <li><a href="http://www.ezpropbuy.com" className="text-blue-500">Ez prop buy</a></li>
              <li><a href="http://www.karwarkonkanmaratha.org" className="text-blue-500">Community website</a></li>
            </ul>
          </div>
          <div className="box bg-blue-100 p-2 rounded mb-4">
            <h4 className="text-lg">NEWS Update</h4>
          </div>
          <div className="sample bg-white p-2 rounded shadow mb-4">
            <p>news news</p>
          </div>
          <div className="bg-white p-4 rounded shadow" style={{ backgroundImage: 'url(newsbox.png)' }}>
            <h5 className="text-blue-500">Newsletter Signup</h5>
            <input type="text" className="w-full p-2 border rounded" placeholder="Enter your email" />
            <button className="text-green-500 font-bold"> </button>
          </div>
        </aside>
        <section className="col-span-3 bg-white p-4 rounded shadow">
          <h2 className="text-2xl">About Us Content</h2>
          <p>Details about the company...</p>
        </section>
      </main>
      <footer className="mt-4 text-center text-gray-600">
        &copy; 2023 Ujwal Systems. All rights reserved.
      </footer>
    </div>
  );
}

export default AboutUs;
