import logo from './logo.svg';
import './App.css';
import Login from './page/login';
import Dashboard from "./page/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
function App() {
  return (
    <Router history = {createBrowserHistory()}>
    <div className="App">
     <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Dashboard} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
