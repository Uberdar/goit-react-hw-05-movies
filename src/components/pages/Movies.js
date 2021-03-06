import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Movies() {
  const test = useRouteMatch();
  // console.log('testuseRouteMatch: ', test);
  const [movieName, setMovieName] = useState('');
  const [newQuery, setNewQuery] = useState('');
  const movieUseLocation = useLocation();
  // console.log('movieUseLocation: ', movieUseLocation);
  const moviesRef = useRef();
  // console.log('moviesRef: ', moviesRef);
  const history = useHistory();
  // console.log('history: ', history);
  const queryParam = new URLSearchParams(movieUseLocation.search).get('query');

  const handleNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      return;
    }
    if (movieName !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c92c75743b7b53c3d8b6c69fd6fd4463&query=${movieName}&append_to_response=images,credits,reviews`
      )
        .then(res => res.json())
        .then(response => setNewQuery(response));
    }
    moviesRef.current = movieName;
    history.push(`?query=${movieName}`);

    setMovieName('');
  };
  useEffect(() => {
    if (queryParam) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c92c75743b7b53c3d8b6c69fd6fd4463&query=${queryParam}&append_to_response=images,credits,reviews`
      )
        .then(res => res.json())
        .then(response => setNewQuery(response));
    }
  }, [queryParam]);

  const makeQueryMarkup = () => {
    return newQuery?.results.map(elem => {
      return (
        <li key={elem.id}>
          <Link
            to={{
              pathname: `${test.url}/${elem.id}`,
              state: { from: movieUseLocation },
            }}
          >
            {elem.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            Search
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={movieName}
            onChange={handleNameChange}
          />
        </form>
      </header>
      <hr />
      <ul>{newQuery && makeQueryMarkup()}</ul>
    </>
  );
}
