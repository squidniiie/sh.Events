import React from 'react';
import '../static/Main.css'


function Main() {
    return (
        <div className="mainContainer">
            <div className="main">
                <div className="row">
                    <img className="hero col" src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="hero img" />
                    <div className="hero col">
                        <div className="hero card">
                            <h5 style={{ fontStyle: "italic", color: "#2D3940" }}>Building a Diversely Likeminded Community</h5>
                            <h1 style={{ fontWeight: "Bold", fontSize: "42pt", color: "#2D3940"}}>sh.Event</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
