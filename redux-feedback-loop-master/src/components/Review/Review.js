import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem, Paper} from "@material-ui/core";

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

// componentWillUnmount() {
//   //This should be a post
//   this.postHandler(this.props.form);
// }

  render() {
    const {feeling, understanding, support, comments} = this.props.form;
    console.log(`feel: ${feeling} understand: ${understanding}`)
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <form onSubmit={this.submitInfo}>
        Feelings:{feeling} <br/>
        Understanding: {understanding} <br/>
        Support: {support}<br/>
        Comments: {comments}<br/>
        <button>Submit</button>
        </form>
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