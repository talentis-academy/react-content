import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, role, email, online }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{initials}</div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <p className={styles.email}>{email}</p>
      <span className={`${styles.badge} ${online ? styles.online : styles.offline}`}>
        {online ? 'En ligne' : 'Hors ligne'}
      </span>
    </div>
  );
}
