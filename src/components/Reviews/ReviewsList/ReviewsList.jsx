export const ReviewsList = ({ movies }) => {
  console.log(movies);
  const element = movies.map(({ content, id, author }) => (
    <li key={id} className="">
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      <div className="">
        <ul className="">{element}</ul>
      </div>
    </>
  );
};
