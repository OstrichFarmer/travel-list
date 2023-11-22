import "../index.css";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <footer>
          <em>
            <p>Start adding some items to your packing list 🚀</p>
          </em>
        </footer>
      </div>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <footer>
        <em>
          {percentage === 100
            ? "You got everything, Ready to go  ✈️"
            : `🧳 You have ${numItems} item on your list, you have already packed
          ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
}
