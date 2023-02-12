import { Link } from 'react-router-dom';

export const MovieItem = ({ movies }) => {
  const elements = movies.map(({ id, original_title, name }) => (
    <li key={id}>
      <Link className="" to={`/movies/${id}`}>
        {original_title ? original_title : name}
      </Link>
    </li>
  ));

  return <ul className="">{elements}</ul>;
};
