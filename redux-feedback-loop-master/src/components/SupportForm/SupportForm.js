import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button, Slider } from '@material-ui/core';
import './SupportForm.css';


class SupportForm extends React.Component {

  state = {
    support: 1,
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
    this.props.history.push("/comments");
  };

  render() {
    const marks = [
      {
        value: 1,
        label: 'I don\'t feel any support',
      },
      {
        value: 3,
        label: 'I\'ve felt better',
      },
      {
        value: 4,
        label: 'I\'ve felt worse',
      },
      {
        value: 6,
        label: 'I feel very supported!',
      },
    ];
    return (
      <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={this.submitInfo}>
          <Slider id="supportSlider"
            defaultValue={1}
            onChange={this.handleChange}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            min={1}
            max={6}
            valueLabelDisplay="auto"
            marks={marks}
          /> <br />
          <Button color="primary" variant="contained" type="submit" value="NEXT" id="next">NEXT</Button>
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