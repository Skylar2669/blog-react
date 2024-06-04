import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className="nav-bar">
            <Link to='/'><h1>A Safe Space</h1></Link>
            <div className="link-container">
                <Link to="/">Home</Link>
                <Link to="/newblog">New Blog</Link>
            </div>
        </div>
    )
}

export default NavBar;