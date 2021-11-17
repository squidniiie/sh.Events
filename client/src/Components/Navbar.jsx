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
                <p className="nav brand">
                    <h1 style={{ fontWeight: "Bold" }}>sh.Event</h1>
                </p>
                <div className="nav-actions">
                    <form action="GET">
                        <input type="search" />
                        <input type="submit" value="search" className="btn btn-outline-warning" />
                    </form>
                    <img className="avatar" src="#" alt="img" />
                    <Link to={"/"} className="btn btn-outline-warning" role="button">Logout</Link>
                </div>
            </nav >
            <nav>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to={"/events/:city"}>Los Angeles</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/events/:city"}>San Francisco</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/events/:city"}>Seattle</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar
