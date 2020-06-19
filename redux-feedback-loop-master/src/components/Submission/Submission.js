import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';


class Submission extends React.Component {

  render() {
 
    return (
      <>
        <h2>Thank you!</h2>
        <button>Leave New Feedback</button>
      </>
    ); // end return
  } // end render
} // end class 


export default withRouter(connect()(Submission));