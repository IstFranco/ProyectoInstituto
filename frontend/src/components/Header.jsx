import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const goHome = () => {
        navigate('/');
        setIsOpen(false);
    };

    return (
        <>
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 text-white flex justify-between items-center transition-all duration-300 z-30 ${
                scrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 backdrop-blur-md p-3 shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 p-4'
            }`}>
                {/* Botón hamburguesa redondeado */}
                <button
                    className="md:hidden w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                    onClick={toggleSidebar}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h2 className={`font-bold cursor-pointer transition-all duration-300 md:mr-auto mx-auto md:mx-0 ${
                    scrolled ? 'text-xl' : 'text-2xl'
                }`} onClick={goHome}>
                    Instituto X
                </h2>
                
                {/* Navbar para desktop */}
                <nav className="hidden md:flex space-x-6">
                    <span className="cursor-pointer hover:text-white/80 transition-colors" onClick={goHome}>Inicio</span>
                    <span className="cursor-pointer hover:text-white/80 transition-colors">Carreras</span>
                    <span className="cursor-pointer hover:text-white/80 transition-colors">Contacto</span>
                    <span className="cursor-pointer hover:text-white/80 transition-colors">Inscripciones</span>
                </nav>
            </header>

            {/* Espaciador */}
            <div className="h-16"></div>

            {/* Sidebar para mobile */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transform transition-transform duration-300 z-50 md:hidden shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button
                    className="text-3xl absolute top-4 right-4 hover:text-gray-300 transition-colors"
                    onClick={toggleSidebar}
                >
                    ✕
                </button>
                <nav className="mt-20">
                    <ul className="space-y-2 px-4">
                        <li className="cursor-pointer hover:bg-white/10 p-3 rounded transition-all" onClick={goHome}>Inicio</li>
                        <li className="cursor-pointer hover:bg-white/10 p-3 rounded transition-all">Carreras</li>
                        <li className="cursor-pointer hover:bg-white/10 p-3 rounded transition-all">Contacto</li>
                        <li className="cursor-pointer hover:bg-white/10 p-3 rounded transition-all">Inscripciones</li>
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}

export default Header;