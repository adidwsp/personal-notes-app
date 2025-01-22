import React from 'react';

function SearchBar({ keyword, setKeyword }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;

