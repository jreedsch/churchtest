import React from 'react';
import { Link } from "react-router-dom";
import { GET_MOVIE_LIST,
         GET_MOVIE_DETAIL
       } from '../actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

      case GET_MOVIE_LIST:
        // break down the movie result list into a form
        // usable by the grid widget
        const mdata = reformatList(action.payload);
        return { ...state, 'data': mdata };

      case GET_MOVIE_DETAIL:
        return { ...state, 'details': action.payload };

      default:
        return state;
    }
};

// take the original data and only keep the columns that we want
function reformatList(listData) {
  let rowData = [];

  // new movie row object
  var Movie = function(title, popularity, vote_average, vote_count, id) {
    this.detail = <Link to={{ pathname: "/detail", search: "?id="+id}} className="badge badge-primary">{id}</Link>
    this.title = title;
    this.popularity = popularity;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }

  // move data from API call to output array
  listData.forEach(function(listItem){
    let movie = new Movie(listItem.title, listItem.popularity, listItem.vote_average, listItem.vote_count, listItem.id );
    rowData.push(movie);
  });

  // grid column definition
  const mdata = {
    columns: [
      { label: 'Click for Detail', field: 'detail', sort: 'asc', width: 40 },
      { label: 'Title', field: 'title', sort: 'asc', width: 40 },
      { label: 'Popularity', field: 'popularity', sort: 'asc', width: 10 },
      { label: 'Vote Average', field: 'vote_average', sort: 'asc', width: 10 },
      { label: 'Vote Count', field: 'vote_count', sort: 'asc', width: 10 }],
    rows: rowData
  };

  return mdata;
}
