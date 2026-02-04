import RestaurantData from "./assets/data.json";
import DishTable from "./components/DishTable/DishTable";
import DishCard from "./components/DishCard/DishCard";
import styles from "./App.module.css";
import ToggleBtn from "./components/ToggleButton/ToggleButton";
import { useState } from "react";

const App = () => {
  const [toggleView, setToggleView] = useState(false);

  // Destructuring for cleaner code
  const { restaurant_name, Address, contact } = RestaurantData.restaurant_details;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>{restaurant_name}</h1>
          <small style={{ color: '#666' }}>{Address} | {contact}</small>
        </div>

        <ToggleBtn
          label={toggleView ? "Grid View" : "Table View"}
          isOn={toggleView}
          handleToggle={() => setToggleView(!toggleView)}
        />
      </header>

      <main>
        {toggleView ? (
          <div className={styles.cart_view}>
            {RestaurantData.menu.map((item, index) => (
              <DishCard dish={item} key={index} />
            ))}
          </div>
        ) : (
          /* Wrap table in a div for horizontal scroll on mobile */
          <div style={{ overflowX: 'auto' }}>
            <DishTable allDishes={RestaurantData.menu} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;