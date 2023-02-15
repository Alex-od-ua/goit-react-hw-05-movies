import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'components/services/api';
import { MovieDetailsList } from './MovieDetailsList/MovieDetailsList';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const result = await getMovieById(movieId);
        setMovie(result);
        setGenres(result.genres);
        console.log(movie);
      } catch (error) {
        setError(error.mesage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, movie]);

  // console.log(movie);
  // console.log(useParams);
  // console.log(movieId);

  return (
    <>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movie && <MovieDetailsList details={movie} genres={genres} />}
    </>
  );
};
