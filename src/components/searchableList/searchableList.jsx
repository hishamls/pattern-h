import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFun, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      lastChange.current = setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />

      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFun(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
