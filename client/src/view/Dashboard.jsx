import React from 'react'
import Detail from '../Components/Detail';
import EventList from '../Components/EventList';
import '../static/Detail.css'

function Dashboard() {
    return (
        <div>
            <div className="container bg-secondary">
                <div className="row ">
                    {/* <div className="card col bg-light ">
                        <h1>Second Card</h1>
                    </div> */}
                    <Detail />
                </div>
                <EventList />
            </div>
        </div>
    )
}

export default Dashboard;
