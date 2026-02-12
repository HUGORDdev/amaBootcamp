import React, { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup
// } from 'react-simple-maps';
import {
  Activity,
  TrendingUp,
  Users,
  AlertTriangle,
  Heart,
  Target,
  MapPin,
  ChevronDown,
  Info
} from 'lucide-react';

import {ageStadeData, creatinineStadeData, htaComparisonData, departmentData, beninGeoJSON} from '../constants/constant';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


// ============= COMPOSANT PRINCIPAL =============

const AnalyticsDashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');

  // Calcul des KPIs
  const kpis = useMemo(() => {
    const totalPatients = departmentData.reduce((sum, d) => sum + d.patients, 0);
    const totalRisqueElevé = departmentData.reduce((sum, d) => sum + d.risqueElevé, 0);
    const patientsHTA = 205; 
    const patientsSansHTA = 104;
    const casHtaRisque = 95;
    const casSansHtaRisque = 28;
    
    return {
      pourcentageRisqueElevé: ((totalRisqueElevé / totalPatients) * 100).toFixed(1),
      ratioHTA: (casHtaRisque / patientsHTA / (casSansHtaRisque / patientsSansHTA)).toFixed(2),
      f1Score: 92.4,
      totalPatients: totalPatients
    };
  }, []);

  // Fonction pour obtenir la couleur selon le risque
  const getColorScale = (scoreMoyen) => {
    if (scoreMoyen >= 0.65) return '#DC2626'; 
    if (scoreMoyen >= 0.60) return '#EF4444'; 
    if (scoreMoyen >= 0.55) return '#F97316'; 
    if (scoreMoyen >= 0.50) return '#F59E0B'; 
    if (scoreMoyen >= 0.45) return '#3B82F6'; 
    return '#60A5FA'; 
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-emerald-50/20  ">p-4
      <Nav routeFocus={1}/>
      <div className=" mt-32 max-w-450 mx-auto space-y-8 mb-5 md:p-8">
        {/* Header */}
        <div className="bg-white rounded-3xl  border border-slate-100 p-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black bg-blue-600 bg-clip-text text-transparent mb-3">
                Tableau de Bord Analytique CKD
              </h1>
              <p className="text-xl text-slate-600 font-semibold">
                Analyse épidémiologique de l'Insuffisance Rénale Chronique au Bénin
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-emerald-100 px-5 py-3 rounded-2xl border border-emerald-200">
              
              <span className="text-sm font-bold text-emerald-700">Données  2026</span>
            </div>
          </div>
        </div>

        {/* Section KPI - Top Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center ">
          {/* KPI 1: Risque Élevé */}
          <div className="group bg-red-600/80   rounded-2xl p-6  hover:shadow-md transition-all duration-300 transform hover:-translate-y-1   ">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30">
                <AlertTriangle className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold text-red-100 bg-white/20 px-3 py-1.5 rounded-full">
                Stade 4 & 5
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tight">
                {kpis.pourcentageRisqueElevé}%
              </div>
              <div className="text-sm font-bold text-red-50">
                Patients à Risque Élevé
              </div>
              <div className="text-xs text-red-100 font-semibold pt-2 border-t border-white/30 ">
                {departmentData.reduce((sum, d) => sum + d.risqueElevé, 0)} patients nécessitent une attention immédiate
              </div>
            </div>
          </div>

          {/* KPI 2: Impact HTA */}
          <div className="group bg-indigo-500 min-w-85  rounded-2xl p-6  hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30">
                <Heart className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold text-purple-100 bg-white/20 px-3 py-1.5 rounded-full">
                Ratio
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tight">
                {kpis.ratioHTA}x
              </div>
              <div className="text-sm font-bold text-purple-50">
                Impact de l'HTA
              </div>
              <div className="text-xs text-purple-100 font-semibold pt-2 border-t border-white/30">
                L'HTA multiplie le risque par {kpis.ratioHTA}
              </div>
            </div>
          </div>

          {/* KPI 3: F1-Score IA */}
          <div className="group bg-[#28A745] min-w-85 rounded-2xl p-6 shadow-md hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30">
                <Activity className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold text-emerald-100 bg-white/20 px-3 py-1.5 rounded-full">
                Modèle IA
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tight">
                {kpis.f1Score}%
              </div>
              <div className="text-sm font-bold text-emerald-50">
                F1-Score du Modèle
              </div>
              <div className="text-xs text-emerald-100 font-semibold pt-2 border-t border-white/30">
                Précision élevée de prédiction
              </div>
            </div>
          </div>

          {/* KPI 4: Total Patients */}
          <div className="group min-w-85 bg-blue-600 rounded-2xl p-6  hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30">
                <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-xs font-bold text-blue-100 bg-white/20 px-3 py-1.5 rounded-full">
                Cohorte
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tight">
                {kpis.totalPatients}
              </div>
              <div className="text-sm font-bold text-blue-50">
                Patients Analysés
              </div>
              <div className="text-xs text-blue-100 font-semibold pt-2 border-t border-white/30">
                Base de données clinique complète
              </div>
            </div>
          </div>
        </div>

        {/* Section Visualisations - Grille 2x2 */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Graphique A: Âge x Stade (Stacked Bar) */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">
                  Distribution Âge × Stade CKD
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Progression de la maladie selon les tranches d'âge
                </p>
              </div>
              
            </div>
            
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={ageStadeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="ageGroup" 
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                />
                <YAxis 
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                  label={{ value: 'Nombre de Patients', angle: -90, position: 'insideLeft', style: { fill: '#475569', fontWeight: 700 } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '2px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '12px',
                    fontWeight: 600
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px', fontWeight: 700 }}
                  iconType="circle"
                />
                <Bar dataKey="Stade 1" stackId="a" fill="#3B82F6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Stade 2" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Stade 3" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Stade 4" stackId="a" fill="#EF4444" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Stade 5" stackId="a" fill="#DC2626" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 font-semibold">
                  <span className="font-black">Insight:</span> Les patients de 51-70 ans présentent la plus forte concentration de stades avancés (4-5).
                </p>
              </div>
            </div>
          </div>

          {/* Graphique B: Créatinine x Stade (Composed) */}
          <div className="bg-white rounded-2xl  border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">
                  Créatinine Moyenne par Stade
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Corrélation entre biomarqueur et progression
                </p>
              </div>

            </div>
            
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={creatinineStadeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="stade" 
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                  label={{ value: 'Créatinine (mg/L)', angle: -90, position: 'insideLeft', style: { fill: '#475569', fontWeight: 700 } }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                  label={{ value: 'Patients', angle: 90, position: 'insideRight', style: { fill: '#475569', fontWeight: 700 } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '2px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '12px',
                    fontWeight: 600
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px', fontWeight: 700 }}
                  iconType="circle"
                />
                <Bar 
                  yAxisId="right"
                  dataKey="patients" 
                  fill="#60A5FA" 
                  radius={[8, 8, 0, 0]}
                  name="Nombre de Patients"
                >
                  {creatinineStadeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${220 - index * 20}, 70%, 60%)`} />
                  ))}
                </Bar>
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="creatinine" 
                  stroke="#DC2626" 
                  strokeWidth={4}
                  dot={{ fill: '#DC2626', r: 6 }}
                  activeDot={{ r: 8 }}
                  name="Créatinine Moyenne"
                />
              </ComposedChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-900 font-semibold">
                  <span className="font-black">Insight:</span> Augmentation exponentielle de la créatinine avec l'aggravation du stade (387 mg/L au Stade 5).
                </p>
              </div>
            </div>
          </div>

          {/* Graphique C: HTA Comparatif */}
          <div className="bg-white rounded-3xl  border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">
                  Impact HTA sur la Prévalence CKD
                </h3>
                <p className="text-sm text-slate-600 font-semibold">
                  Comparaison Hypertendus vs Non-Hypertendus
                </p>
              </div>
              
            </div>
            
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={htaComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                />
                <YAxis 
                  tick={{ fill: '#475569', fontWeight: 600, fontSize: 12 }}
                  stroke="#94A3B8"
                  label={{ value: 'Nombre de Patients', angle: -90, position: 'insideLeft', style: { fill: '#475569', fontWeight: 700 } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '2px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '12px',
                    fontWeight: 600
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px', fontWeight: 700 }}
                  iconType="circle"
                />
                <Bar dataKey="Stade 1-2" fill="#10B981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Stade 3" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Stade 4-5" fill="#DC2626" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-sm text-purple-900 font-semibold">
                  <span className="font-black">Insight:</span> Les patients hypertendus ont 3.4x plus de risque de développer un CKD de Stade 4-5.
                </p>
              </div>
            </div>
          </div>

          {/* Statistiques Supplémentaires */}
          <div className="bg-white rounded-2xl hover:shadow-md  border  border-slate-100 p-6 text-black">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black mb-1">
                  Métriques Clés du Modèle
                </h3>
                <p className="text-sm text-blue-200 font-semibold">
                  Performance de détection IA
                </p>
              </div>

            </div>

            <div className="space-y-4">
              {[
                { metric: 'Précision', value: '94.2%', color: 'bg-emerald-500 ' },
                { metric: 'Rappel (Recall)', value: '90.8%', color: 'bg-yellow-500 ' },
                { metric: 'F1-Score', value: '92.4%', color: 'bg-red-500 ' },
                { metric: 'AUC-ROC', value: '0.96', color: 'bg-orange-500 ' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-black">{item.metric}</span>
                    <span className={`text-2xl font-black  ${item.color} bg-clip-text text-transparent`}>
                      {item.value}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-linear-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <div className="flex items-center space-x-3 mb-2">
                {/* <Activity className="w-5 h-5 text-emerald-400" /> */}
                <span className="font-bold text-sm">Algorithme</span>
              </div>
              <p className="text-xs text-blue-200 font-semibold">
                Random Forest + gradient Boosting avec validation croisée 10-fold
              </p>
            </div>
          </div>
        </div>

        {/* Section Cartographie du Bénin */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                Cartographie Épidémiologique du Bénin
              </h3>
              <p className="text-lg text-slate-600 font-semibold">
                Distribution géographique des patients à risque élevé (Stade 4-5)
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-100 px-5 py-3 rounded-2xl border border-blue-200">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">12 Départements</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Carte */}
            {/* <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 3000,
                  center: [2.3, 9.3]
                }}
                className="w-full h-150"
              >
                <ZoomableGroup>
                  <Geographies geography={beninGeoJSON}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const deptData = departmentData.find(d => d.nom === geo.properties.name);
                        const fillColor = deptData ? getColorScale(deptData.scoreMoyen) : '#E2E8F0';
                        
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fillColor}
                            stroke="#FFFFFF"
                            strokeWidth={2}
                            style={{
                              default: { outline: 'none' },
                              hover: { 
                                fill: '#1E40AF', 
                                outline: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                              },
                              pressed: { outline: 'none' }
                            }}
                            onMouseEnter={() => {
                              if (deptData) {
                                setTooltipContent(
                                  `${deptData.nom}: ${deptData.risqueElevé} patients à risque élevé (Score: ${(deptData.scoreMoyen * 100).toFixed(0)}%)`
                                );
                              }
                            }}
                            onMouseLeave={() => {
                              setTooltipContent('');
                            }}
                            onClick={() => {
                              if (deptData) {
                                setSelectedDepartment(deptData);
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>

              {/* Tooltip */}
             {/* {tooltipContent && (
                <div className="mt-4 p-4 bg-blue-900 text-white rounded-2xl shadow-xl border-2 border-blue-700">
                  <p className="font-bold text-sm">{tooltipContent}</p>
                </div>
              )}
            </div> */}

            {/* Légende et Stats */}
            <div className="space-y-6">
              {/* Légende des couleurs */}
              <div className="bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border-2 border-slate-200">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center">
                  <ChevronDown className="w-5 h-5 mr-2 text-blue-600" />
                  Échelle de Risque
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Très Élevé', range: '≥ 65%', color: '#DC2626' },
                    { label: 'Élevé', range: '60-64%', color: '#EF4444' },
                    { label: 'Modéré', range: '55-59%', color: '#F97316' },
                    { label: 'Faible', range: '50-54%', color: '#F59E0B' },
                    { label: 'Très Faible', range: '45-49%', color: '#3B82F6' },
                    { label: 'Minimal', range: '< 45%', color: '#60A5FA' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-lg shadow-md border-2 border-white"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm font-bold text-slate-700">{item.label}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded-lg">
                        {item.range}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top 3 Départements */}
              <div className="bg-red-50  rounded-2xl p-6 border-2 border-red-200">
                <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Zones Prioritaires
                </h4>
                <div className="space-y-3">
                  {departmentData
                    .sort((a, b) => b.risqueElevé - a.risqueElevé)
                    .slice(0, 3)
                    .map((dept, idx) => (
                      <div key={dept.id} className="bg-white rounded-xl p-4 border-2 border-red-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">
                              {idx + 1}
                            </div>
                            <span className="font-black text-slate-900">{dept.nom}</span>
                          </div>
                          <span className="text-2xl font-black text-red-600">
                            {dept.risqueElevé}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-semibold">Score Moyen</span>
                          <span className="font-black text-red-700">
                            {(dept.scoreMoyen * 100).toFixed(0)}%
                          </span>
                        </div>
                        <div className="mt-2 h-2 bg-red-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-linear-to-r from-red-600 to-orange-500 rounded-full"
                            style={{ width: `${dept.scoreMoyen * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Détails du département sélectionné */}
              {selectedDepartment && (
                <div className="bg-linear-to-br from-blue-900 to-slate-900 rounded-2xl p-6 text-white shadow-md border-2 border-blue-700">
                  <h4 className="text-lg font-black mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-300" />
                    {selectedDepartment.nom}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <span className="text-sm font-semibold text-blue-200">Total Patients</span>
                      <span className="text-2xl font-black">{selectedDepartment.patients}</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <span className="text-sm font-semibold text-blue-200">Risque Élevé</span>
                      <span className="text-2xl font-black text-red-400">{selectedDepartment.risqueElevé}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-blue-200">Score de Risque</span>
                      <span className="text-2xl font-black text-yellow-400">
                        {(selectedDepartment.scoreMoyen * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Analytics */}

      </div>
        <Footer/>
    </div>
  );
};

export default AnalyticsDashboard;
