import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Movies from './pages/Movies';
import HomeView from './pages/HomeView';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};
