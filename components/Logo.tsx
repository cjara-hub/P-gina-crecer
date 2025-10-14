import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-24' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="#inicio" aria-label="Volver al inicio">
        <img 
          src="/assets/logo.png" 
          alt="Logo de Fundación Crecer Consultora Educacional"
          className="h-full w-auto"
        />
      </a>
    </div>
  );
};

export default Logo;
