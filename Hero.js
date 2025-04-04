import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to MyCompany</h1>
      <p className="text-lg mt-2">We provide the best solutions for your business.</p>
      <a href="#services" className="mt-4 bg-white text-blue-600 px-4 py-2 rounded">Learn More</a>
    </section>
  );
};

export default Hero;
