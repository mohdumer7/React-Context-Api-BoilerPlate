import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import { itemContext, useValue } from "../ItemContext";

function Navbar() {
  const value = useValue();
  console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
    </div>
  );
}

export default Navbar;
