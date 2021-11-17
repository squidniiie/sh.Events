import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Main.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="nav-links">
                    <Link to={"/about"}>Mission</Link>
                    <select name="explore" id="explore" value="explore">
                        <option><Link to={"/events"}>Explore</Link></option>
                        <option><Link to={"/"}>Los Angeles</Link></option>
                        <option><Link to={"/"}>San Francisco</Link></option>
                        <option><Link to={"/"}>Seattle</Link></option>
                    </select>
                    <Link to={"/login"}>Join</Link>
                </div>
                <p className="nav brand">
                    <h1>sh.Event</h1>
                </p>
                <div className="nav-actions">
                    <form action="GET">
                        <input type="search" />
                        <input type="submit" value="search" />
                    </form>
                    <img className="avatar" src="#" alt="img" />
                    <Link to={"/"} className="btn btn-outline-warning" role="button">Logout</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
