import React from 'react';
import Logo from './Logo';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-100 text-gray-600 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Logo className="h-20" />
            <p className="mt-4 max-w-md">
              Somos tu aliado estratégico en la búsqueda de la excelencia educativa.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-crecer-brown mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-crecer-blue transition-colors">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-crecer-blue transition-colors">Quiénes Somos</a></li>
              <li><a href="#servicios" className="hover:text-crecer-blue transition-colors">Servicios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-crecer-brown mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 text-crecer-blue"/>
                <span>Portugal 412, Oficina 609, <br/>Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-crecer-blue"/>
                <a href="tel:+56912345678" className="hover:text-crecer-blue transition-colors">+56 9 1234 5678</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-crecer-blue"/>
                <a href="mailto:contacto@consultoracrecer.cl" className="hover:text-crecer-blue transition-colors">contacto@consultoracrecer.cl</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fundación Crecer Consultora Educacional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
