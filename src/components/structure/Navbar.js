import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useAuth } from '../utils/AuthContext';
import '../structure/userProf.css';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="links">
                <div className="logo">
                    <img src={Logo} alt="Logo" id="fnd" />
                </div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/News">News & Events</Link>
                    <Link to="/Locate">Locate</Link>
                </div>
                <div className="authentic">
                    {user ? (
                        <div className="user-profile">
                            <button className="user_button"></button>
                            <div className="dropdown-menu">
                                <Link to="/Dashboard">Profile</Link>
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/Authentic">
                            <button className="button">Sign In</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
 