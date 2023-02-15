import {
  Link,
  // useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { useCallback } from 'react';
// import { Loader } from 'components/Loader/Loader';

export const MovieDetailsList = ({ details, genres }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  console.log(from);

  const { poster_path, original_title, vote_average, overview, release_date } =
    details;

  // const onGoBackButtonClick = () => navigate(from);

  const onGoBackButtonClick = useCallback(() => {
    navigate(from);
  }, []);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  let year = new Date(release_date).getFullYear();

  return (
    <>
      <div className="">
        <div>
          <button type="button" onClick={onGoBackButtonClick} className="">
            Go back
          </button>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title ? original_title : 'picture not found'}
          loading="lazy"
          className=""
          width="300px"
          height="450px"
        />
        <div className="">
          <h2 className="">
            {original_title ? original_title : 'Title not found'}
            <span>({year ? year : '-'})</span>
          </h2>
          <p>
            User score:{' '}
            {vote_average ? ((vote_average / 10) * 100).toFixed(0) : 0}%
          </p>
          <h3 className="">Overview</h3>
          <p>{overview}</p>
          <h3 className="">Genres</h3>
          <ul className="">{elements}</ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
