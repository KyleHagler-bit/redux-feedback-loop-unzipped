import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';


class FeelingForm extends React.Component {
	
	state = {
    feeling:0,
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
    this.props.history.push("/understanding");
  };

  //do I need this?
  componentDidMount() {
		
  }

  // componentWillUnmout is called when the client navigates away from the form page
  // componentWillUnmount() {
  //   console.log ("feeling payload", this.state)
  //   this.props.dispatch({ type: "UPDATE", payload: this.state });
  // }

  render() {
 
    return (
      <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={this.submitInfo}>
        <input type = "number" onChange={(event) => this.handleChange(event, "feeling")}></input>
        <input type="submit" value="NEXT" />
        </form>
        
      </>
    ); // end return
  } // end render
} // end class 

// pull Redux state
const mapStateToProps = (state) => {
  return {
    feeling: state.feeling
  };
};

export default withRouter(connect(mapStateToProps)(FeelingForm));
