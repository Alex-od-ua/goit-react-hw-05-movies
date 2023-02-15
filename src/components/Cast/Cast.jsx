import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCasts } from 'components/services/api';
import { CastList } from './CastList/CastList';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const result = await getCasts(movieId);
        setMovie(result);
        // setGenres(result.genres);
        // console.log(result);
      } catch (error) {
        setError(error.mesage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, movie]);

  return (
    <>
      {error && <p className="">{error}</p>}
      {loading && <Loader />}
      {movie && <CastList movies={movie} />}
    </>
  );
};
