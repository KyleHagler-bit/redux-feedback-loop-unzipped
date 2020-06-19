import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';


class CommentForm extends React.Component {
	
	state = {
    comments: "",
  }

	// handle change handles input field changes
  handleChange = (event, fieldName) => {
    // console.log(`${fieldName}`, event);
    this.setState({ [fieldName]: event.target.value });
  };
	
  // submit info handles our form submission
  submitInfo = (event) => {
		// validation is handled by the form "required" attribute
    event.preventDefault();
    this.props.dispatch({ type: "UPDATE", payload: this.state });
    this.props.history.push("/review");
  };

  // componentWillUnmout is called when the client navigates away from the form page
  // componentWillUnmount() {
  //   console.log ("comments payload", this.state)
  //   this.props.dispatch({ type: "UPDATE", payload: this.state });
  // }
	

  render() {
 
    return (
      <>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={this.submitInfo}>
        <input type = "text" onChange={(event) => this.handleChange(event, "comments")}></input>
        <input type="submit" value="NEXT" />
        </form>
        
      </>
    ); // end return
  } // end render
} // end class 

// pull Redux state
const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default withRouter(connect(mapStateToProps)(CommentForm));