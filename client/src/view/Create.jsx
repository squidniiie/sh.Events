import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import '../static/Main.css'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import '../static/Main.css'

export default () => {

    const history = useHistory()

    //An array to store errors from the API
    const [errors, setErrors] = useState([]);
    const [eventName, setEventName] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [isVirtual, setIsVirtual] = useState(false)
    const [description, setDescription] = useState("")
    const [vibes, setVibes] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/new_event', {
            eventName,
            date,
            description,
            city,
            isVirtual,
            vibes
        })
            //MAKES THE POST REQUEST TO THE BACK END
            .then(res => {
                console.log("Submitted")
                //REDIRECT USER TO DASHBOARD
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(err)
            }
            )
    }

    return (
        <div>
            <Navbar />
            <div className="card bg-light col-10">
                <Link to={"/"}>Home</Link>
                <h1>Add New Event</h1>
                <div className="container">
                    <form onSubmit={submitHandler}>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <p>
                            <label>Event Name:</label><br />
                            <input type="text" onChange={e => setEventName(e.target.value)} />
                        </p>
                        <p>
                            <label>When is this event taking place?</label><br />
                            <input type="date" onChange={e => setDate(e.target.value)} />
                        </p>
                        <p>
                            <label>In which city are you hosting this event?</label><br />
                            <select onChange={e => setCity(e.target.value)}>
                                <option></option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="Seattle">Seattle</option>
                            </select>
                        </p>
                        <p>
                            <label>Is this event Virtual?</label><br />
                            <input type="radio" value={true} id="yes" onChange={e => {
                                setIsVirtual(e.target.value);
                                let noButton = document.getElementById("no");
                                noButton.checked = false
                            }
                            } />
                            <label >Yes</label>
                            <br />
                            <input type="radio" value={false} id="no" onChange={e => {
                                setIsVirtual(e.target.value);
                                let yesButton = document.getElementById("yes");
                                yesButton.checked = false
                            }
                            } />
                            <label >No</label>
                        </p>
                        <p>
                            <label>What is the vibe of your event?</label><br />
                            <select name="vibes" id="vibes" value={vibes} onChange={e => setVibes(e.target.value)}>
                                <option></option>
                                <option value="casual">Keeping it Casual</option>
                                <option value="dressy">Dressy/Formal</option>
                                <option value="themed">We're doing a theme, see the box below to add details.🙃 </option>
                            </select>
                        </p>
                        <p>
                            Add some extra details here:
                            <br />
                            <textarea name="description" id="description" cols="50" rows="5" onChange={e => setDescription(e.target.value)}></textarea>
                        </p>
                        <input className="btn btn-outline-info" type="submit" value="Create new sh.Event!" />
                    </form>
                </div>
            </div>
        </div>
    )
}



