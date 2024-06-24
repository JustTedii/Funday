/* import '../UserLogged/AuthenticStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp, login } from './authUtils';
import { useAuth } from '../utils/AuthContext';

const Authentic = () => {
    const { login: contextLogin } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate();

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await signUp(username, email, password);

        if (error) {
            setFormError(error);
        } else {
            console.log(data);
            setFormError(null);
            contextLogin(data); 
            navigate('/Dashboard');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await login(username, password);

        if (error) {
            setFormError(error);
        } else {
            console.log(data);
            setFormError(null);
            contextLogin(data); 
            navigate('/Dashboard'); 
        }
    };

    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleLogInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className="authcontent">
            <div className={`wrapper ${isSignUpActive ? 'signup-active' : 'login-active'}`}>
                <div className="form-box login">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <Link to="#">Forgot password?</Link>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <Link to="#" onClick={handleSignUpClick}>Sign up</Link></p>
                        </div>

                        {formError && <p className="error">{formError}</p>}

                    </form>
                </div>
                <div className="form-box signup">
                    <form onSubmit={handleSignUpSubmit}>
                        <h1>Sign Up</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> I agree to the terms and & conditions</label>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="register-link">
                            <p>Already have an account? <Link to="#" onClick={handleLogInClick}>Log In</Link></p>
                        </div>

                        {formError && <p className="error">{formError}</p>}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authentic;
 */
import '../UserLogged/AuthenticStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp, login } from './authUtils';
import { useAuth } from '../utils/AuthContext';

const Authentic = () => {
    const { login: contextLogin } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate();

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await signUp(username, email, password);

        if (error) {
            setFormError(error);
        } else {
            console.log(data);
            setFormError(null);
            contextLogin(data); 
            navigate('/Dashboard'); 
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await login(username, password);

        if (error) {
            setFormError(error);
        } else {
            console.log(data);
            setFormError(null);
            contextLogin(data); 
            navigate('/Dashboard'); 
        }
    };

    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleLogInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className="authcontent">
            <div className={`wrapper ${isSignUpActive ? 'signup-active' : 'login-active'}`}>
                <div className="form-box login">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <Link to="#">Forgot password?</Link>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <Link to="#" onClick={handleSignUpClick}>Sign up</Link></p>
                        </div>

                        {formError && <p className="error">{formError}</p>}

                    </form>
                </div>
                <div className="form-box signup">
                    <form onSubmit={handleSignUpSubmit}>
                        <h1>Sign Up</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> I agree to the terms and & conditions</label>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="register-link">
                            <p>Already have an account? <Link to="#" onClick={handleLogInClick}>Log In</Link></p>
                        </div>

                        {formError && <p className="error">{formError}</p>}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authentic;
