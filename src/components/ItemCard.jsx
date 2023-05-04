import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext, useValue } from "../ItemContext";

function ItemCard({ name, price }) {
  const { handleAdd, handleRemove } = useValue();

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(price)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
