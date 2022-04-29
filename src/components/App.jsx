import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
// import Movies from './pages/Movies';
// import HomeView from './pages/HomeView';
// import NotFound from './pages/NotFound';
// import MovieDetailedView from './MoviesDetailedView';

const HomeView = lazy(() => import('./pages/HomeView'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MovieDetailedView = lazy(() => import('./MoviesDetailedView'));
const Movies = lazy(() => import('./pages/Movies'));
// const AppBar = lazy(() => import('./AppBar/AppBar'));

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/movies/:moviesID">
            <MovieDetailedView />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

// npm install gh-pages -d
// in package.json in "scripts" add following
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"
// then
// <BrowserRouter basename="/goit-react-hw-05-movies/">
// and dont forget to use npm run deploy !
