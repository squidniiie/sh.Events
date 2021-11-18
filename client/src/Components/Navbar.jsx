import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Main.css'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar bg-light">
                <div className="nav-links">
                    <Link to={"/new_event"}>Create New</Link>
                    <Link to={"/about"}>Mission</Link>

                </div>
                <div className="nav brand">
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <h1 style={{ fontWeight: "Bold", color: "black" }}>sh.Event</h1></Link>
                </div>
                <div className="nav-actions">
                    <form action="GET">
                        <input type="search" />
                        <input type="submit" value="Search" className="btn btn-outline-warning" />
                    </form>
                    <img className="avatar" src="https://cdn1.vectorstock.com/i/1000x1000/72/90/female-avatar-profile-icon-round-woman-face-vector-18307290.jpg" alt="img" />
                    <Link to={"/"} className="btn btn-outline-warning" role="button">Logout</Link>
                </div>
            </nav >
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/events/:city"}>Los Angeles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/events/:city"}>San Francisco</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/events/:city"}>Seattle</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar
