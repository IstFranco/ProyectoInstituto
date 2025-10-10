import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CareerCard from "../components/CareerCard";
import { carreras } from "../data/carreras";

function AnimatedCareerCard({ carrera }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 h-full ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <CareerCard carrera={carrera} />
        </div>
    );
}

function Home() {
    const navigate = useNavigate();
    
    const scrollToCards = () => {
        document.getElementById('carreras').scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-white py-12 md:py-24 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    {/* Logo */}
                    <div className="mb-6 md:mb-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-gray-600 text-4xl md:text-5xl font-bold">Logo</span>
                        </div>
                    </div>
                
                    {/* Nombre del Instituto */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
                        Instituto de Formación
                        <br />
                        Docente y Técnica N° 215
                    </h1>
                
                    {/* Lema */}
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
                        Institución de nivel superior que brinda formación académica con títulos oficiales,
                        orientada al desarrollo profesional y a una rápida inserción laboral.
                    </p>

                    {/* Flecha para scrollear */}
                    <div className="animate-bounce">
                        <button
                            onClick={scrollToCards}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Scroll para ver carreras"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sección de Carreras */}
            <div id="carreras" className="max-w-6xl mx-auto px-8 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Nuestras Carreras
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {carreras.map(carrera => (
                        <AnimatedCareerCard key={carrera.id} carrera={carrera} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;