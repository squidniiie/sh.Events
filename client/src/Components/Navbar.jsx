import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../static/navbar.css'

const Navbar = () => {

    const { city } = useParams();


    return (
        <div>
            <nav className="navbar bg-light">
                <div className="nav-links">
                    <Link to={"/new_event"} style={{ textDecoration: "none" }}>Create New</Link>
                    <Link to={"/about"} style={{ textDecoration: "none" }}>Mission</Link>

                </div>
                <div className="nav brand">
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <h1 style={{ fontWeight: "Bold", color: "black", fontSize: "32pt" }}>sh.Event</h1></Link>
                </div>
                <div className="nav-actions">
                    <form action="GET">
                        <input className="search" type="search" />
                        <input type="submit" value="Search" className="btn btn-outline-warning" />
                    </form>
                    <img className="avatar" src="https://cdn1.vectorstock.com/i/1000x1000/72/90/female-avatar-profile-icon-round-woman-face-vector-18307290.jpg" alt="img" />
                    <Link to={"/"} className="btn btn-outline-warning" role="button">Logout</Link>
                </div>
            </nav >
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`/events/los_angeles`}>Los Angeles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`/events/san_francisco`}>San Francisco</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`/events/seattle`}>Seattle</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar
