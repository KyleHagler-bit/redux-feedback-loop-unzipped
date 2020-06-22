import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';


class Submission extends React.Component {

  redirect = () => {

    this.props.history.push('/'); //send user back to "first" page
  }
  render() {

    return (
      <>
        <h2>Thank you!</h2> <br />
        <Button variant="contained" color="primary" onClick={this.redirect}>Leave New Feedback</Button>
      </>
    ); // end return
  } // end render
} // end class 


export default withRouter(connect()(Submission));