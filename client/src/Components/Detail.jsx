import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../static/Detail.css'

function Detail() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="card col-12 bg-light">
                    <h1>Hello Details</h1>
                    <div className="card col-4 bg-light">
                        <h1>Hello Again</h1>
                    </div>
                </div>
            </div>
            <Link to={"/api/events/:id"}>Update</Link>
        </div>
    )
}

export default Detail;
