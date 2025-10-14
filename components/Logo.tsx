import React from 'react';
// 1. Importa la imagen desde su nueva ubicación
import logoSrc from '../assets/logo.png'; 

const Logo: React.FC<{ className?: string }> = ({ className = 'h-24' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="#inicio" aria-label="Volver al inicio">
        <img 
          // 2. Usa la variable importada en el 'src'
          src={logoSrc} 
          alt="Logo de Fundación Crecer Consultora Educacional"
          className="h-full w-auto"
        />
      </a>
    </div>
  );
};

export default Logo;
