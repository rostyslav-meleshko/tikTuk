import { FC } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import FeedLinePage from './Components/FeedLinePage/FeedLinePage';
import UserProfilePage from './Components/UserProfilePage/UserProfilePage';
import './App.scss';

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/feed/:pageNumber?' exact component={FeedLinePage} />
        <Route path='/user/:userId?' exact component={UserProfilePage} />
        <Redirect to='/feed' />
      </Switch>
    </div>
  );
};

export default withRouter(App);
