
import React from 'react';
import { AcademicCapIcon, SparklesIcon, UsersIcon } from './icons/Icons';


const About: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-crecer-brown">Quiénes Somos</h2>
          <p className="text-lg text-gray-600 mt-2">Nuestra pasión es el crecimiento educativo.</p>
          <div className="mt-4 w-24 h-1 bg-crecer-blue mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/education/600/400" 
              alt="Equipo de Fundación Crecer en una sesión de trabajo" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Fundación Crecer</strong> es una consultora educacional conformada por un equipo multidisciplinario de profesionales con vasta experiencia en el ámbito de la educación. Nuestra misión es acompañar a las instituciones educativas en sus procesos de mejora continua, ofreciendo soluciones innovadoras y personalizadas.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-crecer-blue text-white rounded-full flex items-center justify-center mr-4">
                  <SparklesIcon className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-crecer-brown">Nuestra Misión</h3>
                  <p className="text-gray-600">Potenciar la calidad educativa a través de estrategias pedagógicas y de gestión que inspiren el aprendizaje y fomenten el desarrollo integral de los estudiantes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-crecer-green text-white rounded-full flex items-center justify-center mr-4">
                  <UsersIcon className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-crecer-brown">Nuestro Enfoque</h3>
                  <p className="text-gray-600">Trabajamos de forma colaborativa con directivos, docentes y personal de apoyo para construir comunidades de aprendizaje sólidas y efectivas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
