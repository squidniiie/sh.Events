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
                            Our group decided that we wanted to create what is essentially a safe space for events to be created and posted for women technological fields.
                        </p>
                        <p>
                            The idea is simple, women in tech being able to find a safe space for what they love to do. If they cannot find it themselves, to then be able to create that safe space for themselves and others in their area. These events can be anything from casual meet ups to formal get togethers. The event is yours to create!
                        </p>
                        <button class="btn btn-outline-info">Join us!</button>
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
