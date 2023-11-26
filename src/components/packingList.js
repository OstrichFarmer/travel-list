import "../index.css";
import Item from "./item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>{" "}
          <option value="description">Sort by input description</option>{" "}
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
