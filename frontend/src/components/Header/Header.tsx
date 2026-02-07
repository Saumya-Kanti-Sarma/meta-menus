import styles from "./Header.module.css";
type headerTypes = {
  restaurantName: string;
  estd: number;
}
const Header = ({ restaurantName, estd }: headerTypes) => {
  return (
    <header className={styles.header}>
      <h1> Welcome To</h1>
      <h2>{restaurantName.toUpperCase()}</h2>
      <p>since: {estd}</p>
    </header>
  )
}

export default Header