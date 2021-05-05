import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ProvideAuth} from './hooks/useAuth';
import CallHistory from './Pages/CallHistory';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import PendingWork from './Pages/PendingWork';
import RepairsRequired from './Pages/RepairsRequired';
import ProtectedRoute from './util/ProtectedRoute';

function App() {
  const DashboardRoutes = () => {
    return (
      <Switch>
        <ProtectedRoute exact path="/calls" component={CallHistory} />
        <ProtectedRoute exact path="/repairs" component={RepairsRequired} />
        <ProtectedRoute exact path="/pendingwork" component={PendingWork} />
        <ProtectedRoute exact path="/" component={Dashboard} />
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
