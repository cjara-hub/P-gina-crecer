
import React, { useState } from 'react';
import Logo from './Logo';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-crecer-blue transition-colors duration-300 font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio">Inicio</NavLink>
            <NavLink href="#quienes-somos">Quiénes Somos</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
            <a href="#contacto" className="bg-crecer-blue text-white font-bold py-2 px-6 rounded-full hover:bg-crecer-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contáctanos
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
            <NavLink href="#inicio">Inicio</NavLink>
            <NavLink href="#quienes-somos">Quiénes Somos</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
            <a href="#contacto" className="bg-crecer-blue text-white font-bold py-2 px-6 rounded-full hover:bg-crecer-blue-dark transition-all duration-300 shadow-lg">
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
