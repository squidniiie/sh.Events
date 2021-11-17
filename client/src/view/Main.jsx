import React from 'react';
import Navbar from '../Components/Navbar';
import '../static/Main.css'


function Main() {
    return (
        <div>
            <Navbar />
            <div class="main">
                <div class="row">
                    <img class="hero col" src="https://cdn.pixabay.com/photo/2021/10/19/21/31/landscape-6724639_1280.jpg" alt="hero img" />
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
