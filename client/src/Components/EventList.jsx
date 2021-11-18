import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EventList = () => {
    const { city } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/events/${city}`)
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="container">
            {
                events.map((event, index) => {
                    return (
                        <div key={index} className="oneEventCard">

                            <h4>{event.eventName}</h4>
                            <p>{event.date}</p>
                            <p>{event.isVirtual}</p>
                        </div>
                    )
                })}
        </div>
    )
}
export default EventList;

