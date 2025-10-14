
import React from 'react';
import { LightBulbIcon, AcademicCapIcon, UserGroupIcon, ClipboardDocumentListIcon } from './icons/Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4" style={{ borderColor: color }}>
            <div className="flex-shrink-0 w-16 h-16 text-white rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-crecer-brown mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <LightBulbIcon className="w-8 h-8"/>,
      title: "Consultoría Estratégica",
      description: "Análisis y diagnóstico institucional para el diseño de planes de mejora educativa a corto, mediano y largo plazo.",
      color: "#00B2E3" // crecer-blue
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8"/>,
      title: "Capacitación Docente",
      description: "Programas de formación y actualización en metodologías activas, evaluación formativa, y uso de tecnologías en el aula.",
      color: "#8DC63F" // crecer-green
    },
    {
      icon: <UserGroupIcon className="w-8 h-8"/>,
      title: "Asesoramiento Pedagógico",
      description: "Acompañamiento en el diseño curricular, la planificación de clases y la gestión de la convivencia escolar.",
      color: "#F7941D" // crecer-orange
    },
    {
      icon: <ClipboardDocumentListIcon className="w-8 h-8"/>,
      title: "Evaluación Institucional",
      description: "Desarrollo de sistemas de evaluación interna y externa para medir el impacto de los proyectos y la calidad educativa.",
      color: "#EC008C" // crecer-pink
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-crecer-brown">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-2">Soluciones integrales para el ecosistema educativo.</p>
          <div className="mt-4 w-24 h-1 bg-crecer-blue mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
