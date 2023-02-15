import { Link, useLocation } from 'react-router-dom';

export const MovieSearchList = ({ movies }) => {
  const location = useLocation();

  console.log(movies);

  const elements = movies.map(({ title, id }) => (
    <li key={id} className="">
      <Link className="" state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return <ul className="">{elements}</ul>;
};
