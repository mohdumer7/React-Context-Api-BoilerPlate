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

  const handleAdd = () => {
    setTotal((prev) => prev + 100);
    setItem((prev) => prev + 1);
  };

  const handleRemove = () => {
    if (total === 0) {
      return;
    }
    setTotal((prev) => prev - 100);
    setItem((prev) => prev - 1);
  };

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, CustomItemContext, useValue };
