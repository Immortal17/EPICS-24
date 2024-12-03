import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold text-white">AgroTech</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;