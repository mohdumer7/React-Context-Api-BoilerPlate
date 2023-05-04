import { Children, createContext, useContext, useState } from "react";

const itemContext = createContext();

//we can also use  Custom Hook to create and manage out context API states
//to use the same value we need to only import the useValue custom hook and use it directly
//ex:- const value = useValue()
function useValue() {
  const value = useContext(itemContext);
  return value;
}

//generally we can create a component for the custom provider and give
// treat it like a custom hook which can be used in the comepoents as a context

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const handleAdd = (price, name) => {
    setTotal((prev) => prev + price);
    setItem((prev) => prev + 1);
    if (name in cartItems) {
      setCartItems({ ...cartItems, name: cartItems[name] + 1 });
    } else {
      setCartItems({ ...cartItems, name: 1 });
    }
  };

  const handleRemove = (price, name) => {
    if (total === 0) {
      return;
    }
    if (!(name in cartItems)) {
      return;
    } else if (name in cartItems && cartItems[name] === 1) {
      setCartItems({ ...cartItems.filter((item) => name !== item) });
    } else {
      setCartItems({ ...cartItems, name: cartItems[name] - 1 });
    }
    setTotal((prev) => prev - price);
    setItem((prev) => prev - 1);
  };

  const onReset = () => {
    setTotal(0);
    setItem(0);
  };

  const toggle = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <itemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        onReset,
        showCart,
        toggle,
        cartItems,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, CustomItemContext, useValue };
