import React from 'react'
import {
    Activity,
    Heart,
    Users,
    ChevronRight
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#14143D]  text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-800  rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative p-2.5 rounded-2xl transform group-hover:scale-105 transition-transform">
                                    <Activity className="w-7 h-7  text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black">RenalCare</h3>
                                <p className="text-xs text-blue-300 font-medium">Prévention CKD</p>
                            </div>
                        </div>
                        <p className="text-blue-200 font-medium leading-relaxed mb-6">
                            Votre partenaire de confiance pour la prévention et la détection précoce de l'insuffisance rénale chronique.
                        </p>
                        <div className="flex space-x-3">
                            {['facebook', 'twitter',  'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
                                >
                                    {social === 'facebook' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                    ) : social === 'twitter' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    )}

                                    {/* <Users className="w-5 h-5" /> */}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {[
                        {
                            title: 'Navigation',
                            links: ['Accueil', 'Cartographie', 'Évaluation', 'À Propos']
                        },
                        {
                            title: 'Ressources',
                            links: ['Blog Santé', 'FAQ', 'Guides Pratiques', 'Témoignages']
                        },
                        {
                            title: 'Légal',
                            links: ['Mentions Légales', 'Confidentialité', 'CGU', 'Contact']
                        }
                    ].map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-black mb-6 text-blue-300">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-blue-100 hover:text-white font-medium transition-colors inline-flex items-center group"
                                        >
                                            <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-blue-200 font-medium text-sm">
                            © 2026 RenalCare. Tous droits réservés. Conçu avec <Heart className="w-4 h-4 text-red-500 inline-block mx-1" /> par l'équipe RenalCare.
                        </p>
                        <div className="flex items-center space-x-4 text-sm font-semibold">
                            <a href="mailto:contact@renalcare.bj" className="text-blue-200 hover:text-white transition-colors">
                                contact@renalcare.bj
                            </a>
                            <span className="text-blue-400">|</span>
                            <a href="tel:+22912345678" className="text-blue-200 hover:text-white transition-colors">
                                +229 12 34 56 78
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer