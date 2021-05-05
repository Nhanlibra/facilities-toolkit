import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Navigation/Sidebar';
import CallHistory from './Pages/CallHistory';
import Dashboard from './Pages/Dashboard';
import PendingWork from './Pages/PendingWork';
import RepairsRequired from './Pages/RepairsRequired';
import {ProvideAuth} from './hooks/useAuth';
import Login from './Pages/Login';

function App() {
  const DashboardRoutes = () => {
    return (
      <Switch>
        <Route exact path="/calls">
          <CallHistory />
        </Route>
        <Route exact path="/repairs">
          <RepairsRequired />
        </Route>
        <Route exact path="/pendingwork">
          <PendingWork />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    );
  };

  return (
    <ProvideAuth>
      <Router>
        <Route component={DashboardRoutes} />
        <Route exact path="/login" component={Login} />
      </Router>
    </ProvideAuth>
  );
}

export default App;
