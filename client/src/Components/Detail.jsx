import '../static/Detail.css'
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
        <div className="detailContainer">
                {
                    (event.eventName) ?
                        <div className="detailCard">
                            <h1 className="detailHeader">{event.eventName}</h1>
                            <h5> {formatDate(event.date)}</h5>
                            <h3>Description: </h3>
                            <h6>This event {(event.isVirtual) ? "is virtual" : (event.isVirtual === undefined) ? "" : "is in Person"}</h6>
                            <h6>The vibe of "{event.eventName}" is {event.vibes}.</h6>
                            <h6>{event.description}</h6>
                            <h6 className='bothDetailButtons'>
                                <button className="updateButton" onClick={(e) => history.push(`/events/${event._id}/edit`)}>Update</button>
                                <button className="deleteButton" onClick={(e) => { deleteEvent(event._id) }}>Delete</button>
                            </h6>
                        </div > : <div className="noEventSelected">
                            <h3 className="noEventMessage">Select event to view details here</h3>
                        </div>
                }
        </div>
    )
}

export default Detail;
