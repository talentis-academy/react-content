import styles from './CarCard.module.css';

export default function CarCard({ car, onViewDetails }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{car.name}</h2>

      <div className={styles.colorRow}>
        <span className={styles.colorDot} style={{ backgroundColor: car.colorHex }} />
        <span>{car.color}</span>
      </div>

      <div>
        <span className={`${styles.badge} ${car.available ? styles.badgeAvailable : styles.badgeSold}`}>
          {car.available ? 'Available' : 'Sold'}
        </span>
      </div>

      <p className={styles.price}>${car.price.toLocaleString('en-US')}</p>

      <button className={styles.button} onClick={() => onViewDetails(car.id)}>
        View Details
      </button>
    </div>
  );
}
