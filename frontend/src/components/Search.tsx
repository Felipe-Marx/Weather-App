import type { SearchProps } from "../types/weather";

function Search({ onSearch, loading, cidade, handleChange }: SearchProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };
  return (
    <section className="search">
      <input
        type="text"
        value={cidade}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </section>
  );
}

export default Search;
