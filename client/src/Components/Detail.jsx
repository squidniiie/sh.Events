import '../static/Detail.css'
// import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Detail = (props) => {
    const history = useHistory();
    const { event, setEvent, submitted, setSubmitted, formatDate } = props;

    const deleteEvent = (id) => {
        axios.delete('http://localhost:5000/api/events/' + id)
            .then(res => {
                setSubmitted(!submitted)
                setEvent({})
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="d-flex col">
            <table>
                <thead>
                    <th></th>
                </thead>
                {
                    (event.eventName) ?
                        <tbody className="col card">
                            <tr className="h1">{event.eventName}</tr>
                            <tr className="h5"> {formatDate(event.date)}</tr>
                            <tr className="h3">Description: </tr>
                            <tr className="h6">This event {(event.isVirtual) ? "is virtual" : (event.isVirtual === undefined) ? "" : "is in Person"}</tr>
                            <tr className="h6">{event.description} The vibe of "{event.eventName}" is {event.vibes}.</tr>
                            <tr className="btn-group">
                                <button className="btn btn-outline-warning" onClick={(e) => history.push(`/events/${event._id}/edit`)}>Update</button>
                                <button className="btn btn-outline-danger" onClick={(e) => { deleteEvent(event._id) }}>Delete</button>
                            </tr>
                        </tbody > : <div>
                            <img className="col card" src="https://cdn.pixabay.com/photo/2020/07/10/19/07/she-5391770_1280.jpg" alt="girl img" />
                        </div>
                }
            </table>
        </div>
    )
}

export default Detail;
