import { useState } from 'react'
import Styles from './ViewDish.module.css'
type viewDishTypes = {
  name?: string;
  halfPrice?: string;
  fullPrice?: string;
  stars?: number;
  totalRatings?: number;
  description?: string,
  heading?: boolean,
}

const ViewDish = ({
  name = "Dish Name",
  halfPrice = "Half Price",
  fullPrice = "Full Price",
  stars = 5,
  totalRatings = 543,
  description,
  heading = false,


}: viewDishTypes) => {
  const [active, setActive] = useState(false);
  const handleOnClick = () => {
    setActive((prev) => !prev)
  }
  return (
    <div className={Styles.parent}>
      <div className={Styles.topbar} onClick={handleOnClick}>
        <span className={`${Styles.name} ${active && heading === false ? Styles.active : ""}`}>{name}</span>
        <span className={`${Styles.fullPrice} ${active && heading === false ? Styles.active : ""}`}>{fullPrice}</span>
        <span className={`${Styles.halfPrice} ${active && heading === false ? Styles.active : ""}`}>{halfPrice}</span>
      </div>

      {heading == false ? <div className={Styles.moreInfo} style={{
        display: active ? "flex" : "none"
      }}>
        <img src="/fppd.webp" alt="foooood" />
        <div className={Styles.dishDetails}>

          <div className={Styles.ratings}>
            <span>
              {Array.from({ length: stars }).map((_, i) => (
                <img key={i} src="/star.svg" alt="star" />
              ))}
            </span>
            <p>+{totalRatings}</p>
          </div>
          <h1>Paneer Roll</h1>
          <p className={Styles.aboutDish}>{description}</p>
        </div>
      </div> : <></>}
    </div>
  )
}

export default ViewDish
