import { useState } from 'react'
import Btn from '../../UI/Btn/Btn'
import styles from './MainBody.module.css'
import ViewDish from '../ViewDish/ViewDish'
import menuData from "../../assets/demo_menu.json"

const MainBody = () => {
  const [filterActive, setFilterActive] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleBtnOnClick = () => {
    setFilterActive(prev => !prev)
  }

  const all_menus = menuData.menu

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
          text="Filter"
          className={`${styles.btn} ${filterActive ? styles.active : ""}`}
          onClick={handleBtnOnClick}
        />
      </div>

      <br />
      <hr />
      <br />

      <div className={styles.dishList}>
        {/* Table Heading */}
        <ViewDish heading />

        {/* Menu Rows */}
        {all_menus.map((item, index) => (
          <ViewDish
            key={index}
            name={item.dishName}
            fullPrice={`₹${item.fullPlate}`}
            halfPrice={`${item.halfPlate ? "₹" + item.halfPlate : "--"}`}
            description={item.description}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(prev => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </main>
  )
}

export default MainBody
