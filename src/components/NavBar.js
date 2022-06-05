import './NavBar.css';
import cart from "../assets/cart.png";
import { Link } from 'react-router-dom';
import Profile from './Profile';

function NavBar() {
    return (
        <div className="App">
            <body className="App-body">
                <div className='nav-bar'>
                    <div className='title'><Link to='/' className='title-link' id="title">Prime Coding</Link></div>
                    <div className='option' id='about'><Link to='/about' className='links'>About</Link></div>
                    <div className='option'><Link to='/videos' className='links'>Videos</Link></div>
                    <div className='option'><Link to='/courses' className='links'>Courses</Link></div>
                    <div className='option'><Link to='/register' className='links'>Register</Link></div>
                    <div id="profile"><Profile /></div>
                    <div id="image"><img src={cart} id="cart" alt='cart' /></div>
                </div>
            </body >
        </div >
    );
}

export default NavBar;