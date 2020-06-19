import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';


class SupportForm extends React.Component {
	
	state = {
    support: 0,
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
    this.props.history.push("/comments");
  };

  // componentWillUnmout is called when the client navigates away from the form page
  componentWillUnmount() {
    console.log ("support payload", this.state)
    this.props.dispatch({ type: "UPDATE_SUPPORT", payload: this.state });
  }
	

  render() {
 
    return (
      <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={this.submitInfo}>
        <input type = "number" onChange={(event) => this.handleChange(event, "support")}></input>
        <input type="submit" value="NEXT" />
        </form>
        
      </>
    ); // end return
  } // end render
} // end class 

// pull Redux state
const mapStateToProps = (state) => {
  return {
    support: state.support
  };
};

export default withRouter(connect(mapStateToProps)(SupportForm));