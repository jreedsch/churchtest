import React, { Component } from 'react';
import './App.css';
import { getMovieDetail } from './actions';
import { connect } from 'react-redux';

class MovieDetail extends Component {

  constructor(props) {
    super(props);
    console.log('IN MovieDetail.constructor, props: ');
    console.log(this.props);
  }

  componentDidMount() {
    const selectedId = this.props.location.search.substring(4);
    console.log("selectedId: "+selectedId);
    this.props.getMovieDetail(selectedId);
  }

        //  title: {this.props.title}

  render() {
    console.log("IN MovieDetail.render(), this.props.details: "+JSON.stringify(this.props.details));
    if (this.props.details) {
    return (
      <div className="Detail">
        <h1>Movie Detail!</h1>
        <p>
         title: {this.props.details.title}
        </p>
      </div>
    );
  } else {
    return (
      <div className="Detail">
        <h1>Movie Detail.</h1>
      </div>
    );
  }
  }

}

const mapStateToProps = state => {
  //console.log("IN mapStateToProps, state: "+JSON.stringify(state));
  //console.log("IN mapStateToProps, state.movies: "+JSON.stringify(state.movies) );
  console.log("IN mapStateToProps, state.movies.details: "+JSON.stringify(state.movies.details) );
  return { details: state.movies.details };
};

//export default App;
export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
