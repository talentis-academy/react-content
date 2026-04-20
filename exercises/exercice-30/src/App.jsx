import { useState } from 'react';
import OpenAI from 'openai';
import GeneratorForm from './components/GeneratorForm';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGenerate({ topic, type, tone, length }) {
    if (!apiKey) { setError('Please enter your OpenAI API key.'); return; }
    setLoading(true);
    setError('');
    setResult('');
    try {
      const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      const prompt = `Write a ${tone.toLowerCase()} ${type.toLowerCase()} about "${topic}". 
Keep it approximately ${length} words. Be direct and engaging.`;
      const res = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 600,
      });
      setResult(res.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0f172a', fontFamily: 'sans-serif',
      padding: '40px 20px', color: '#f1f5f9',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '4px' }}>✨ Content Generator</h1>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>Powered by OpenAI GPT-3.5</p>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
            OpenAI API Key
          </label>
          <input
            type="password"
            placeholder="sk-..."
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            style={{
              width: '100%', padding: '10px 14px', borderRadius: '8px',
              border: '1px solid #334155', backgroundColor: '#1e293b', color: '#f1f5f9',
              fontSize: '0.9rem', boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
          <GeneratorForm onGenerate={handleGenerate} loading={loading} />
        </div>

        {error && (
          <div style={{ backgroundColor: '#3a1a1a', border: '1px solid #f85149', borderRadius: '10px', padding: '14px', color: '#f85149', marginBottom: '16px' }}>
            {error}
          </div>
        )}

        {result && (
          <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Generated Content</h3>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                style={{ padding: '6px 14px', backgroundColor: '#334155', color: '#94a3b8', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Copy
              </button>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
