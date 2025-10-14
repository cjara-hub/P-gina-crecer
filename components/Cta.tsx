
import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="bg-crecer-brown">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    ¿Listos para dar el siguiente paso?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Contáctanos hoy mismo y descubre cómo podemos ayudar a tu institución a crecer y alcanzar sus metas educativas.
                </p>
                <a 
                    href="#contacto" 
                    className="bg-crecer-blue text-white font-bold py-3 px-8 rounded-full hover:bg-crecer-blue-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
                >
                    Hablemos de tu proyecto
                </a>
            </div>
        </section>
    );
}

export default Cta;
