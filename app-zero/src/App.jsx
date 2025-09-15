import "./App.css";
import ShoppingCard from "./component/ShoppingCard";
import Welcome from "./component/Welcome";

function App() {
  const prodotto = {
    name: "iPhone 15",
    price: 1000,
    description: "Iphone 15, uscito 2 anni fa",
    rating: 4.5,
  };
  const prodotto2 = {
    name: "iPhone 17",
    price: 1200,
    description: "L'ultimo smartphone Apple",
    rating: 5,
  };

  return (
    <>
      <ShoppingCard product={prodotto} />
      <ShoppingCard product={prodotto2} />
      <Welcome nome="Mario" />
    </>
  );
}

export default App;
