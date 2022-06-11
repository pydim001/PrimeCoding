import './App.css';
import NavBar from './components/NavBar';
import Video from './pages/Video';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './pages/Courses';
import Footer from './components/Footer';
import Python from './pages/Python';
import Java from './pages/Java';
import LogIn from './pages/LogIn';
import ForgotUsername from './pages/ForgotUsername';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className='page'>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/videos" component={Video} />
              <Route exact path="/" component={Home} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/python" component={Python} />
              <Route exact path="/courses/java" component={Java} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/forgot-username" component={ForgotUsername} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
