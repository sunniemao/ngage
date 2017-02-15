import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './index.jsx';
import { Dashboard } from '../components/Dashboard.jsx';

const browserHistory = createBrowserHistory();

export default (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={ Dashboard }/>
    </Route>
  </Router>
);

// <Route path="/rooms" component={ Rooms }>
//   <Route path="/about/rooms/:roomID" component={ Room }/>
// </Route>