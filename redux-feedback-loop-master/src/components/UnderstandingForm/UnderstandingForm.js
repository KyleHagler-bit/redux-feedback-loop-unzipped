import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';


class UnderstandingForm extends React.Component {
	
	state = {
    understanding: 0,
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
    this.props.history.push("/support");
  };

  // componentWillUnmout is called when the client navigates away from the form page
  componentWillUnmount() {
    console.log ("understanding payload", this.state)
    this.props.dispatch({ type: "UPDATE_UNDERSTANDING", payload: this.state });
  }
	

  render() {
 
    return (
      <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={this.submitInfo}>
        <input type = "number" onChange={(event) => this.handleChange(event, "understanding")}></input>
        <input type="submit" value="NEXT" />
        </form>
        
      </>
    ); // end return
  } // end render
} // end class 

// pull Redux state
const mapStateToProps = (state) => {
  return {
    understanding: state.understanding
  };
};

export default withRouter(connect(mapStateToProps)(UnderstandingForm));