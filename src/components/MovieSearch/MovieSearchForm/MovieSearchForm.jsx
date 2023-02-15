import { useState } from 'react';

export const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => setSearch(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        required
        placeholder="Search movie"
        className=""
        onChange={handleChange}
      />
      <button type="submit" className="">
        Search
      </button>
    </form>
  );
};
