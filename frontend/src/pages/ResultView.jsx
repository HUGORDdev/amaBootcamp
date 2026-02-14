import React from 'react';
import { AlertTriangle, CheckCircle, Activity, Info, FileText } from 'lucide-react';

const ResultView = ({ data, onReset }) => {
    if (!data) return null;

    // Calculer la couleur en fonction du score
    const getScoreColor = (score) => {
        if (score > 0.6) return 'text-red-500 stroke-red-500';
        if (score > 0.3) return 'text-orange-500 stroke-orange-500';
        return 'text-green-500 stroke-green-500';
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8 animate-in fade-in duration-700">

            {/* Header Actions */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-[#222266]">Rapport d'Analyse Rénal AI</h2>
                <button
                    onClick={onReset}
                    className="px-4 py-2 hover:bg-[#0578FF] hover:text-white  hover:scale-105 cursor-pointer bg-slate-200 text-[#222266] rounded-xl font-bold transition-all"
                >
                    Nouvelle Analyse
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/*   SCORE DE RISQUE */}
                <div className="bg-white p-8 rounded-[2.5rem]  border border-slate-100 flex flex-col items-center justify-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Score de Risque Global</p>

                    <div className="relative w-48 h-48">
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="96" cy="96" r="80" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                            <circle
                                cx="96" cy="96" r="80" fill="none" strokeWidth="12"
                                strokeDasharray={2 * Math.PI * 80}
                                strokeDashoffset={2 * Math.PI * 80 * (1 - data.risk_score)}
                                strokeLinecap="round"
                                className={`${getScoreColor(data.risk_score)} transition-all duration-1000`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-black text-slate-800">{(data.risk_score * 100).toFixed(0)}%</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Probabilité</span>
                        </div>
                    </div>

                    <div className="mt-8 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Verdict Clinique</p>
                        <p className="text-xl font-black text-slate-800">{data.stage_label}</p>
                    </div>
                </div>

                {/*   FACTEURS D'IMPACT (SHAP) */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem]  border border-slate-100">
                    <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                        <Activity className="text-primary" size={20} />
                        Facteurs Déterminants (SHAP)
                    </h3>
                    <div className="space-y-6">
                        {data.top_factors.map((factor, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-slate-600">{factor.feature}</span>
                                    <span className="text-slate-900">+{(factor.impact * 100).toFixed(1)}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${Math.min(factor.impact * 300, 100)}%` }} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*  RECOMMANDATIONS */}
                <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem]  text-[#222266] relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <Info className="text-blue-400" size={24} />
                            </div>
                            Protocole de Prise en Charge
                        </h3>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.ai_recommendations.map((rec, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-[#222266] leading-relaxed">{rec}</p>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                    <h4 className='flex items-center gap-3  mt-5'>
                            {/* <div className="p-2 bg-blue-500/20 rounded-lg"> */}
                                <Info className="text-red-400" size={24} />
                            {/* </div> */}
                            <span className="ml-2 text-sm text-red-400 font-light ">Ces recommandations sont générées par une IA à titre informatif et ne remplacent en aucun cas l'avis, le diagnostic ou la prescription d'un professionnel de santé qualifié </span>

                        </h4>
                </div>
                

            </div>
        </div>
    );
};

export default ResultView;