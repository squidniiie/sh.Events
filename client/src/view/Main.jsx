import React from 'react';
import Navbar from '../Components/Navbar';
import '../static/Main.css'


function Main() {
    return (
        <div>
            <div className="main">
                <div className="row">
                    <img className="hero col" src="https://cdn.pixabay.com/photo/2021/10/19/21/31/landscape-6724639_1280.jpg" alt="hero img" />
                    <div className="hero col">
                        <div className="hero card">
                            <h5 style={{ fontStyle: "italic" }}>Building a Diversely Likeminded Community</h5>
                            <h1 style={{ fontWeight: "Bold", fontSize: "42pt" }}>sh.Event</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
