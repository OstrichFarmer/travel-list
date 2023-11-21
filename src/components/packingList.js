import "../index.css";
import Item from "./item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 10, packed: true },
//   { id: 3, description: "charger", quantity: 1, packed: false },
//   { id: 4, description: "laptop", quantity: 1, packed: true },
// ];

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
