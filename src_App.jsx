import React, { useState } from "react";
import "./App.css";
import WorldMap from "./WorldMap";

const visitedCountriesInit = ["FR", "IT", "ES", "US", "JP"]; // Exemple

export default function App() {
  const [visitedCountries, setVisitedCountries] = useState(visitedCountriesInit);
  const [balance, setBalance] = useState(3450);
  const [expenses, setExpenses] = useState([
    { label: "Voyage Italie", amount: 850 },
    { label: "Abonnement Gym", amount: 49 },
    { label: "Nouveau PC", amount: 1300 }
  ]);

  // Pour ajouter un pays
  function addCountry(countryCode) {
    if (!visitedCountries.includes(countryCode)) {
      setVisitedCountries([...visitedCountries, countryCode]);
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Mon Dashboard <span>Accomplissements</span></h1>
        <p>Gère ta vie, tes finances, et voyage autour du monde !</p>
      </header>

      <main className="dashboard-content">
        <section className="finance-section card animated">
          <h2>Mes Finances</h2>
          <div className="balance">
            <span>Solde actuel</span>
            <h3>{balance.toLocaleString()} €</h3>
          </div>
          <ul className="expenses-list">
            {expenses.map((e, i) => (
              <li key={i}>
                <span>{e.label}</span>
                <span className="amount">-{e.amount} €</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="map-section card animated delay1">
          <h2>Pays visités</h2>
          <WorldMap
            visitedCountries={visitedCountries}
            onCountryClick={addCountry}
          />
          <div className="visited-list">
            <b>Pays visités :</b> {visitedCountries.join(", ")}
          </div>
        </section>
      </main>
    </div>
  );
}