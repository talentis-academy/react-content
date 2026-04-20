import MemberCard from './MemberCard';

export default function TeamList({ title, members }) {
  if (members.length === 0) {
    return (
      <section>
        <h2>{title}</h2>
        <p style={{ color: '#999', fontStyle: 'italic' }}>Aucun membre dans cette équipe.</p>
      </section>
    );
  }
  return (
    <section>
      <h2>{title}</h2>
      {members.map(member => (
        <MemberCard key={member.id} fullName={member.fullName} role={member.role}
          email={member.email} remote={member.remote} />
      ))}
    </section>
  );
}
