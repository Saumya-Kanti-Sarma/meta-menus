import SearchBox from '../../UI/SearchBox/SearchBox'
import styles from './MainBody.module.css'

const MainBody = () => {
  return (
    <main className={styles.main}>
      <SearchBox inputType='text' onBtnClick={() => { }} onInputChange={() => { }} />
    </main>
  )
}

export default MainBody
