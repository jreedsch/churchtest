import React, { Component } from 'react';
import { getMovieDetail } from './actions';
import { connect } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class MovieDetail extends Component {

  componentDidMount() {
    const selectedId = this.props.location.search.substring(4);
    this.props.getMovieDetail(selectedId);
  }

  render() {

    if (this.props.details) {
      const imageURI = "https://image.tmdb.org/t/p/w500/"+this.props.details.poster_path;

      return (
         <MDBCol>
          <MDBCard style={{ width: "25rem" }}>
           <MDBCardImage className="card-img-top" src={imageURI}/>
            <MDBCardBody>
             <MDBCardTitle className="font-weight-bold mb-3">{this.props.details.title}</MDBCardTitle>
             <MDBCardText className="blue-text">
              {this.props.details.overview}
             </MDBCardText>
             <MDBCardText className="text-left black-text">
               Release date: {this.props.details.release_date}<br />
               Run time: {this.props.details.runtime} minutes.
             </MDBCardText>
           </MDBCardBody>
          </MDBCard>
         </MDBCol>
      );
    } else {
      return (
        <div className="Detail">
          <h1>Movie Detail.</h1>
        </div>
      );
    }
  } //end render
}

const mapStateToProps = state => {
  return { details: state.movies.details };
};

export default connect(mapStateToProps, { getMovieDetail })(MovieDetail);
