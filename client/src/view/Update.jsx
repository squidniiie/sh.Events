import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import '../static/Update.css'

const Update = () => {

    const { id } = useParams()
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [eventName, setEventName] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [isVirtual, setIsVirtual] = useState(false)
    const [description, setDescription] = useState("")
    const [vibes, setVibes] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:5000/api/events/${id}`)
            .then(res => {
                console.log("updating")
                console.log(res.data)
                setEventName(res.data.eventName)
                setDate(res.data.date)
                setCity(res.data.city)
                setIsVirtual(res.data.isVirtual)
                setDescription(res.data.description)
                setVibes(res.data.vibes)
            })
        // .catch(err => console.log(err))
    }, [])

    const submitHandler = e => {
        e.preventDefault();
        const postData = {
            eventName,
            date,
            description,
            city,
            isVirtual,
            vibes
        }
        axios.put(`http://localhost:5000/api/events/${id}/edit`, postData)
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        const formatDate = (dateString) => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            return new Date(dateString).toLocaleDateString(undefined, options)
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-light row">
                <h1>Add New Event</h1>
                <form onSubmit={submitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label>Event Name:</label><br />
                        <input type="text" onChange={e => setEventName(e.target.value)} value={eventName} />
                    </p>
                    <p>
                        <label>When is this event taking place?</label><br />
                        <input type="text" onChange={e => setDate(e.target.value)} value={date} />
                    </p>
                    <p>
                        <label>In which city are you hosting this event?</label><br />
                        <select onChange={e => setCity(e.target.value)} value={city}>
                            <option></option>
                            <option value="los_angeles">Los Angeles</option>
                            <option value="san_francisco">San Francisco</option>
                            <option value="seattle">Seattle</option>
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
                        <textarea value={description} name="description" id="description" cols="50" rows="5" onChange={e => setDescription(e.target.value)}></textarea>
                    </p>
                    <input className="btn btn-outline-info" type="submit" value="Update your Event" />
                </form>
            </div>
        </div>
    )
}

export default Update