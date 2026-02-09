import styles from './Menubar.module.css';
import categories from "../../assets/demo_category.json";
import Btn from '../../UI/Btn/Btn';
import { useState } from 'react';

interface MenubarProps {
  isOpen: boolean;
}

const Menubar = ({ isOpen }: MenubarProps) => {
  const category = categories.category;

  // store which button is active
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  const handleOnClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <aside
      className={styles.aside}
      style={{ left: isOpen ? "0" : "-100%" }}
    >
      <h1>Categories:</h1>

      <div className={styles.categories}>
        <Btn
          text={"All"}
          onClick={() => handleOnClick(-1)}
          className={`${styles.btns} ${activeIndex === -1 ? styles.active : ""
            }`}
        />
        {category.map((item, index) => (
          <Btn
            key={index}
            text={item}
            onClick={() => handleOnClick(index)}
            className={`${styles.btns} ${activeIndex === index ? styles.active : ""
              }`}
          />
        ))}
      </div>
    </aside>
  );
};

export default Menubar;
