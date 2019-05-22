import React, { Component} from 'react';
import { getMovieList } from './actions';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';

class MovieList extends Component {

  componentWillMount() {
    this.props.getMovieList(this.props);
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    return (
      <div className="App">
       <div>
         <h2 className="red-text"><b>Popular Movies!</b></h2>
       </div>
       <div>
        <MDBDataTable
          striped
          bordered
          small
          data={this.props.data}
        />
       </div>
      </div>
    );
  }
} // end of component

const mapStateToProps = state => {
  return { data: state.movies.data };
};

export default connect(mapStateToProps, { getMovieList })(MovieList);
