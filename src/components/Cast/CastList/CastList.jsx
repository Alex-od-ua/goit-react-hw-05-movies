export const CastList = ({ movies }) => {
  const element = movies.map(({ original_name, profile_path, id }) => (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
        alt={original_name}
        loading="lazy"
        className=""
        width="100px"
        height="150px"
      />
      <h3>{original_name}</h3>
    </li>
  ));

  return (
    <>
      <div>
        <ul className="">{element}</ul>
      </div>
    </>
  );
};
