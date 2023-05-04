import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { CustomItemContext, itemContext } from "./ItemContext";
import totalContext from "./totalContext";
import CartModal from "./components/CartModal";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <CustomItemContext value={{ total, setTotal, item, setItem }}>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <CartModal />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
