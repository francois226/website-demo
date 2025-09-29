import React from "react";
import "./WorldMap.css";

// Minimal SVG World Map, only as example. For a real map, use a library like react-simple-maps.
const countries = [
  { code: "FR", name: "France", cx: 340, cy: 140 },
  { code: "IT", name: "Italie", cx: 370, cy: 150 },
  { code: "ES", name: "Espagne", cx: 320, cy: 160 },
  { code: "US", name: "USA", cx: 120, cy: 120 },
  { code: "JP", name: "Japon", cx: 680, cy: 150 },
  { code: "BR", name: "Brésil", cx: 250, cy: 270 },
  // ... Ajoute d'autres pays pour enrichir la map
];

export default function WorldMap({ visitedCountries, onCountryClick }) {
  return (
    <svg viewBox="0 0 800 400" className="world-map">
      {/* Océan */}
      <rect width="800" height="400" fill="#0A2342" />
      {/* Pays (cercles simplifiés) */}
      {countries.map((c) => (
        <circle
          key={c.code}
          cx={c.cx}
          cy={c.cy}
          r={18}
          fill={visitedCountries.includes(c.code) ? "#2ec4b6" : "#1a284d"}
          stroke="#fff"
          strokeWidth={visitedCountries.includes(c.code) ? 3 : 1}
          className={visitedCountries.includes(c.code) ? "country visited" : "country"}
          onClick={() => onCountryClick(c.code)}
        >
          <title>{c.name}</title>
        </circle>
      ))}
      {/* Légende */}
      <text x="15" y="390" fill="#fff" fontSize="16">
        Clique sur un pays pour l’ajouter à ta liste !
      </text>
    </svg>
  );
}