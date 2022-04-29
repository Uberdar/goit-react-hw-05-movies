import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function HomeView() {
  // const { url } = useRouteMatch();
  const [deffaultresponse, setDefaultResponse] = useState('');
  console.log('deffaultresponse: ', deffaultresponse);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c92c75743b7b53c3d8b6c69fd6fd4463`
    )
      .then(res => res.json())
      .then(response => setDefaultResponse(response));
  }, []);

  const makeDefaultMarkup = () => {
    return deffaultresponse.results.map(elem => {
      return (
        <li className="MovieListItem" key={elem.id}>
          <Link to={`movies/${elem.id}`}>{elem.title}</Link>
        </li>
      );
    });
  };

  return (
    <>
      <p>Home page</p>
      {deffaultresponse ? makeDefaultMarkup() : null}
    </>
  );
}
