import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>Mon premier projet Vite + React</h1>
      <p>
        Projet créé avec <code>npm create vite@latest</code> puis lancé avec{" "}
        <code>npm run dev</code>.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>
        Compteur : {count}
      </button>
      <p className="hint">
        Modifiez <code>src/App.jsx</code> et sauvegardez — le HMR met la page à
        jour instantanément, sans perdre l'état.
      </p>
    </main>
  );
}
