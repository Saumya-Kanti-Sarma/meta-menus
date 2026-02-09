import { useState } from 'react'
import Btn from '../../UI/Btn/Btn'
import styles from './MainBody.module.css'
import ViewDish from '../ViewDish/ViewDish'
import menuData from '../../assets/demo_menu.json'
import Menubar from '../Menubar/Menubar'

const MainBody = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [text, setText] = useState("Filter");
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev)
    setFilterActive(prev => !prev)
    setText((prev) => prev == "Filter" ? "Close" : "Filter");
  }

  const all_menus = menuData.menu

  return (
    <main className={styles.main}>
      <Menubar isOpen={isMenuOpen} />

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

      {/* Table Heading */}
      <div className={styles.dishList}>
        <br />
        <ViewDish heading />

        {/* Menu Rows */}
        {all_menus.map((item, index) => (
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
          />
        ))}

        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </main>
  )
}

export default MainBody
