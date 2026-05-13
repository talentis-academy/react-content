import { useState } from "react";

/**
 * EXO-32 — Construire ta Veille Tech React
 *
 * Cet exercice est interactif : remplace les sources d'exemple par TES
 * propres choix, ajoute/supprime des entrées, ajuste ton rythme.
 *
 * À la fin, copie le contenu (ou prends une capture) et sauvegarde-le
 * quelque part — c'est ton document de veille personnel.
 */
export default function App() {
  const [primary, setPrimary] = useState([
    { name: "react.dev/blog", url: "https://react.dev/blog", reason: "Annonces officielles" },
    { name: "github.com/reactjs/rfcs", url: "https://github.com/reactjs/rfcs", reason: "Voir le futur 6-12 mois en avance" },
    { name: "@dan_abramov", url: "https://x.com/dan_abramov", reason: "Threads techniques denses" },
  ]);

  const [secondary, setSecondary] = useState([
    { name: "This Week in React", url: "https://thisweekinreact.com/", reason: "Newsletter hebdo, 15 min de lecture" },
    { name: "Theo (t3.gg)", url: "https://www.youtube.com/@t3dotgg", reason: "Tech Lead YouTube, opinions argumentées" },
    { name: "Kent C. Dodds", url: "https://kentcdodds.com/blog", reason: "Patterns React + tests" },
  ]);

  const [rythme, setRythme] = useState(
    "Mardi 18h–18h30 : This Week in React.\nDimanche matin 10h–11h : 1 vidéo Theo OU 1 article Kent C. Dodds + notes."
  );

  const [actionTopic, setActionTopic] = useState("Server Components — react.dev/learn");
  const [actionWhen, setActionWhen] = useState("Samedi prochain 10h–11h");

  return (
    <div style={page}>
      <header style={header}>
        <h1 style={h1}>Ma Veille Tech React</h1>
        <p style={subtitle}>Personnalise ce document avec tes propres choix.</p>
      </header>

      <Section title="1. Sources primaires (officielles)" color="#613CFF">
        <SourceList items={primary} setItems={setPrimary} />
      </Section>

      <Section title="2. Sources secondaires (communauté)" color="#0089FF">
        <SourceList items={secondary} setItems={setSecondary} />
      </Section>

      <Section title="3. Rythme" color="#FF3CB4">
        <textarea
          value={rythme}
          onChange={(e) => setRythme(e.target.value)}
          style={textarea}
          rows={4}
        />
      </Section>

      <Section title="4. Action concrète (bloquée dans l'agenda)" color="#10b981">
        <label style={label}>Sujet à creuser</label>
        <input
          value={actionTopic}
          onChange={(e) => setActionTopic(e.target.value)}
          style={input}
        />
        <label style={{ ...label, marginTop: 12 }}>Quand</label>
        <input
          value={actionWhen}
          onChange={(e) => setActionWhen(e.target.value)}
          style={input}
        />
      </Section>

      <footer style={footer}>
        Document généré pour Mission React · Talentis Academy
      </footer>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <section style={{ ...section, borderLeftColor: color }}>
      <h2 style={{ ...h2, color }}>{title}</h2>
      {children}
    </section>
  );
}

function SourceList({ items, setItems }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    setItems(next);
  };
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  const add = () => setItems([...items, { name: "", url: "", reason: "" }]);

  return (
    <>
      {items.map((item, i) => (
        <div key={i} style={row}>
          <input
            placeholder="Nom"
            value={item.name}
            onChange={(e) => update(i, "name", e.target.value)}
            style={input}
          />
          <input
            placeholder="URL"
            value={item.url}
            onChange={(e) => update(i, "url", e.target.value)}
            style={input}
          />
          <input
            placeholder="Pourquoi"
            value={item.reason}
            onChange={(e) => update(i, "reason", e.target.value)}
            style={input}
          />
          <button onClick={() => remove(i)} style={btnRemove}>×</button>
        </div>
      ))}
      <button onClick={add} style={btnAdd}>+ Ajouter une source</button>
    </>
  );
}

// styles
const page = { maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 };
const header = { textAlign: "center", marginBottom: 8 };
const h1 = { fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: -1 };
const subtitle = { color: "#888", fontSize: 14, marginTop: 4 };
const section = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid",
  borderRadius: 12,
  padding: "16px 20px",
};
const h2 = { fontSize: 14, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 };
const row = { display: "flex", gap: 8, marginBottom: 8, alignItems: "center" };
const input = {
  flex: 1, padding: "8px 12px",
  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8, color: "#fff", fontSize: 13, outline: "none",
};
const textarea = { ...input, fontFamily: "inherit", lineHeight: 1.5, resize: "vertical" };
const label = { display: "block", fontSize: 12, color: "#aaa", marginBottom: 4 };
const btnRemove = {
  width: 32, height: 32, borderRadius: 8,
  background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
  color: "#ef4444", cursor: "pointer", fontSize: 18, fontWeight: 700,
};
const btnAdd = {
  marginTop: 8, padding: "8px 14px", borderRadius: 8,
  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600,
};
const footer = { textAlign: "center", color: "#555", fontSize: 12, marginTop: 16 };
