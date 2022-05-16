import './App.css';
import NavBar from './components/NavBar';
import Video from './pages/Video';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/videos">
            <Video />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
