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
                    ? 'bg-[#FFF]/80 backdrop-blur-xl '
                    : 'bg-white/90 backdrop-blur-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative">
                            {/* <div className="absolute inset-0 bg-[#1188CC]  rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div> */}
                            <div className="relative p-2.5 rounded-2xl transform group-hover:scale-105 transition-transform">
                                <Activity className="w-7 h-7  text-[#1188CC]" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold  bg-[#1188CC] bg-clip-text text-transparent">
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
                                        ? 'bg-[#0578FF]  text-white '
                                        : 'text-[#222266] hover:bg-blue-50 '
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
                        {isMenuOpen ? <X className="w-6 h-6 text-text-[#222266]" /> : <Menu className="w-6 h-6 text-slate-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100  animate-slideDown">
                    <div className="px-4 py-4 space-y-2">
                        {['Accueil', 'analytics', 'Évaluation'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="block px-4 py-3 rounded-xl font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav