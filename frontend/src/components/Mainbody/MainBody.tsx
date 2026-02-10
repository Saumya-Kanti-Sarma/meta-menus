import { useState, useMemo } from 'react';
import Btn from '../../UI/Btn/Btn';
import styles from './MainBody.module.css';
import ViewDish from '../ViewDish/ViewDish';
import menuData from '../../assets/demo_menu.json';
import Menubar from '../Menubar/Menubar';

const MainBody = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [text, setText] = useState("Filter");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔥 FILTER STATE
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setFilterActive(prev => !prev);
    setText(prev => (prev === "Filter" ? "Close" : "Filter"));
  };

  const all_menus = menuData.menu;

  // 🔥 FILTER + SORT LOGIC
  const filteredMenus = useMemo(() => {
    let menus = [...all_menus];

    // 🥦 Veg / Non-veg filter
    if (selectedFilter === "Veg") {
      menus = menus.filter(item => item.is_veg === true);
    }
    if (selectedFilter === "Clear") {
      menus = [...all_menus];
    }

    if (selectedFilter === "Non veg") {
      menus = menus.filter(item => item.is_veg === false);
    }

    // 🔃 Sorting
    if (selectedFilter === "Low to high") {
      menus.sort((a, b) => a.fullPlate - b.fullPlate);
    }

    if (selectedFilter === "High to low") {
      menus.sort((a, b) => b.fullPlate - a.fullPlate);
    }

    if (selectedFilter === "Most rated") {
      menus.sort((a, b) => b.ratings - a.ratings);
    }

    return menus;
  }, [all_menus, selectedFilter]);

  return (
    <main className={styles.main}>
      <div className={styles.searchArea}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search here..." />
          <button>
            <img src="/search.svg" alt="search" />
          </button>
        </div>

        <Btn
          text={text}
          className={`${styles.btn} ${filterActive ? styles.active : ''}`}
          onClick={handleToggleMenu}
        />
      </div>

      <div className={styles.dishList}>
        <br />
        <ViewDish heading />

        {filteredMenus.map((item, index) => (
          <ViewDish
            key={index}
            name={item.dishName}
            fullPrice={`₹${item.fullPlate}`}
            halfPrice={item.halfPlate ? `₹${item.halfPlate}` : '--'}
            isVeg={item.is_veg}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(prev => (prev === index ? null : index))
            }
            handleHideMoreInfo={() => setOpenIndex(null)}
          />
        ))}

        <br /><br /><br /><br /><br />
      </div>

      <Menubar
        onBodyClick={() => {
          setIsMenuOpen(false);
          setFilterActive(false)
          setText("Filter")
        }}
        isOpen={isMenuOpen}
        onCategoryChange={() => { }} // not used anymore
        onFilterChange={setSelectedFilter}
      />
    </main>
  );
};

export default MainBody;
