import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { searchMovies } from 'components/services/api';
import { MovieSearchForm } from './MovieSearchForm/MovieSearchForm';
import { MovieSearchList } from './MovieSearchList/MovieSearchList';

import { Loader } from 'components/Loader/Loader';

export const MovieSearch = () => {
  const [movies, setMovies] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) {
        return;
      }
      try {
        setLoading(true);
        const results = await searchMovies(search);
        setMovies(results);
        console.log(movies);
      } catch (error) {
        setError(error.mesage);
        // toast.error(error.mesage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search]);

  const onSearchMovies = search => {
    setSearchParams({ search });
  };

  return (
    <>
      <MovieSearchForm onSubmit={onSearchMovies} />
      {loading && <Loader />}
      {error && <h1>error</h1>}
      {movies && <MovieSearchList movies={movies} />}
    </>
  );
};
