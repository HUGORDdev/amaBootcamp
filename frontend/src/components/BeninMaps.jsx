import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction pour les icônes par défaut de Leaflet
const fixLeafletIcon = () => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
};

const departmentsData = [
    { name: 'Littoral (Cotonou)', coords: [6.3667, 2.4333], prevalence: 28, riskFactor: 'Hypertension', cases: 142 },
    { name: 'Atlantique', coords: [6.6667, 2.3333], prevalence: 22, riskFactor: 'Diabète', cases: 98 },
    { name: 'Ouémé', coords: [6.5, 2.6], prevalence: 19, riskFactor: 'Obésité', cases: 76 },
    { name: 'Borgou', coords: [9.35, 2.6167], prevalence: 15, riskFactor: 'Infections', cases: 54 },
    { name: 'Zou', coords: [7.1833, 2.0667], prevalence: 12, riskFactor: 'Hypertension', cases: 41 },
    { name: 'Mono', coords: [6.6333, 1.7167], prevalence: 11, riskFactor: 'Diabète', cases: 38 },
    { name: 'Atakora', coords: [10.3, 1.3833], prevalence: 8, riskFactor: 'Malnutrition', cases: 22 },
    { name: 'Alibori', coords: [11.1333, 2.9333], prevalence: 7, riskFactor: 'Infections', cases: 19 },
    { name: 'Donga', coords: [9.7, 1.6667], prevalence: 9, riskFactor: 'Inconnu', cases: 25 },
    { name: 'Collines', coords: [8.1, 2.3], prevalence: 10, riskFactor: 'Hypertension', cases: 31 },
    { name: 'Couffo', coords: [7.0, 1.8], prevalence: 13, riskFactor: 'Diabète', cases: 44 },
    { name: 'Plateau', coords: [7.0, 2.6333], prevalence: 14, riskFactor: 'Sédentarité', cases: 47 },
];

// Composant utilitaire (optionnel ici mais nettoyé des types)
function SetViewOnClick({ animateRef }) {
    const map = useMap();
    return null;
}

export default function BeninMap() {
    React.useEffect(() => {
        fixLeafletIcon();
    }, []);

    const getColor = (prevalence) => {
        return prevalence > 25 ? '#ef4444' : 
               prevalence > 15 ? '#f59e0b' : 
               '#10b981';
    };

    return (
        <div style={{ height: '1000px', width: '100%' }}> {/* Conteneur obligatoire */}
            <MapContainer
                center={[9.3077, 2.3158]}
                zoom={7}
                style={{ height: '100%', width: '100%' }} // Style inline pour être sûr
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {departmentsData.map((dept) => (
                    <CircleMarker
                        key={dept.name}
                        center={dept.coords}
                        radius={Math.sqrt(dept.cases) * 2}
                        fillColor={getColor(dept.prevalence)}
                        color="white"
                        weight={2}
                        opacity={1}
                        fillOpacity={0.7}
                    >
                        <Popup>
                            <div style={{ minWidth: '150px' }}>
                                <h4 style={{ margin: '0 0 5px 0', borderBottom: '1px solid #eee' }}>{dept.name}</h4>
                                <strong>Prévalence:</strong> {dept.prevalence}%<br/>
                                <strong>Cas:</strong> {dept.cases}<br/>
                                <div style={{ marginTop: '5px', color: '#ef4444', fontWeight: 'bold' }}>
                                    Risque: {dept.riskFactor}
                                </div>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
}