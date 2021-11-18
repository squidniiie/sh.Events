import '../static/Detail.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [userState, setUserState] = useState({})
    const history = useHistory();
    const [eventName, setEventName] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [isVirtual, setIsVirtual] = useState(false)
    const [description, setDescription] = useState("")
    const [vibes, setVibes] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/events/${id}`)
            .then(res => {
                console.log(res.data)
                setUserState(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card col-6 bg-light">
                    {
                        (userState) ?
                            <div className="row">
                                <h1 className="h1">{userState.eventName}</h1>
                            </div> : <h1>Loading...</h1>
                    }
                    <h1>Detail</h1>
                    <table className="card col-4 ">
                        <thead>
                            <th className="h4">Event Name</th>
                        </thead>
                        <tbody className="col">
                            <tr>Date: {userState.date}</tr>
                            <tr>Description: {userState.description}</tr>
                            <tr>Virtual: {userState.isVirtual}</tr>
                            <tr>Vibes: {userState.vibes}</tr>
                        </tbody>
                    </table>
                    <Link to={"/api/events/:id"}>Update</Link>
                </div>
            </div>
        </div>
    )
}

export default Detail;
