import styles from './Menubar.module.css';
import Btn from '../../UI/Btn/Btn';
import { useState } from 'react';

interface MenubarProps {
  isOpen: boolean;
  onCategoryChange: (category: string | null) => void;
  onFilterChange: (filter: string | null) => void;
  onBodyClick: () => void;
}

const Menubar = ({
  isOpen,
  onFilterChange,
  onBodyClick
}: MenubarProps) => {

  const filters = ["Low to high", "High to low", "Most rated", "Veg", "Non veg", "Clear"];

  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  return (
    <aside
      className={styles.aside}
      style={{ left: isOpen ? "0" : "-100%" }}
      onClick={onBodyClick}

    >
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
            className={`${styles.filterBtns} ${activeFilter === index ? styles.active : ""
              }`}
          />
        ))}
      </div>
    </aside>
  );
};

export default Menubar;
