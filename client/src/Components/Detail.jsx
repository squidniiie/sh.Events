import '../static/Detail.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
//   THIS IS NOT COMPLETED YET :)
const Detail = () => {
    const { id } = useParams();
    const [eventState, setEventState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/events/${id}`)
            .then(res => {
                console.log(res.data)
                setEventState(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card col bg-light">
                    {
                        (eventState) ?
                            <div className="row">
                                <h1 className="h1">{eventState.eventName}</h1>
                            </div> : <h1>Loading...</h1>
                    }
                    <h1>Detail</h1>
                    <table className="card col-6 ">
                        <thead>
                            <th className="h4">Event Name</th>
                        </thead>
                        <tbody className="col">
                            <tr>Date: {eventState.date}</tr>
                            <tr>Description: {eventState.description}</tr>
                            <tr>Virtual: {eventState.isVirtual}</tr>
                            <tr>Vibes: {eventState.vibes}</tr>
                        </tbody>
                    </table>
                    <Link to={"/api/events/:id"}>Update</Link>
                </div>
            </div>
        </div>
    )
}

export default Detail;
