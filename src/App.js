import React from 'react';
import './App.css';
import MovieList from './movieList';
import MovieDetail from './movieDetail';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/detail/' component={MovieDetail} />
          <Route exact path='/'  component={MovieList} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
