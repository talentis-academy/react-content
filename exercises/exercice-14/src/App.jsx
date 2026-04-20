export default function App() {
  const isAdmin = true;
  const username = "Alice";
  const items = ["Pomme", "Banane", "Cerise"];
  const bgColor = "#1e293b";

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>JSX vs HTML — Exercice 14</h1>

      {/* className au lieu de class */}
      <p className="intro" style={{ color: '#334155' }}>
        En JSX, on utilise <code>className</code> au lieu de <code>class</code>.
      </p>

      {/* htmlFor au lieu de for */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Nom :</label>
        <input id="name" type="text" defaultValue={username} style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
      </div>

      {/* Expression JS dans JSX */}
      <p>Bonjour, <strong>{username}</strong> {isAdmin ? '(Admin)' : '(Utilisateur)'} !</p>

      {/* style est un objet en JSX */}
      <div style={{ backgroundColor: bgColor, color: 'white', padding: '12px 16px', borderRadius: '8px', marginBottom: '1rem' }}>
        La couleur de fond vient d'une variable JS : {bgColor}
      </div>

      {/* Liste avec map */}
      <h2 style={{ fontSize: '1.1rem' }}>Liste de fruits :</h2>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      {/* Balises auto-fermantes */}
      <img src="https://via.placeholder.com/80" alt="placeholder" style={{ borderRadius: '8px', display: 'block', marginTop: '1rem' }} />
      <hr style={{ margin: '1.5rem 0' }} />
      <input type="text" placeholder="Champ vide" style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
    </div>
  );
}
