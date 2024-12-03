import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold text-emerald-400">AgroTech</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionizing Agriculture<br />Through Innovation
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
            Empowering farmers with cutting-edge technology and sustainable solutions
            for a better tomorrow in agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;