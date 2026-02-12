import React, { useState } from 'react';
import { User, Activity, Droplet, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import RadioGroup from '../components/RadioGroup';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sexe: '',
    situationMatrimoniale: '',
    profession: '',

    hta: '',
    diabete: '',
    tabac: '',
    alcool: '',

    pressionSystolique: '',
    pressionDiastolique: '',
    pouls: '',
    temperature: '',
    etatGeneral: '',

    creatinine: '',
    uree: '',
    hemoglobine: '',
    proteinurie: '',
    albumine: '',
    glycemie: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation des champs obligatoires
    if (!formData.age) newErrors.age = 'Champ obligatoire';
    if (!formData.sexe) newErrors.sexe = 'Champ obligatoire';
    if (!formData.hta) newErrors.hta = 'Champ obligatoire';
    if (!formData.diabete) newErrors.diabete = 'Champ obligatoire';
    if (!formData.pressionSystolique) newErrors.pressionSystolique = 'Champ obligatoire';
    if (!formData.pressionDiastolique) newErrors.pressionDiastolique = 'Champ obligatoire';
    if (!formData.creatinine) newErrors.creatinine = 'Champ obligatoire';
    if (!formData.uree) newErrors.uree = 'Champ obligatoire';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi de données
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Données du patient:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 rounded-xl lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white border border-gray-300  rounded-xl px-8 py-6 mb-6">
          <h1 className="text-2xl font-bold text-black tracking-tight">
            Formulaire de Dépistage - Insuffisance Rénale
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Veuillez remplir tous les champs obligatoires (<span className='text-red-500'>*</span>)  avec précision
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Informations Démographiques & Sociales */}
          <div className="bg-white border border-gray-300  rounded-xl p-8">
            <SectionHeader icon={User} title="Informations Démographiques & Sociales" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Âge"
                name="age"
                type="number"
                required
                placeholder="Ex: 45"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
              />
              <SelectField
                label="Sexe"
                name="sexe"
                required
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'M', label: 'Masculin' },
                  { value: 'F', label: 'Féminin' }
                ]}
              />
              <SelectField
                label="Situation Matrimoniale"
                name="situationMatrimoniale"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'celibataire', label: 'Célibataire' },
                  { value: 'marie', label: 'Marié(e)' },
                  { value: 'divorce', label: 'Divorcé(e)' },
                  { value: 'veuf', label: 'Veuf/Veuve' }
                ]}
              />
              <InputField
                label="Profession"
                name="profession"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                placeholder="Ex: Enseignant"
              />
            </div>
          </div>

          {/* Section 2: Antécédents & Habitudes */}
          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <SectionHeader icon={FileText} title="Antécédents & Habitudes de Vie" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup
                label="Hypertension Artérielle (HTA)"
                name="hta"
                required
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'oui', label: 'Oui' },
                  { value: 'non', label: 'Non' }
                ]}
              />
              <RadioGroup
                label="Diabète"
                name="diabete"
                required
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'oui', label: 'Oui' },
                  { value: 'non', label: 'Non' }
                ]}
              />
              <SelectField
                label="Statut Tabagique"
                name="tabac"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'non_fumeur', label: 'Non fumeur' },
                  { value: 'fumeur', label: 'Fumeur actif' },
                  { value: 'ancien', label: 'Ancien fumeur' }
                ]}
              />
              <RadioGroup
                label="Consommation d'Alcool"
                name="alcool"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'oui', label: 'Oui' },
                  { value: 'non', label: 'Non' }
                ]}
              />
            </div>
          </div>

          {/* Section 3: Paramètres Vitaux */}
          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <SectionHeader icon={Activity} title="Paramètres Vitaux" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Pression Artérielle Systolique (mmHg)"
                name="pressionSystolique"
                type="number"
                step="0.1"
                errors={errors}
                required
                placeholder="Ex: 130"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Pression Artérielle Diastolique (mmHg)"
                name="pressionDiastolique"
                type="number"
                step="0.1"
                required
                placeholder="Ex: 80"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Fréquence Cardiaque (bpm)"
                name="pouls"
                type="number"
                errors={errors}
                placeholder="Ex: 72"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Température Corporelle (°C)"
                name="temperature"
                type="number"
                step="0.1"
                placeholder="Ex: 36.8"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
              />
              <SelectField
                label="État Général"
                name="etatGeneral"
                errors={errors}
                formData={formData}
                handleChange={handleChange}
                options={[
                  { value: 'bon', label: 'Bon' },
                  { value: 'altere', label: 'Altéré' },
                  { value: 'grave', label: 'Grave' }
                ]}
              />
            </div>
          </div>

          {/* Section 4: Données Biologiques */}
          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <SectionHeader icon={Droplet} title="Données Biologiques" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Créatinine sérique (mg/dL)"
                name="creatinine"
                type="number"
                step="0.01"
                errors={errors}
                required
                placeholder="Ex: 1.2"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Urée sanguine (mg/dL)"
                name="uree"
                type="number"
                step="0.01"
                errors={errors}
                required
                placeholder="Ex: 40"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Hémoglobine (g/dL)"
                name="hemoglobine"
                errors={errors}
                type="number"
                step="0.1"
                placeholder="Ex: 13.5"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Protéinurie (g/24h)"
                name="proteinurie"
                type="number"
                step="0.01"
                errors={errors}
                placeholder="Ex: 0.15"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Albumine sérique (g/L)"
                name="albumine"
                type="number"
                errors={errors}
                step="0.1"
                placeholder="Ex: 42"
                formData={formData}
                handleChange={handleChange}
              />
              <InputField
                label="Glycémie (mg/dL)"
                name="glycemie"
                type="number"
                errors={errors}
                step="0.1"
                placeholder="Ex: 95"
                formData={formData}
                handleChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-white border border-gray-300 rounded-xl p-8">
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 px-6 text-sm font-semibold cursor-pointer rounded-2xl tracking-wide transition-all ${isSuccess
                  ? 'bg-[#222266] text-white'
                  : isSubmitting
                    ? 'bg-[#222266]/90 text-white cursor-not-allowed'
                    : 'bg-[#222266] text-white hover:bg-gray-800'
                }`}
            >
              {isSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} />
                  Données Enregistrées avec Succès
                </span>
              ) : isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Analyse en cours...
                </span>
              ) : (
                'Soumettre pour Analyse'
              )}
            </button>

            {Object.keys(errors).length > 0 && (
              <p className="text-sm text-red-500 mt-4 text-center">
                Veuillez corriger les erreurs avant de soumettre le formulaire
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
