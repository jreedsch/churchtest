import {
         GET_MOVIE_LIST,
         GET_MOVIE_DETAIL
       } from './types';

export const getMovieList = () => {

  return function(dispatch) {
    // Dispatching REQUEST action for the popular movie list.
    dispatch({
      type: 'GET_MOVIE_LIST'
    });
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=543dac7330e6b636410bef8db9e6c2b0')
      // Here, we are getting json body(in our case it will contain `results` or `error` prop, depending on request failed or not) from server response
      // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          // TBD: If request failed, dispatch FAILURE action.
          dispatch({
            type: GET_MOVIE_LIST,
            error: body.error
          });
        } else {
          // When everything is ok, dispatch SUCCESS action.
          dispatch({
            type: GET_MOVIE_LIST,
            payload: body.results
          });
        }
      });
   }
}

export const getMovieDetail = (selectedId) => {

  return function(dispatch) {
    // Dispatching REQUEST action to get movie details.
    dispatch({
      type: 'GET_MOVIE_DETAIL'
    });
    return fetch('https://api.themoviedb.org/3/movie/'+selectedId+'?api_key=543dac7330e6b636410bef8db9e6c2b0&language=en-US')
      // Here, we are getting json body from server response
      // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          // TBD: If request failed, dispatch FAILURE action.
          dispatch({
            type: GET_MOVIE_DETAIL,
            error: body.error
          });
        } else {
          // When everything is ok, dispatch SUCCESS action.
          dispatch({
            type: GET_MOVIE_DETAIL,
            payload: body
          });
        }
      });
   }
}
