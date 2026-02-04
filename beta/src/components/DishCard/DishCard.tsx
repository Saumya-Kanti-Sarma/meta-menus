import styles from "./DishCard.module.css";
interface Dish {
  dishName: string;
  category: string;
  is_veg: boolean;
  description: string;
  fullPlate: number | string | null;
  halfPlate: number | string | null;
  available: boolean;
  image: string;
}
const DishCard = ({ dish }: { dish: Dish }) => {
  return (
    <div className={`${styles.card} ${!dish.available ? styles.unavailable : ""}`}>
      <div className={styles.imageWrapper}>
        <img src={dish.image} alt={dish.dishName} className={styles.dishImg} />
        {!dish.available && <div className={styles.overlay}>Sold Out</div>}
        <div className={dish.is_veg ? styles.vegLabel : styles.nonVegLabel}></div>
      </div>

      <div className={styles.details}>
        <h3 className={styles.dishName}>{dish.dishName}</h3>
        <p className={styles.description}>{dish.description}</p>

        <div className={styles.priceRow}>
          {dish.halfPlate && (
            <div className={styles.priceTag}>
              <span className={styles.label}>Half</span>
              <span className={styles.value}>₹{dish.halfPlate}</span>
            </div>
          )}
          {dish.fullPlate && (
            <div className={styles.priceTag}>
              <span className={styles.label}>Full</span>
              <span className={styles.value}>₹{dish.fullPlate}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard