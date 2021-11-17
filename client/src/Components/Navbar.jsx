import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Main.css'

function Navbar() {
    return (
        <div>
            <div className="navbar bg-light">
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
                <h1 className="nav brand">sh.Event</h1>
                <div className="nav-actions">
                    <div className="nav-search">
                        <form action="GET">
                            <input type="search" />
                            <input type="submit" value="search" />
                        </form>
                        <div className="nav-buttons">
                            <div><img className="avatar" src="#" alt="img" /></div>
                            <Link to={"/"} className="btn btn-outline-warning" role="button" href="#">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
