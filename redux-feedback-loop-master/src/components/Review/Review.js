import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem, Paper} from "@material-ui/core";

class Review extends React.Component {
 //here in review on submit is when the data should be sent to the database....

  render() {
    const {feeling} = this.props.feeling;
    const {understanding} = this.props.understanding;
    const {support} = this.props.support;
    const {comments} = this.props.comments;
    console.log(`feel: ${feeling} understand: ${understanding}`)
    return (
      <div>
        <h2>Review Your Feedback</h2>
        Feelings:{feeling} <br/>
        Understanding: {understanding} <br/>
        Support: {support}<br/>
        Comments: {comments}<br/>
        <button>Submit</button>
      </div>
    ); // end return
  } // end render
} // end class 

const mapStateToProps = (state) => {
	// pull current order from Redux store
	return {
    feeling: state.feeling,
    understanding: state.understanding,
    support: state.support,
    comments: state.comments
  };
};

export default withRouter(connect(mapStateToProps)(Review));