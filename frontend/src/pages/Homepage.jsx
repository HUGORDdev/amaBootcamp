import {
  Activity,
  Heart,
  Shield,
  Droplet,
  Apple,
  TrendingUp,
  ChevronRight,
  Stethoscope,
  CheckCircle2,
  HandHeart
} from 'lucide-react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { ToastContainer, toast,Slide } from 'react-toastify';


const HomePage = () => {
  const notify = () => toast.info('cette fonctionnaliter est encore en developpement :)', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });;


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 font-sans">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-[#FDF1EF]  lg:px-8 overflow-hidden  ">
        <div className="max-w-7xl mx-auto relative  rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">


              <h1 className="text-5xl md:text-6xl text-[#222266] lg:text-7xl font-black leading-tight">
                
                  Protégez vos
                <br />
                  Reins
                <br />
                  Aujourd'hui
                
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                L'insuffisance rénale chronique est silencieuse mais détectable.
                Notre IA analyse vos données de santé pour prévenir les risques avant qu'il ne soit trop tard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#evaluation"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg text-white bg-[#286E6B] shadow-xl    transition-all duration-300 transform hover:scale-105"
                >
                  {/* <span /> */}
                  <Link to={'/analytics'}
                    className="relative z-10 flex items-center"
                  >
                    Évaluer Mon Risque
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* </span> */}
                </a>

                <a
                  href="#comment-ca-marche"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg text-[#286E6B] bg-white border-2 border-[#286E6B] hover:border-green-900  transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Comment ça marche ?
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                {[
                  { value: '95%', label: 'Précision IA' },
                  { value: '10M+', label: 'Vies Touchées' },
                  { value: '24/7', label: 'Disponibilité' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black bg-[#222266] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 font-semibold mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-150 animate-fadeInRight">
              <div className="relative h-full rounded-3xl overflow-hidden   border-4 border-white">
                <img
                  src="man.jpg"
                  alt="Prévention santé rénale"
                  className="w-full h-full object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5  border border-blue-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#222266] p-3 rounded-xl">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-800">Protection Active</div>
                      <div className="text-xs text-slate-600 font-medium">Surveillance continue de votre santé</div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-[#286E6B]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              L'Insuffisance Rénale Chronique
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Une maladie silencieuse qui progresse sans symptômes visibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: 'Maladie Silencieuse',
                description: '90% des personnes atteintes ne ressentent aucun symptôme aux premiers stades',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Complications Cardiaques',
                description: 'Risque multiplié par 3 de maladies cardiovasculaires et d\'AVC',
                image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Progression Rapide',
                description: 'Sans traitement, la fonction rénale peut chuter de 50% en quelques années',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400'
              }
            ].map((danger, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl overflow-hidden  transition-all duration-500 border border-slate-100 transform hover:-translate-y-1"
              >
                {/* Image Background */}
                <div className="h-48 overflow-hidden relative">
                  <img src={danger.image} alt={danger.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                      <div className="text-white">{danger.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 mb-3">{danger.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{danger.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Protégez Vos Reins Naturellement
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Des gestes simples au quotidien pour préserver votre santé rénale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Large Card */}
            <div className="md:row-span-2 bg-[#14143D] rounded-3xl p-8 text-white  shadow-blue-900/20 relative overflow-hidden">
              {/* <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div> */}
              <div className="relative z-10">
                <Droplet className="w-16 h-16 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-black mb-4">Hydratation Optimale</h3>
                <p className="text-blue-50 text-lg leading-relaxed mb-6 font-medium">
                  Buvez 1,5 à 2 litres d'eau par jour pour aider vos reins à éliminer les toxines efficacement.
                  L'eau reste la meilleure boisson pour vos reins.
                </p>
                <div className="space-y-3">
                  {['8 verres d\'eau / jour', 'Évitez les sodas sucrés', 'Limitez le café et le thé'].map((tip) => (
                    <div key={tip} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span className="font-semibold">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Cards */}
            {[
              {
                icon: <Apple className="w-10 h-10" />,
                title: 'Alimentation Équilibrée',
                description: 'Privilégiez fruits, légumes et protéines maigres. Limitez le sel et les graisses saturées.',
                color: 'bg-[#286E6B]',
                tips: ['Fruits & légumes frais', 'Réduire le sel', 'Protéines de qualité']
              },
              {
                icon: <Stethoscope className="w-10 h-10" />,
                title: 'Contrôle de la Tension',
                description: 'Surveillez régulièrement votre tension artérielle et votre glycémie.',
                color: 'bg-[#222266]',
                tips: ['Check-up réguliers', 'Tension < 140/90', 'Glycémie contrôlée']
              }
            ].map((practice, idx) => (
              <div
                key={idx}
                className=" rounded-3xl p-6  bg-white  transition-all duration-500 border border-slate-300 group hover:-translate-y-0.5"
              >
                <div className={`inline-flex p-3 rounded-2xl text-white ${practice.color}  mb-4 group-hover:scale-110 transition-transform`}>
                  {practice.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{practice.title}</h3>
                <p className="text-slate-600 font-medium mb-4 leading-relaxed">{practice.description}</p>
                <div className="space-y-2">
                  {practice.tips.map((tip) => (
                    <div key={tip} className="flex items-center space-x-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${practice.color}`}></div>
                      <span className="text-slate-700 font-semibold">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="comment-ca-marche" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#14143D]  text-white relative overflow-hidden">
      

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-blue-400/30">
              {/* <Brain className="w-5 h-5 text-blue-300" /> */}
              <span className="text-sm font-bold text-blue-200">Intelligence Artificielle Avancée</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Comment Notre IA Détecte les Risques ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
              Une technologie de pointe pour une prévention personnalisée
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Process Steps */}
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Collecte de Données',
                  description: 'Vous renseignez vos informations de santé : tension, glycémie, âge, antécédents médicaux...',
                },
                {
                  step: '02',
                  title: 'Analyse Intelligente',
                  description: 'Notre modèle d\'IA, entraîné sur des millions de cas cliniques, analyse vos données en quelques secondes',
                },
                {
                  step: '03',
                  title: 'Évaluation du Risque',
                  description: 'L\'algorithme calcule votre probabilité de développer une CKD et identifie les facteurs de risque prioritaires',
                },
                {
                  step: '04',
                  title: 'Recommandations Personnalisées',
                  description: 'Vous recevez un rapport détaillé avec des conseils adaptés à votre profil de santé',
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="shrink-0">
                    <div className="text-5xl font-black text-white group-hover:text-blue-400/50 transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">

                      <h3 className="text-xl font-black">{item.title}</h3>
                    </div>
                    <p className="text-blue-100 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className=" rounded-2xl p-8  border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
                  alt="IA Médicale"
                  className="w-full h-96 object-cover rounded-2xl "
                />

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white text-slate-900 rounded-2xl p-5  border border-[#ccc]">
                  <div className="text-4xl font-black bg-[#222266] bg-clip-text text-transparent mb-1">
                    95.7%
                  </div>
                  <div className="text-sm font-bold text-slate-600">Précision IA</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-[#286E6B]  rounded-2xl p-5 ">
                  <div className="text-4xl font-black text-white mb-1">
                    2M+
                  </div>
                  <div className="text-sm font-bold text-emerald-100">Analyses Réalisées</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#evaluation"
              className="inline-flex items-center px-10 py-5 rounded-2xl font-black text-lg bg-white text-slate-900  hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Tester L'IA Maintenant
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Solidarity/Donation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FDF1EF]  rounded-2xl overflow-hidden ">
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div className="relative h-full min-h-100">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
                  alt="Solidarité"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-linear-to-r from-rose-900/60 to-transparent"></div> */}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12  text-[#222266]">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <HandHeart className="w-5 h-5" />
                  <span className="text-sm font-bold">Solidarité & Entraide</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Ensemble pour Sauver des Vies au Bénin
                </h2>

                <p className="text-lg  leading-relaxed mb-8 font-light">
                  Au Bénin, des milliers de patients n'ont pas accès aux soins rénaux.
                  Votre don peut changer une vie en finançant des dépistages gratuits et des traitements pour les plus démunis.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 sm:mt-40 ">
                  <a
                    onClick={() => notify()}
                    href="#don"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black text-lg bg-[#EE7766] text-white  transition-all duration-300 transform hover:scale-105 "
                  >
                    <Heart className="mr-2 w-5 h-5 fill-current" />
                    Faire Un Don
                  </a>
                  <a
                    href="#en-savoir-plus"
                    onClick={() => notify()}

                    className="inline-flex items-center justify-center px-8 py-4  font-bold text-lg text-[#286E6B] border-2 border-[#286E6B] rounded-2xl   hover:bg-white/10 transition-all duration-300"
                  >
                    En Savoir Plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
         transition={Slide} 
          />
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default HomePage;