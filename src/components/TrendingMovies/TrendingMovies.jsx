import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TrendingMoviesList } from 'components/TrendingMovies/TrendingMoviesList/TrendingMoviesList';
import { getAllMovies } from 'components/services/api';
import { Loader } from 'components/Loader/Loader';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      // if (movies.length !== 0) {
      //   return;
      // }
      try {
        setLoading(true);
        const results = await getAllMovies();
        setMovies(results);
        console.log(results);
      } catch ({ response }) {
        setError(response.data.mesage);
        toast(`${response.data.mesage}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies]);

  return (
    <div>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movies && <TrendingMoviesList movies={movies} />}
      {error && <ToastContainer />}
    </div>
  );
};
