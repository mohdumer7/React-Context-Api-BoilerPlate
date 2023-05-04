import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../ItemContext";

function CartModal() {
  const { showCart, onReset, toggle, cartItems, total } = useValue();
  console.log(cartItems);

  return (
    showCart && (
      <div className={styles.cartModal}>
        <div className={styles.closeButton} onClick={toggle}>
          Close
        </div>
        <div className={styles.clearButton} onClick={onReset}>
          Clear
        </div>
        <div className={styles.itemContainer}></div>
        <div className={styles.total}>
          <div className={styles.totalText}>total</div>
          <div className={styles.totalPrice}>${total}</div>
        </div>
      </div>
    )
  );
}

export default CartModal;
