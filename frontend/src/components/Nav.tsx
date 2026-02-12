import React, { useEffect, useState } from 'react'
import { Activity, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Nav = ({routeFocus = 0}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-100/50'
                    : 'bg-white/80 backdrop-blur-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600  rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                            <div className="relative p-2.5 rounded-2xl transform group-hover:scale-105 transition-transform">
                                <Activity className="w-7 h-7  text-blue-600" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold  bg-blue-600 bg-clip-text text-transparent">
                                RenalCare
                            </h1>
                            
                            <p className="text-xs text-slate-500 font-medium -mt-0.5">Prévention CKD</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {['Accueil', 'analytics', 'Évaluation'].map((item, idx) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${idx === routeFocus
                                        ? 'bg-blue-600  text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300'
                                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-slideDown">
                    <div className="px-4 py-4 space-y-2">
                        {['Accueil', 'Cartographie', 'Évaluation'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav