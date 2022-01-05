import React, { useState } from 'react';
import axios from 'axios';
import '../static/EventList.css'

const EventList = (props) => {
    const { city, clickHandler, events, formatDate } = props;


    return (
        <div className="listContainer">
            {
                events.map((event, index) => {
                    return (
                        <div className="oneEventCard" key={index}>
                            <h4>{event.eventName}</h4>
                            <p>{formatDate(event.date)}</p>
                            <p>{(event.isVirtual) ? "Virtual" : "In Person"}</p>
                            <button className="detailButton" onClick={(e) => clickHandler(event._id)}>Select Event</button>
                        </div>
                    )
                })}
        </div>
    )
}
export default EventList;

