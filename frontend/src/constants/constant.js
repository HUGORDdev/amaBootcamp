// Données pour Âge x Stade CKD
const ageStadeData = [
  { ageGroup: '18-30', 'Stade 1': 12, 'Stade 2': 8, 'Stade 3': 5, 'Stade 4': 2, 'Stade 5': 1 },
  { ageGroup: '31-40', 'Stade 1': 18, 'Stade 2': 15, 'Stade 3': 12, 'Stade 4': 8, 'Stade 5': 5 },
  { ageGroup: '41-50', 'Stade 1': 22, 'Stade 2': 28, 'Stade 3': 24, 'Stade 4': 18, 'Stade 5': 12 },
  { ageGroup: '51-60', 'Stade 1': 15, 'Stade 2': 32, 'Stade 3': 38, 'Stade 4': 28, 'Stade 5': 22 },
  { ageGroup: '61-70', 'Stade 1': 8, 'Stade 2': 18, 'Stade 3': 42, 'Stade 4': 35, 'Stade 5': 30 },
  { ageGroup: '71+', 'Stade 1': 3, 'Stade 2': 10, 'Stade 3': 28, 'Stade 4': 38, 'Stade 5': 42 }
];

// Données pour Créatinine x Stade
const creatinineStadeData = [
  { stade: 'Stade 1', creatinine: 82, patients: 78 },
  { stade: 'Stade 2', creatinine: 118, patients: 111 },
  { stade: 'Stade 3', creatinine: 165, patients: 149 },
  { stade: 'Stade 4', creatinine: 248, patients: 99 },
  { stade: 'Stade 5', creatinine: 387, patients: 60 }
];

// Données HTA vs Non-HTA
const htaComparisonData = [
  { category: 'Avec HTA', 'Stade 1-2': 42, 'Stade 3': 68, 'Stade 4-5': 95 },
  { category: 'Sans HTA', 'Stade 1-2': 78, 'Stade 3': 48, 'Stade 4-5': 28 }
];

// Données par département (Bénin)
const departmentData = [
  { id: 'Littoral', nom: 'Littoral', patients: 102, risqueElevé: 45, scoreMoyen: 0.68 },
  { id: 'Atlantique', nom: 'Atlantique', patients: 85, risqueElevé: 38, scoreMoyen: 0.65 },
  { id: 'Ouémé', nom: 'Ouémé', patients: 39, risqueElevé: 18, scoreMoyen: 0.62 },
  { id: 'Plateau', nom: 'Plateau', patients: 3, risqueElevé: 1, scoreMoyen: 0.55 },
  { id: 'Mono', nom: 'Mono', patients: 8, risqueElevé: 3, scoreMoyen: 0.58 },
  { id: 'Couffo', nom: 'Couffo', patients: 3, risqueElevé: 1, scoreMoyen: 0.52 },
  { id: 'Zou', nom: 'Zou', patients: 8, risqueElevé: 3, scoreMoyen: 0.60 },
  { id: 'Collines', nom: 'Collines', patients: 2, risqueElevé: 1, scoreMoyen: 0.54 },
  { id: 'Donga', nom: 'Donga', patients: 0, risqueElevé: 0, scoreMoyen: 0.45 },
  { id: 'Borgou', nom: 'Borgou', patients: 0, risqueElevé: 0, scoreMoyen: 0.48 },
  { id: 'Alibori', nom: 'Alibori', patients: 1, risqueElevé: 0, scoreMoyen: 0.50 },
  { id: 'Atacora', nom: 'Atacora', patients: 0, risqueElevé: 0, scoreMoyen: 0.42 }
];

// GeoJSON simplifié du Bénin (approximatif)
const beninGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Alibori" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.5, 11.8], [3.8, 11.8], [3.8, 10.5], [2.5, 10.5], [2.5, 11.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Atacora" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [0.8, 11.5], [2.5, 11.5], [2.5, 9.8], [0.8, 9.8], [0.8, 11.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Borgou" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.0, 10.5], [3.5, 10.5], [3.5, 8.8], [2.0, 8.8], [2.0, 10.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Donga" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.2, 10.2], [2.0, 10.2], [2.0, 8.5], [1.2, 8.5], [1.2, 10.2]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Collines" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.8, 8.5], [2.8, 8.5], [2.8, 7.5], [1.8, 7.5], [1.8, 8.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Zou" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.5, 7.8], [2.5, 7.8], [2.5, 6.8], [1.5, 6.8], [1.5, 7.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Plateau" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.3, 7.5], [2.9, 7.5], [2.9, 6.5], [2.3, 6.5], [2.3, 7.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Ouémé" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.4, 7.0], [2.9, 7.0], [2.9, 6.2], [2.4, 6.2], [2.4, 7.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Atlantique" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.8, 6.8], [2.5, 6.8], [2.5, 6.2], [1.8, 6.2], [1.8, 6.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Littoral" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.3, 6.5], [2.5, 6.5], [2.5, 6.3], [2.3, 6.3], [2.3, 6.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Mono" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.4, 6.8], [2.0, 6.8], [2.0, 6.2], [1.4, 6.2], [1.4, 6.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Couffo" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [1.5, 7.2], [2.1, 7.2], [2.1, 6.5], [1.5, 6.5], [1.5, 7.2]
        ]]
      }
    }
  ]
};

export  {ageStadeData, creatinineStadeData, htaComparisonData, departmentData, beninGeoJSON};