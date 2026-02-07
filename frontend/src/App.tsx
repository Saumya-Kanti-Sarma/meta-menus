import Header from "./components/Header/Header"
import restaurantDetails from "./assets/demo_restaurant.json"
import MainBody from "./components/Mainbody/MainBody"
const App = () => {
  return (
    <>
      <Header restaurantName={restaurantDetails.restaurant_details.restaurant_name} estd={restaurantDetails.restaurant_details.estd} />
      <hr />
      <MainBody />
    </>
  )
}

export default App
