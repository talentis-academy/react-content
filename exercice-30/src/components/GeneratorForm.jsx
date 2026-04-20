const CONTENT_TYPES = ['Blog Post', 'Product Description', 'Email', 'Social Media Post', 'Summary'];
const TONES = ['Professional', 'Casual', 'Funny', 'Persuasive', 'Informative'];

export default function GeneratorForm({ onGenerate, loading }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    onGenerate({
      topic: data.get('topic'),
      type: data.get('type'),
      tone: data.get('tone'),
      length: data.get('length'),
    });
  }

  const inputStyle = {
    width: '100%', padding: '10px 12px', borderRadius: '8px',
    border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f1f5f9',
    fontSize: '0.9rem', boxSizing: 'border-box',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '6px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
          Topic / Subject
        </label>
        <input name="topic" required placeholder="e.g. Benefits of TypeScript" style={inputStyle} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
            Content Type
          </label>
          <select name="type" style={inputStyle}>
            {CONTENT_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
            Tone
          </label>
          <select name="tone" style={inputStyle}>
            {TONES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '6px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
          Length (words)
        </label>
        <input name="length" type="number" defaultValue="150" min="50" max="500" style={inputStyle} />
      </div>

      <button type="submit" disabled={loading} style={{
        padding: '12px', backgroundColor: '#4f7eff', color: '#fff', border: 'none',
        borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem',
        opacity: loading ? 0.6 : 1,
      }}>
        {loading ? 'Generating...' : '✨ Generate Content'}
      </button>
    </form>
  );
}
