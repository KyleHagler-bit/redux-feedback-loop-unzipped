import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button} from '@material-ui/core';


class Submission extends React.Component {

  redirect = () => {
    // TODO: Clear the cart and navigate to the product page
    
this.props.history.push('/'); //first stretch goal
}
  render() {
  
    return (
      <>
        <h2>Thank you!</h2> <br/>
        <Button variant = "contained" color = "primary" onClick={this.redirect}>Leave New Feedback</Button>
      </>
    ); // end return
  } // end render
} // end class 


export default withRouter(connect()(Submission));