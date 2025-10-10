import React from "react";
import { useNavigate } from "react-router-dom";

function CareerCard({ carrera }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/carrera/${carrera.id}`);
    };

    return(
        <div
            onClick={handleClick}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full flex flex-col"
        >
            {/* Imagen */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-6xl opacity-50">📚</span>
            </div>

            {/* Contenido */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {carrera.nombre}
                </h3>
            
                <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{carrera.duracion}</span>
                </div>

                <div className="pt-3 border-t border-gray-200 mt-auto">
                    <div className="text-blue-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                        Ver más
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerCard;