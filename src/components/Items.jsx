import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemData from "../itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {itemData.map((item) => (
        <ItemCard key={item.id} name={item.name} price={item.price} />
      ))}
      <ItemCard name="Apple" price={199} />
    </div>
  );
}

export default Items;
