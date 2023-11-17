import "../index.css";
import Item from "./item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 1, description: "charger", quantity: 1, packed: false },
  { id: 2, description: "laptop", quantity: 1, packed: true },
];
export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
