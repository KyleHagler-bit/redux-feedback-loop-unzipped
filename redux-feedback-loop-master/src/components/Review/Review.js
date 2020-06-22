import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import './Review.css';
// import swal from "sweetalert";
import { withRouter } from "react-router";
import {  Button, Paper} from "@material-ui/core";

class Review extends React.Component {
 //here in review on submit is when the data should be sent to the database....

postHandler = (form) =>{
  axios.post(`/api/review`, form )
      .then(response => {

        //some kind of way to clear global state
       //DISPATCH
       this.props.dispatch({ type: "CLEAR", payload: {} });

      })
      .catch( error => {
        console.log(error);
        alert(`ERROR`);
      })
}

 submitInfo = (event) => {
  // validation is handled by the form "required" attribute
  event.preventDefault();
  this.postHandler(this.props.form);
  this.props.history.push("/submission");
};

  render() {
    const {feeling, understanding, support, comments} = this.props.form;
    console.log(`feel: ${feeling} understand: ${understanding}`)
    return (
      <div>
        <h2>Review Your Feedback</h2>
        
          <Paper elevation ={6} style={{width: "20%", margin:"auto", padding: "1%"}}>
        <h4>Feelings:</h4>{feeling}<br/>
        <h4>Understanding:</h4> {understanding} <br/>
        <h4>Support:</h4> {support}<br/>
        <h4>Comments:</h4> {comments}<br/>
        </Paper>
        <Button color="primary" variant = "contained" id="submit" onClick={this.submitInfo}>Submit</Button>
        
      </div>
    ); // end return
  } // end render
} // end class 

const mapStateToProps = (state) => {
	// pull current order from Redux store
	return {
    form: state.form
  };
};

export default withRouter(connect(mapStateToProps)(Review));