import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './view/Main';
import About from './view/About';
import Create from './view/Create';
import Dashboard from './view/Dashboard';
import Update from './view/Update';
import Navbar from './Components/Navbar'
import './static/Main.css';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/events/:id/edit">
            <Update />
          </Route>
          <Route exact path="/new_event">
            <Create />
          </Route>
          <Route exact path="/events/:city">
            <Dashboard />
          </Route>
          <Route exact path="/events/one_event/:id">
            <Detail />
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
