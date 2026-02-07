import { useState } from 'react'
import Btn from '../../UI/Btn/Btn'
import styles from './MainBody.module.css'

const MainBody = () => {
  const [active, setActive] = useState(false);
  const handleBtnOnClick = () => {
    setActive((prev) => !prev)
  }
  return (
    <main className={styles.main}>
      <div className={styles.searchArea}>
        <div className={styles.searchBox}>
          <input type='text' placeholder='Search here...' />
          <button>
            <img src="/search.svg" alt="search" />
          </button>
        </div>
        <Btn text='Filter' className={`${styles.btn} ${active ? styles.active : ""}`} onClick={handleBtnOnClick} />
      </div>
    </main>
  )
}

export default MainBody
