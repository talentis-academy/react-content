import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from './schemas/signup.schema';

function getStrength(p) {
  if (!p) return { label: '', color: '#e5e7eb', score: 0 };
  let s = 0;
  if (p.length >= 8) s++; if (/[A-Z]/.test(p)) s++; if (/[0-9]/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++;
  return [{ label: '', color: '#e5e7eb' }, { label: 'Faible', color: '#ef4444' }, { label: 'Moyen', color: '#f59e0b' }, { label: 'Bon', color: '#3b82f6' }, { label: 'Fort', color: '#22c55e' }][s];
}

const fi = (err) => ({ padding: '10px 12px', borderRadius: '6px', border: `1px solid ${err ? '#ef4444' : '#d1d5db'}`, fontSize: '1rem', width: '100%', boxSizing: 'border-box' });

export default function App() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(signupSchema), mode: 'onBlur' });
  const password = watch('password', '');
  const strength = getStrength(password);

  if (success) return <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'sans-serif' }}><div style={{ fontSize: '3rem' }}>🎉</div><h2>Inscription réussie !</h2></div>;

  return (
    <form onSubmit={handleSubmit(async (d) => { await new Promise(r => setTimeout(r, 1000)); console.log(d); setSuccess(true); })} style={{ maxWidth: '480px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <h2>Créer un compte</h2>
      {[
        { name: 'username', label: "Nom d'utilisateur *", type: 'text', placeholder: 'alice_dev' },
        { name: 'email', label: 'Email *', type: 'email', placeholder: 'alice@example.com' },
      ].map(({ name, label, type, placeholder }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
          <label style={{ fontWeight: '600', fontSize: '0.875rem' }}>{label}</label>
          <input {...register(name)} type={type} placeholder={placeholder} style={fi(errors[name])} />
          {errors[name] && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors[name].message}</span>}
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
        <label style={{ fontWeight: '600', fontSize: '0.875rem' }}>Mot de passe *</label>
        <input {...register('password')} type="password" placeholder="••••••••" style={fi(errors.password)} />
        {password && (
          <div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
              {[1,2,3,4].map(i => <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: i <= strength.score ? strength.color : '#e5e7eb', transition: 'background 0.3s' }} />)}
            </div>
            <span style={{ fontSize: '0.75rem', color: strength.color, fontWeight: '600' }}>{strength.label}</span>
          </div>
        )}
        {errors.password && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.password.message}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
        <label style={{ fontWeight: '600', fontSize: '0.875rem' }}>Confirmer le mot de passe *</label>
        <input {...register('confirmPassword')} type="password" placeholder="••••••••" style={fi(errors.confirmPassword)} />
        {errors.confirmPassword && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.confirmPassword.message}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
        <label style={{ fontWeight: '600', fontSize: '0.875rem' }}>Date de naissance *</label>
        <input {...register('birthDate')} type="date" style={fi(errors.birthDate)} />
        {errors.birthDate && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.birthDate.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '12px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
        {isSubmitting ? 'Inscription...' : "S'inscrire"}
      </button>
    </form>
  );
}
