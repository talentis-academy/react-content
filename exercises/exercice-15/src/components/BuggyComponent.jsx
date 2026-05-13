export default function BuggyComponent({ shouldCrash }) {
  if (shouldCrash) throw new Error('💥 Erreur volontaire dans BuggyComponent !');
  return (
    <div style={{ padding: '16px 20px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', color: '#16a34a', fontWeight: '500' }}>
      ✅ Le composant fonctionne correctement.
    </div>
  );
}
