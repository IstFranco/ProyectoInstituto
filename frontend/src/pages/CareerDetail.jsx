import React from "react";
import { useParams } from "react-router-dom";
import { carreras } from "../data/carreras";

function CareerDetail() {
    const { id } = useParams();
    const carrera = carreras.find(c => c.id === parseInt(id));
    
    if (!carrera) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Carrera no encontrada</h1>
                    <p className="text-gray-600">La carrera que buscas no existe.</p>
                </div>
            </div>
        );
    }

    const años = [
        { key: 'primerAño', label: 'Primer Año' },
        { key: 'segundoAño', label: 'Segundo Año' },
        { key: 'tercerAño', label: 'Tercer Año' },
        { key: 'cuartoAño', label: 'Cuarto Año' }
    ];

    return(
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 shadow-md">
                <div className="max-w-7xl mx-auto px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">{carrera.nombre}</h1>
                </div>
            </div>

            {/* Información de la carrera - fuera del azul */}
            <div className="max-w-7xl mx-auto px-8 py-6 border-b border-gray-300">
                <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                        <p className="text-gray-500 text-xs uppercase mb-1">Tipo</p>
                        <p className="text-gray-900 font-semibold">{carrera.tipo}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase mb-1">Duración</p>
                        <p className="text-gray-900 font-semibold">{carrera.duracion}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase mb-1">Turno</p>
                        <p className="text-gray-900 font-semibold">{carrera.turno}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase mb-1">Modalidad</p>
                        <p className="text-gray-900 font-semibold">{carrera.modalidad}</p>
                    </div>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="max-w-7xl mx-auto px-8 py-10">
                
                {/* Descripción */}
                <div className="mb-10 pb-8 border-b border-gray-300">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        Descripción
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">{carrera.descripcion}</p>
                </div>

                {/* Plan de Estudios */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Plan de Estudios
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {años.map(({ key, label }) => (
                            carrera.planEstudio[key] && (
                                <div key={key} className="border border-gray-300 p-5">
                                    <h3 className="text-lg font-bold text-blue-600 mb-3 pb-2 border-b border-gray-200">
                                        {label}
                                    </h3>
                                    <ul className="space-y-2">
                                        {carrera.planEstudio[key].map((materia, index) => (
                                            <li 
                                                key={index}
                                                className="text-gray-800 text-sm py-1 px-2 hover:bg-gray-100 border-l-2 border-transparent hover:border-blue-600 transition-all"
                                            >
                                                {materia.nombre}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* Botón de descarga */}
                <div className="mt-10 pt-8 border-t border-gray-300">
                    <a href={carrera.pdfPlan} download>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 text-sm transition-colors">
                            DESCARGAR PLAN COMPLETO (PDF)
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CareerDetail;