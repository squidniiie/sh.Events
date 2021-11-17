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
                    <Link to={"/events"}>Explore</Link>
                    {/* <div className="dropdown">
                        <Link to={'#'} className="btn btn-outline-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Explore
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link to={"/events/:city"} className="dropdown-item" >Los Angeles</Link></li>
                            <li><Link to={"/events/:city"} className="dropdown-item" >San Francisco</Link></li>
                            <li><Link to={"/events/:city"} className="dropdown-item" >Seattle</Link></li>
                        </ul>
                    </div> */}
                    {/* <Link to={"/events/:city"} className="dropdown-item" >City Detail</Link> */}
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
