import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button, Input } from '@material-ui/core';
import './CommentForm.css';


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

  render() {

    return (
      <>
        <h2>Any comments you want to leave?</h2><br />
        <form onSubmit={this.submitInfo}>
          <input id="comments" type="text" onChange={(event) => this.handleChange(event, "comments")} placeholder="Start writing here!"></input><br />
          <Button color="primary" variant="contained" type="submit" value="NEXT" id="next">NEXT</Button>
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