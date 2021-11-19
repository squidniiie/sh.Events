import React, { useState } from 'react';
import axios from 'axios';
import '../static/EventList.css'
import { useHistory } from 'react-router-dom';

const EventList = (props) => {
    const { city, clickHandler, events, formatDate } = props;
    const history = useHistory();


    return (
        <div className="row">
            {
                events.map((event, index) => {
                    return (
                        <div className="oneEventCard" key={index}>
                            <h4>{event.eventName}</h4>
                            <p>{formatDate(event.date)}</p>
                            <p>{(event.isVirtual) ? "Virtual" : "In Person"}</p>
                            <button className="detail btn" onClick={(e) => clickHandler(event._id)}>
                                See Full Event
                            </button>
                        </div>
                    )
                })}
        </div>
    )
}
export default EventList;

