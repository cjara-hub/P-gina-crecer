import React from 'react';
import logoSrc from '../assets/logo.png'; // Asegúrate que la ruta sea la correcta

const Logo: React.FC = () => { // No necesitas la prop 'className' por ahora
  return (
    // Contenedor principal
    <div className="flex items-center justify-start"> {/* justify-start alinea a la izquierda */}
      <a href="#inicio" aria-label="Volver al inicio">
        {/* Cambia las clases aquí para controlar el tamaño */}
        <img 
          src={logoSrc} 
          alt="Logo de Fundación Crecer Consultora Educacional"
          className="h-12 w-auto" // Reducimos la altura a 'h-12' (48px), puedes ajustarlo
        />
      </a>
    </div>
  );
};

export default Logo;
