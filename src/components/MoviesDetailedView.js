import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CastView from './CastView';

export default function MovieDetailedView() {
  const IMAGE_GET = 'https://image.tmdb.org/t/p/w500';
  const { url } = useRouteMatch();
  const { moviesID } = useParams();
  const [movie, setMovie] = useState(null);
  console.log('movie: ', movie);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${moviesID}?api_key=c92c75743b7b53c3d8b6c69fd6fd4463&append_to_response=images,credits,reviews`
    )
      .then(res => res.json())
      .then(response => setMovie(response));
  }, [moviesID]);

  const makeIdMarkup = () => {
    return (
      <ul className="MovieIdItem" key={moviesID}>
        <li>
          <h2>{movie.title}</h2>
        </li>
        <li>
          <img
            src={`${IMAGE_GET}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '120px' }}
          />
        </li>
        <li>User Score {movie.vote_average}</li>
        <li>Overview:{movie.overview}</li>
        <li>genres: {movie.genres.map(elem => elem.name)}</li>
      </ul>
    );
  };
  const additionalInfoMarkup = () => {
    return (
      <ul className="MovieAdditionalInfo">
        <li>
          <Link to={`${url}/credits`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <p>Movie ID:{moviesID} page</p>
      <hr />
      {movie ? makeIdMarkup() : null}
      <hr />
      {movie ? additionalInfoMarkup() : null}
      <hr />
      <Route path={`${url}/:ChangeQuery`}>
        <CastView movie={movie} />
      </Route>
    </>
  );
}
// https://api.themoviedb.org/3/movie/675353?api_key=c92c75743b7b53c3d8b6c69fd6fd4463/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg
// https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg
/* <img src={`${IMAGE_GET}${movie.poster_path}`} alt={movie.title} /> */
