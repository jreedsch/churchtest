import React, { Component } from 'react';
import './App.css';
import { getMovieList } from './actions';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';

class MovieList extends Component {

  constructor(props) {
    super(props);
    console.log('IN MovieList.constructor, props: ');
    console.log(this.props);
  }

  componentWillMount() {
    console.log('IN MovieList.componentWillMount, props: ');
    console.log(this.props);
    this.props.getMovieList(this.props);
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
        console.log('IN MovieList.componentDidMount(), props = ');
        console.log(this.props);
    console.log('IN MovieList.componentDidMount(), state = ');
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <MDBDataTable
          striped
          bordered
          small
          data={this.props.data}
        />
      </div>
    );
  }
} // end of component

const mapStateToProps = state => {
  console.log("IN mapStateToProps, state: "+JSON.stringify(state));
  console.log("IN mapStateToProps, state.movies: "+JSON.stringify(state.movies) );
  console.log("IN mapStateToProps, state.movies.data: "+JSON.stringify(state.movies.data) );
  return { data: state.movies.data };
};

//export default App;
export default connect(mapStateToProps, { getMovieList })(MovieList);
