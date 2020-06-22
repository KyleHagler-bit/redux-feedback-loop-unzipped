import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button, Slider } from '@material-ui/core';
import './UnderstandingForm.css';


class UnderstandingForm extends React.Component {

  state = {
    understanding: 1,
  }

  // handle change handles input field changes
  handleChange = (event, fieldName) => {
    // console.log(`${fieldName}`, event);
    this.setState({ [fieldName]: event.target.value });
  };

  // submit info handles our form submission
  submitInfo = (event) => {

    event.preventDefault();
    this.props.dispatch({ type: "UPDATE", payload: this.state });
    this.props.history.push("/support");
  };

  render() {
    const marks = [
      {
        value: 1,
        label: 'I don\'t get any of this',
      },
      {
        value: 3,
        label: 'I\'m sort of lost',
      },
      {
        value: 4,
        label: 'I\'m getting there',
      },
      {
        value: 6,
        label: 'I understand it all!',
      },
    ];
    return (
      <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={this.submitInfo}>
          {/* <input required type = "number" onChange={(event) => this.handleChange(event, "understanding")}></input> */}
          <Slider id="understandingSlider"
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
    understanding: state.understanding
  };
};

export default withRouter(connect(mapStateToProps)(UnderstandingForm));