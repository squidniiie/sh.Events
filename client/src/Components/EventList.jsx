import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../static/EventList.css'
// import { useParams } from 'react-router-dom';

const EventList = () => {
    // const { city } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/events`)
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="container">
            {
                events.map((event, index) => {
                    return (
                        <div className="oneEventCard" key={index}>
                            <h4>{event.eventName}</h4>
                            <p>{event.date}</p>
                            <p>{(event.isVirtual) ? "Virtual" : "In Person"}</p>
                        </div>
                    )
                })}
        </div>
    )
}
export default EventList;

