import { useParams } from 'react-router-dom';

export default function CastView({ movie }) {
  const HOST = 'https://image.tmdb.org/t/p/w500';

  const { ChangeQuery } = useParams();
  console.log('ChangeQuery: ', ChangeQuery);

  const makeCastMarkup = () => {
    return movie?.credits.cast.map(elem => {
      return (
        <ul key={elem.id}>
          <li>
            <img
              src={`${HOST}${elem.profile_path}`}
              alt={elem.name}
              style={{ width: '50px' }}
            />
          </li>
          <li>{elem.name}</li>
        </ul>
      );
    });
  };

  const makeReviewsMarkup = () => {
    if (movie?.reviews.results.length === 0) {
      return <p>There is no reviews yet :(</p>;
    }
    return movie?.reviews.results.map(elem => {
      return (
        <ul key={elem.id}>
          <li>Reviewer:{elem.author}</li>
          <li>The Review:{elem.content}</li>
        </ul>
      );
    });
  };
  return (
    <>
      {ChangeQuery === 'credits' ? makeCastMarkup() : null}
      {ChangeQuery === 'reviews' ? makeReviewsMarkup() : null}
    </>
  );
}
