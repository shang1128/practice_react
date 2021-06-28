import './App.css';
import Logform from './components/logform';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>

      <Switch>

      <Route exact path="/">
      <Logform />
      </Route>
      
      <Route path="/home">
      <Home />
      </Route>

      </Switch>

      </Router>
    </div>
  );
}

export default App;
