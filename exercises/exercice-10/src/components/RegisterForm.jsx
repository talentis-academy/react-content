import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/registerSchema';

const s = {
  container: { maxWidth: '480px', margin: '40px auto', padding: '32px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' },
  title: { fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '500', color: '#374151' },
  input: { padding: '10px 14px', fontSize: '14px', borderRadius: '8px', border: '1.5px solid #d1d5db', outline: 'none' },
  error: { fontSize: '12px', color: '#ef4444' },
  btn: { padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' },
};

export default function RegisterForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', experience: undefined, terms: false },
  });

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000));
    console.log('Données valides :', data);
    setSuccess(true);
    reset();
  };

  if (success) return (
    <div style={{ ...s.container, background: '#f0fdf4', border: '1px solid #86efac', textAlign: 'center' }}>
      <h2 style={{ color: '#16a34a' }}>✅ Enregistrement réussi !</h2>
      <button onClick={() => { setSuccess(false); reset(); }} style={{ ...s.btn, background: '#6b7280', marginTop: '12px' }}>Nouvel enregistrement</button>
    </div>
  );

  return (
    <div style={s.container}>
      <h1 style={s.title}>Créer un compte</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={s.form} noValidate>
        <div style={s.field}>
          <label htmlFor="fullName" style={s.label}>Nom complet *</label>
          <input id="fullName" type="text" placeholder="Jean Dupont" style={{ ...s.input, borderColor: errors.fullName ? '#ef4444' : '#d1d5db' }} {...register('fullName')} />
          {errors.fullName && <p style={s.error}>{errors.fullName.message}</p>}
        </div>
        <div style={s.field}>
          <label htmlFor="email" style={s.label}>Email *</label>
          <input id="email" type="email" placeholder="jean@email.com" style={{ ...s.input, borderColor: errors.email ? '#ef4444' : '#d1d5db' }} {...register('email')} />
          {errors.email && <p style={s.error}>{errors.email.message}</p>}
        </div>
        <div style={s.field}>
          <label htmlFor="experience" style={s.label}>Années d'expérience (0-10) *</label>
          <input id="experience" type="number" min="0" max="10" style={{ ...s.input, borderColor: errors.experience ? '#ef4444' : '#d1d5db' }} {...register('experience', { valueAsNumber: true })} />
          {errors.experience && <p style={s.error}>{errors.experience.message}</p>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px' }}>
          <input id="terms" type="checkbox" style={{ cursor: 'pointer' }} {...register('terms')} />
          <label htmlFor="terms" style={{ cursor: 'pointer', fontSize: '14px' }}>J'accepte les conditions d'utilisation</label>
          {errors.terms && <p style={{ ...s.error, width: '100%' }}>{errors.terms.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} style={{ ...s.btn, opacity: isSubmitting ? 0.7 : 1 }}>
          {isSubmitting ? '⏳ Enregistrement...' : "S'enregistrer"}
        </button>
      </form>
    </div>
  );
}
