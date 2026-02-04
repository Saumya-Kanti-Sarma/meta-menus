//  /src/components/CategoryBtns/CategoryBtns.tsx

import styles from "./CategoryBtns.module.css";
import Categories from "../../assets/category.json";
import { Link } from "react-router-dom";

const CategoryBtns = () => {
  return (
    <>
      <b>Categories: </b>
      <div className={styles.wrapper}>
        {Categories.category.map((item, index) => (
          <Link
            to={`/menu/${item}`}
            key={index}
            className={styles.categoryChip}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryBtns;