import './App.css';
import NavBar from './components/NavBar';
import Video from './pages/Video';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './pages/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className='page'>
          <NavBar />
          <div>
            <Switch>
              <Route path="/videos">
                <Video />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/courses">
                <Courses />
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
