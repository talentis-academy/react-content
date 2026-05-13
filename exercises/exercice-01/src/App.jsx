/**
 * EXO-01 — Identifier les Composants dans une UI
 *
 * Cette interface est rendue dans un SEUL composant <App />.
 * Ton exercice : identifier les composants qu'on pourrait extraire.
 *
 * Note dans un document à part :
 *   1. Quels sont les composants atomiques (boutons, avatars, badges...) ?
 *   2. Quels sont les composants intermédiaires (cartes, blocs de commentaires...) ?
 *   3. Quels sont les composants de page (header, sidebar, feed...) ?
 *
 * Pour chacun, propose un nom et liste les props qu'il devrait recevoir.
 * Tu compareras avec la correction.
 *
 * Ne MODIFIE PAS ce fichier — c'est un exercice d'analyse, pas de refacto.
 */

const post = {
  author: { name: "Hicham Elmbarki", handle: "@hicham_rn", avatarColor: "#613CFF" },
  publishedAt: "il y a 2h",
  content: "Petit reminder : la 1ère étape pour devenir bon en React, c'est d'apprendre à voir les composants AVANT d'écrire la moindre ligne de code. 80% du métier est dans cette analyse.",
  tags: ["React", "Architecture", "Pédagogie"],
  likes: 142,
  reposts: 28,
  replies: 9,
};

const comments = [
  { author: { name: "Sarah K.", avatarColor: "#0089FF" }, text: "Exactement, je passe trop de temps à coder avant de penser à l'architecture.", publishedAt: "1h" },
  { author: { name: "Yanis B.", avatarColor: "#FF3CB4" }, text: "Une bonne ressource pour s'entraîner ?", publishedAt: "45min" },
  { author: { name: "Marie L.", avatarColor: "#10b981" }, text: "Découpe d'abord, code après. Toujours.", publishedAt: "12min" },
];

export default function App() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>

        {/* Header */}
        <header style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 20px", background: "#fff", borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "linear-gradient(135deg, #613CFF, #0089FF)",
            }} />
            <strong style={{ fontSize: 18 }}>Talentis Feed</strong>
          </div>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="#home" style={{ color: "#444", textDecoration: "none", fontSize: 14 }}>Accueil</a>
            <a href="#explore" style={{ color: "#444", textDecoration: "none", fontSize: 14 }}>Explorer</a>
            <a href="#profile" style={{ color: "#444", textDecoration: "none", fontSize: 14 }}>Profil</a>
          </nav>
        </header>

        {/* Post card */}
        <article style={{
          padding: "20px 24px", background: "#fff", borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {/* Author row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", background: post.author.avatarColor,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 16,
            }}>
              {post.author.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{post.author.name}</div>
              <div style={{ color: "#888", fontSize: 13 }}>{post.author.handle} · {post.publishedAt}</div>
            </div>
          </div>

          {/* Post content */}
          <p style={{ fontSize: 15, lineHeight: 1.5 }}>{post.content}</p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags.map(t => (
              <span key={t} style={{
                padding: "4px 12px", borderRadius: 999,
                background: "rgba(97,60,255,0.08)", color: "#613CFF",
                fontSize: 12, fontWeight: 600,
              }}>
                #{t}
              </span>
            ))}
          </div>

          {/* Action bar */}
          <div style={{ display: "flex", gap: 24, paddingTop: 8, borderTop: "1px solid #eee" }}>
            <button style={btn}>❤ {post.likes}</button>
            <button style={btn}>↻ {post.reposts}</button>
            <button style={btn}>💬 {post.replies}</button>
          </div>
        </article>

        {/* Comments section */}
        <section style={{
          padding: "20px 24px", background: "#fff", borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 16,
        }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#555" }}>
            Réponses ({comments.length})
          </h2>
          {comments.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", background: c.author.avatarColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0,
              }}>
                {c.author.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                  <strong style={{ fontSize: 14 }}>{c.author.name}</strong>
                  <span style={{ color: "#999", fontSize: 12 }}>· {c.publishedAt}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.5, marginTop: 2 }}>{c.text}</p>
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}

const btn = {
  background: "transparent", border: "none", cursor: "pointer",
  color: "#666", fontSize: 14, padding: 0,
};
