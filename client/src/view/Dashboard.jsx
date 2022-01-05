import React, { useEffect, useState } from 'react';
import Detail from '../Components/Detail';
import EventList from '../Components/EventList';
import '../static/Detail.css';
import '../static/Dashboard.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Dashboard(props) {
    
    const { city } = useParams();
    
    const [event, setEvent] = useState({})
    const [eventId, setEventId] = useState({})
    const [events, setEvents] = useState([]);
    
    const [submitted, setSubmitted] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/events/${city}/city`)
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));
    }, [submitted])

    const clickHandler = (eventId) => {
        setEventId(eventId)
        axios.get(`http://localhost:5000/api/events/${eventId}`)
            .then(res => {
                console.log(res.data)
                setEvent(res.data)
            })
            .catch(err => console.error(err));

    }
    // TIMESTAMP REFORMAT FROM ISO
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div>
            <div className="dashboardContainer">
                <div className="eventListings">
                    <EventList formatDate={formatDate} city={city} events={events} clickHandler={clickHandler} />
                </div>
                <div className="eventDetails">
                    <Detail formatDate={formatDate} setEvent={setEvent} submitted={submitted} setSubmitted={setSubmitted} event={event} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
