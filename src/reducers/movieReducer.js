import { GET_MOVIE_LIST
       } from '../actions/types';

//const INITIAL_STATE = { data: '' };
const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {

    console.log("action.type: "+action.type);
    console.log("action.payload: "+JSON.stringify(action.payload));

    switch (action.type) {

      case GET_MOVIE_LIST:
        // break down the movie result list into a form
        // usable by the grid widget
        console.log("IN movieReducer GET_MOVIE_LIST");
        const mdata = reformatList(action.payload);

        //return { ...state, 'data': action.payload };
        return { ...state, 'data': mdata };

      default:
        return state;
    }
};

// take the original data and only keep the columns that we want
function reformatList(listData) {
  console.log("IN movieReducer.reformatList, list size: "+listData.length);

  let rowData = [];
  var Movie = function(title, popularity, vote_average, vote_count, id) {
    this.title = title;
    this.popularity = popularity;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.id = id;
  }

  listData.forEach(function(listItem){
    let movie = new Movie(listItem.title, listItem.popularity, listItem.vote_average, listItem.vote_count, listItem.id );
    rowData.push(movie);
  });

  const mdata = {
    columns: [
      { label: 'Title', field: 'title', sort: 'asc', width: 40 },
      { label: 'Popularity', field: 'popularity', sort: 'asc', width: 10 },
      { label: 'Vote Average', field: 'vote_average', sort: 'asc', width: 10 },
      { label: 'Vote Count', field: 'vote_count', sort: 'asc', width: 10 },
      { label: 'ID', field: 'id', sort: 'asc', width: 10 }],
    rows: rowData
  };

  return mdata;
}
