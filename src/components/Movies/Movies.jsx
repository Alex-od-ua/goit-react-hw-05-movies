import { useState, useEffect } from 'react';

import { MovieItem } from 'components/MovieItem/MovieItem';
import { getAllMovies } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (movies.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const results = await getAllMovies();
        setMovies(results);
        console.log(movies);
      } catch (error) {
        setError(error.mesage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movies]);

  return (
    <div>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      <MovieItem movies={movies} />
    </div>
  );
};
