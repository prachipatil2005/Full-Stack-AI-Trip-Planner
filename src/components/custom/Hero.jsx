import React from 'react';
import { Button } from '../ui/button';

import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white py-16 min-h-screen overflow-hidden">
      {/* Animated Airplane */}
      <div className="absolute animate-flyAirplane z-10">
  <img src="/aeroplane.png" alt="Airplane" className="w-[400px] h-[400px] object-contain" />
</div>


      {/* Heading */}
      <h1 className="font-extrabold text-[50px] text-center max-w-3xl">
        <span className="text-white">Discover Your Next Adventure with AI:</span> <br />
        Personalized Itineraries at Your Fingertips
      </h1>

      {/* Description */}
      <p className="text-xl text-white text-center max-w-lg mx-auto mt-6 opacity-80">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* Button */}
      <Link to={'/create-trip'}>
        <Button className="mt-8 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Get Started, It's Free.
        </Button>
      </Link>

      {/* Travel Images Grid with Bigger Size */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        <img src='/tripLogo.png' alt="Travel 1" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
        <img src='/tripLogo.png' alt="Travel 2" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
        <img src='/tripLogo.png' alt="Travel 3" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
        <img src='/tripLogo.png' alt="Travel 4" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
        <img src='/tripLogo.png' alt="Travel 5" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
        <img src='/tripLogo.png' alt="Travel 6" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
      </div>
    </div>
  );
}

export default Hero;
