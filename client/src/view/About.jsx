import React from 'react'
import "../Components/Navbar"
import '../static/About.css'


function About() {
    return (
        <div class=" about container"> {/* MAIN PAGE DIV */}
            <div class="about row">
                <div class="col"> {/* ABOUT THE MISSION DIV */}
                    <div class="about card">
                        <h3>About our Mission</h3>
                        <p>
                            Our group wanted to create a safe space for networking events to be created and posted for women, by women, in technological fields.
                        </p>
                        <p>
                            The idea is simple, women in STEM fields being able to find like minded women that share common interests inside and outside the tech industry. We want to empower women to take networking into their own hands in a fun and exciting way. To create events that can be anything from casual meet ups, to formal get togethers, to virtual happy hours and more. The event is yours to create! Lets network!
                        </p>
                        <button class="btn btn-outline-secondary">Join us!</button>
                    </div>
                </div>
                <div class="d-flex img col"> {/* IMAGES AND OTHERS DIV */}
                    <img src="https://i.redd.it/zjzi7pgpwg081.png" alt="collage" class="collage_image" style={{ width: "700px", height: "550px" }} />
                </div>
            </div>
        </div>

    )
}

export default About
