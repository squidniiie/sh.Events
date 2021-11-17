import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './view/Main';
import About from './view/About';
import EventForm from './view/Create';
import Dashboard from './view/Dashboard';
import './static/Main.css';
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
          <Route exact path="/events/:city">
            <Dashboard />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
