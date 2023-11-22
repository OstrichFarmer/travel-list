import "../index.css";

export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <footer>
        <em>
          🧳 You have {numItems} item on your list, you have already packed{" "}
          {numPacked}({percentage}%)
        </em>
      </footer>
    </div>
  );
}
