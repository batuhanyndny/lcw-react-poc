import './Saas/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Views/Homepage';
import Login from './Views/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="mx-7 mt-5">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
