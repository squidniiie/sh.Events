import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './view/Main';
import Detail from './Components/Detail';
import Explore from './view/Explore';
import About from './view/About';
import EventForm from './Components/EventForm';
import EventList from './Components/EventList';
import './static/Main.css'
import './Components/Navbar';
import './static/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/new_event">
            <EventForm />
          </Route>
          <Route exact path="/events/:id">
            <Detail />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/events">
            <Explore />
          </Route>
          <Route exact path="/events">
            <EventList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
