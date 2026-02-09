import styles from './Menubar.module.css';
import categories from "../../assets/demo_category.json";
import Btn from '../../UI/Btn/Btn';
import { useState } from 'react';

interface MenubarProps {
  isOpen: boolean;
  onCategoryChange: (category: string | null) => void;
  onFilterChange: (filter: string | null) => void;
}

const Menubar = ({
  isOpen,
  onCategoryChange,
  onFilterChange
}: MenubarProps) => {

  const category = categories.category;
  const filters = ["Low to high", "High to low", "Most rated"];

  const [activeCategory, setActiveCategory] = useState<number>(-1);
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  return (
    <aside
      className={styles.aside}
      style={{ left: isOpen ? "0" : "-100%" }}
    >
      <h1>Categories:</h1>
      <br />

      <div className={styles.categories}>
        <Btn
          text="All"
          onClick={() => {
            setActiveCategory(-1);
            onCategoryChange(null);
          }}
          className={`${styles.btns} ${activeCategory === -1 ? styles.active : ""
            }`}
        />

        {category.map((item, index) => (
          <Btn
            key={index}
            text={item}
            onClick={() => {
              setActiveCategory(index);
              onCategoryChange(item);
            }}
            className={`${styles.btns} ${activeCategory === index ? styles.active : ""
              }`}
          />
        ))}
      </div>

      <br />
      <hr />
      <br />

      <h1>Filters:</h1>
      <br />

      <div className={styles.categories}>
        {filters.map((filter, index) => (
          <Btn
            key={index}
            text={filter}
            onClick={() => {
              setActiveFilter(prev => (prev === index ? null : index));
              onFilterChange(filter);
            }}
            className={`${styles.btns} ${activeFilter === index ? styles.active : ""
              }`}
          />
        ))}
      </div>
    </aside>
  );
};

export default Menubar;
