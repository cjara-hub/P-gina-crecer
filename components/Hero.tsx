
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-white pt-24 pb-32">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-crecer-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-crecer-blue rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-crecer-pink rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-crecer-brown leading-tight mb-4">
          Transformando la Educación, <br />
          <span className="text-crecer-blue">Impulsando el Futuro.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Brindamos asesoramiento, capacitación y consultoría de excelencia para potenciar el desarrollo de instituciones educativas en nivel primario y secundario.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#servicios" className="bg-crecer-blue text-white font-bold py-3 px-8 rounded-full hover:bg-crecer-blue-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Nuestros Servicios
          </a>
          <a href="#quienes-somos" className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Saber Más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
