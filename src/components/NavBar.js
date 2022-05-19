import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="App">
            <body className="App-body">
                <div className='nav-bar'>
                    <div className='title'>Prime Coding</div>
                    <div className='option' id='about'><Link to='/about' className='links'>About</Link></div>
                    <div className='option'><Link to='/videos' className='links'>Videos</Link></div>
                    <div className='option'><Link to='/courses' className='links'>Courses</Link></div>
                    <div className='option'><Link to='/register' className='links'>Register</Link></div>
                </div>
            </body >
        </div >
    );
}

export default NavBar;