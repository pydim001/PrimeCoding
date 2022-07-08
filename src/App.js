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
import { useState } from 'react';
import { NameContext } from './Contexts';

function App() {
  // eslint-disable-next-line 
  const [fullName, setFullName] = useState();
  const [enrCourse, setEnrCourse] = useState(0);

  const addCourse = () => {
    setEnrCourse(enrCourse + 1)
  }

  // eslint-disable-next-line 
  const removeCourse = () => {
    setEnrCourse(enrCourse - 1)
  }

  return (
    <BrowserRouter>
      <div className="page-container">
        <div className='page'>
          <NameContext.Provider value={{ fullName, setFullName }}>
            <NavBar courses={enrCourse} />
          </NameContext.Provider>
          <div>
            <Switch>
              <Route exact path="/videos" component={Video} />
              <Route exact path="/" component={Home} />
              <Route exact path="/courses">
                <Courses addCourse={addCourse} />
              </Route>
              <Route exact path="/courses/python" component={Python} />
              <Route exact path="/courses/java" component={Java} />
              <NameContext.Provider value={{ fullName, setFullName }}>
                <Route exact path="/login">
                  <LogIn />
                </Route>
              </NameContext.Provider>
              <Route exact path="/forgot-username" component={ForgotUsername} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
