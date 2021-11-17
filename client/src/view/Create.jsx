import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../static/Main.css'

function EventForm() {
    return (
        <div>
            <Navbar />
            <Link to={"/"}>Home</Link>
            <div className="container">
                <h1>Add New Event</h1>
                <form>
                    <p>
                        <label>Event Name:</label><br />
                        <input type="text" />
                    </p>
                    <p>
                        <label>When is this event taking place?</label><br />
                        <input type="date" />
                    </p>
                    <p>
                        <label>In which city are you hosting this event?</label><br />
                        <select>
                            <option></option>
                            <option value="los angeles">Los Angeles</option>
                            <option value="san francisco">San Francisco</option>
                            <option value="seattle">Seattle</option>
                        </select>
                    </p>
                    <p>
                        <label>Is this event Virtual?</label><br />
                        <input type="radio" value="Yes" />
                        <label>Yes</label>
                        <br />
                        <input type="radio" value="No" />
                        <label>No</label>
                    </p>
                    <p>
                        <label>What is the vibe of your event?</label><br />
                        <select>
                            <option></option>
                            <option value="casual">Keeping it Casual</option>
                            <option value="dressy">Dressy/Formal</option>
                            <option value="themed">We're doing a theme, see the description for details.🙃 </option>
                        </select>
                    </p>
                    <input className="btn btn-outline-info" type="submit" value="Create new sh.Event!" />
                </form>
            </div>
        </div>
    )
}

export default EventForm;
