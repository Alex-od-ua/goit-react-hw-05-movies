import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ movies }) => {
  const elements = movies.map(({ id, original_title, name }) => (
    <Link key={id} className="" to={`/movies/${id}`}>
      <li>{original_title ? original_title : name}</li>
    </Link>

    // <li key={id}>
    //   <Link className="" to={`/movies/${id}`}>
    //     {original_title ? original_title : name}
    //   </Link>
    // </li>
  ));

  return <ul className="">{elements}</ul>;
};
