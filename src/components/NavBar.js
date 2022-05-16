import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="App">
            <body className="App-body">
                <div className='nav-bar'>
                    <div className='title'>Prime Coding</div>
                    <Link to='/videos'><div className='options' id='videos'>Videos</div></Link>
                    <Link to='/courses'><div className='options'>Courses</div></Link>
                    <div className='options'>Register</div>
                </div>
            </body >
        </div >
    );
}

export default NavBar;