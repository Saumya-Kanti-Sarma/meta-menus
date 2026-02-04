import { Link } from "react-router-dom";
import styles from "./DishTable.module.css";

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

// type MenuData = Dish[];

const DishTable = ({ allDishes }: { allDishes: Dish[] }) => {
  // const menuData: MenuData = Dishes.menu;
  // const allDishes: Dish[] = menuData;

  return (
    <div className={styles.tableContainer}>
      <h1 >All Dishes </h1>
      <table className={styles.dishTable}>
        <thead>
          <tr>
            <th className={styles.dishHeader}>Dish Name</th>
            <th className={styles.priceHeader}>Full Plate</th>
            <th className={styles.priceHeader}>Half Plate</th>
          </tr>
        </thead>
        <tbody>
          {allDishes.map((dish: Dish, index: number) => (
            <tr
              key={`${dish.dishName}-${index}`}
              className={`${styles.dishRow} ${!dish.available ? styles.unavailable : ""
                }`}
            >
              <td className={styles.dishCell}>
                <Link
                  to={`/${encodeURIComponent(dish.category)}/${encodeURIComponent(dish.dishName)}`}
                  className={styles.rowLink}
                >
                  <div className={styles.dishName}>{dish.dishName}</div>
                </Link>
              </td>
              <td className={styles.priceCell}>
                {dish.available ? (
                  <span className={styles.price}>
                    {dish.fullPlate ? `₹${dish.fullPlate}` : "--"}
                  </span>
                ) : (
                  <span className={styles.unavailableText}>Unavailable</span>
                )}
              </td>
              <td className={styles.priceCell}>
                {dish.available ? (
                  <span className={styles.price}>
                    {dish.halfPlate ? `₹${dish.halfPlate}` : "--"}
                  </span>
                ) : (
                  <span className={styles.unavailableText}>Unavailable</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DishTable;