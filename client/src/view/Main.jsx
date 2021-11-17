import React from 'react';
import '../Components/Navbar';
import Navbar from '../Components/Navbar';
import '../static/Main.css'


function Main() {
    return (
        <div>
            <Navbar />
            <div class="main">
                <div class="row">
                    <img class="hero bg-primary col" src="#" alt="hero img" />
                    <div class="hero col">
                        <div class="hero card">
                            <h4>Hero subtitle Example</h4>
                            <h1>Hero Example Title</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
