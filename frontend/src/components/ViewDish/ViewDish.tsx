import Styles from './ViewDish.module.css'

type ViewDishProps = {
  name?: string
  halfPrice?: string
  fullPrice?: string
  stars?: number
  totalRatings?: number
  isVeg?: boolean
  heading?: boolean
  isOpen?: boolean
  onToggle?: () => void
}

const ViewDish = ({
  name = "DISH NAME",
  halfPrice = "HALF",
  fullPrice = "FULL",
  stars = 5,
  totalRatings = 543,
  isVeg,
  heading = false,
  isOpen = false,
  onToggle
}: ViewDishProps) => {
  return (
    <div className={Styles.parent}>
      {/* Row */}
      <div
        className={Styles.topbar}
        onClick={!heading ? onToggle : undefined}
      >
        <span
          className={`${Styles.name} ${isOpen && !heading ? Styles.active : ""}`}
        >
          {name}
        </span>

        <span
          className={`${Styles.fullPrice} ${isOpen && !heading ? Styles.active : ""}`}
        >
          {fullPrice}
        </span>

        <span
          className={`${Styles.halfPrice} ${isOpen && !heading ? Styles.active : ""}`}
        >
          {halfPrice}
        </span>
      </div>

      {/* Expanded Details */}
      {!heading && isOpen && (
        <div className={Styles.moreInfo}>
          <img src="/fppd.webp" alt="food" />

          <div className={Styles.dishDetails}>
            <div className={Styles.ratings}>
              <span>
                {Array.from({ length: stars }).map((_, i) => (
                  <img key={i} src="/star.svg" alt="star" />
                ))}
              </span>
              <p>+{totalRatings}</p>
            </div>

            <h1>{name}</h1>
            <p className={isVeg ? Styles.vegDish : Styles.nonVeg}>{isVeg ? "veg" : "non-veg"}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewDish
