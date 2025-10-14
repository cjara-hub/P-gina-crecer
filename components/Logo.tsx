import React from 'react';
import Image from 'next/image'; // Importa el componente Image

const Logo: React.FC<{ className?: string }> = ({ className = 'h-24' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="#inicio" aria-label="Volver al inicio">
        <Image 
          src="/assets/logo.png" 
          alt="Logo de Fundación Crecer Consultora Educacional"
          width={150} // Debes especificar un ancho (ejemplo)
          height={60} // Debes especificar un alto (ejemplo)
          className="h-full w-auto" // Puedes mantener tus clases para responsive
        />
      </a>
    </div>
  );
};

export default Logo;
