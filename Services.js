import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="p-4 bg-white shadow-md">🌍 Web Development</div>
        <div className="p-4 bg-white shadow-md">📱 App Development</div>
        <div className="p-4 bg-white shadow-md">📈 SEO Optimization</div>
      </div>
    </section>
  );
};

export default Services;
