import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

const fs = { display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' };
const is = { padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', width: '100%', boxSizing: 'border-box' };
const es = { color: '#e74c3c', fontSize: '0.8rem' };
const ls = { fontWeight: '600', fontSize: '0.9rem', color: '#333' };

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm({ mode: 'onChange' });
  const messageValue = useWatch({ control, name: 'message', defaultValue: '' });

  async function onSubmit(data) {
    await new Promise(r => setTimeout(r, 1200));
    console.log('Données :', data);
    setSubmitted(true);
    reset();
  }

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <p style={{ color: '#27ae60', fontSize: '1.2rem', fontWeight: 'bold' }}>✓ Message envoyé avec succès !</p>
      <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem', padding: '8px 16px', cursor: 'pointer' }}>Envoyer un autre message</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Nous contacter</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={fs}>
          <label style={ls}>Prénom *</label>
          <input {...register('firstName', { required: 'Le prénom est requis', minLength: { value: 2, message: 'Min 2 caractères' } })} type="text" placeholder="Alice" style={{ ...is, borderColor: errors.firstName ? '#e74c3c' : '#ddd' }} />
          {errors.firstName && <span style={es}>{errors.firstName.message}</span>}
        </div>
        <div style={fs}>
          <label style={ls}>Nom *</label>
          <input {...register('lastName', { required: 'Le nom est requis', minLength: { value: 2, message: 'Min 2 caractères' } })} type="text" placeholder="Martin" style={{ ...is, borderColor: errors.lastName ? '#e74c3c' : '#ddd' }} />
          {errors.lastName && <span style={es}>{errors.lastName.message}</span>}
        </div>
      </div>
      <div style={fs}>
        <label style={ls}>Email *</label>
        <input {...register('email', { required: "L'email est requis", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email invalide' } })} type="email" placeholder="alice@example.com" style={{ ...is, borderColor: errors.email ? '#e74c3c' : '#ddd' }} />
        {errors.email && <span style={es}>{errors.email.message}</span>}
      </div>
      <div style={fs}>
        <label style={ls}>Sujet *</label>
        <select {...register('subject', { required: 'Choisissez un sujet' })} style={{ ...is, borderColor: errors.subject ? '#e74c3c' : '#ddd' }}>
          <option value="">-- Choisir un sujet --</option>
          <option value="devis">Devis</option>
          <option value="support">Support</option>
          <option value="partenariat">Partenariat</option>
          <option value="autre">Autre</option>
        </select>
        {errors.subject && <span style={es}>{errors.subject.message}</span>}
      </div>
      <div style={fs}>
        <label style={ls}>Message * <span style={{ color: '#999', fontWeight: 400 }}>({messageValue.length}/500)</span></label>
        <textarea {...register('message', { required: 'Le message est requis', minLength: { value: 20, message: 'Min 20 caractères' }, maxLength: { value: 500, message: 'Max 500 caractères' } })} rows={5} placeholder="Décrivez votre demande..." style={{ ...is, resize: 'vertical', borderColor: errors.message ? '#e74c3c' : '#ddd' }} />
        {errors.message && <span style={es}>{errors.message.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '15px', cursor: isSubmitting ? 'wait' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
        {isSubmitting ? '⏳ Envoi...' : 'Envoyer le message'}
      </button>
    </form>
  );
}
