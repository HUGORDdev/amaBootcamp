import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PatientForm from './PatientForm'
import ResultView from './ResultView'

const Form = () => {
  const [Result,setResult] = useState({
    "ckd_stage": 3,
    "stage_label": "Stade 3b",
    "risk_score": 0.15231382846832275,
    "top_factors": [
      {
        "feature": "Personnels Médicaux/Pathologies virales (HB, HC, HIV)",
        "impact": 0.060737498104572296,
        "importance": 0.060737498104572296
      },
      {
        "feature": "Creat_mg_dL",
        "impact": 0.049292996525764465,
        "importance": 0.049292996525764465
      },
      {
        "feature": "eGFR_MDRD",
        "impact": 0.04719984531402588,
        "importance": 0.04719984531402588
      },
      {
        "feature": "Créatinine (mg/L)",
        "impact": 0.042452141642570496,
        "importance": 0.042452141642570496
      },
      {
        "feature": "BU/Hématurie_Oui",
        "impact": 0.04217300936579704,
        "importance": 0.04217300936579704
      }
    ],
    "ai_recommendations": [
      "Recommandations IA temporairement indisponibles (quota API atteint). Consultez les facteurs SHAP et les conseils généraux ci-dessous.",
      "Contrôler la tension artérielle (objectif selon stade IRC et KDIGO).",
      "Limiter les apports en sel (moins de 5 g/jour) et en protéines si indiqué.",
      "Surveiller la créatinine et l'eGFR (suivi néphrologique recommandé).",
      "Éviter les AINS et les néphrotoxiques ; adapter les doses selon la fonction rénale.",
      "Corriger l'anémie si présente (EPO selon recommandations).",
      "Équilibre phospho-calcique : surveiller PTH, phosphore, vitamine D.",
      "Prévention cardiovasculaire : statines si indiqué, activité physique adaptée.",
      "Éducation du patient sur l'observance et l'hygiène de vie.",
      "Vaccination (grippe, COVID, pneumocoque) recommandée."
    ]
  })

  const UpdateResults = (data)=>{

    setResult(data);
  }

  return (
    <div className="min-h-screen bg-blue-50/30  font-sans">
      <Nav routeFocus={2} />

      <div className='mt-20' >

        {Result ? (
          <ResultView
            data={Result}
            onReset={() => {
              setResult(null);
            }}
          />
        ) : (
          <PatientForm update={UpdateResults} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Form