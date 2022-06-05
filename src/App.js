import './App.css';
import NavBar from './components/NavBar';
import Video from './pages/Video';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './pages/Courses';
import Footer from './components/Footer';
import Python from './pages/Python';
import Java from './pages/Java';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className='page'>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/videos">
                <Video />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/courses">
                <Courses />
              </Route>
              <Route exact path="/courses/python">
                <Python />
              </Route>
              <Route exact path="/courses/java">
                <Java />
              </Route>
              <Route>
                <LogIn />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
