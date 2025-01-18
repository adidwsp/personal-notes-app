import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchParams({ search: searchTerm });
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        onChange={handleChange}
      />
    </section>
  );
}

export default SearchBar;