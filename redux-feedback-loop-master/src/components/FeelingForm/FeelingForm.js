import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {Button, Slider} from '@material-ui/core';
import './FeelingForm.css';



class FeelingForm extends React.Component {
	
	state = {
    feeling:0,
  }

  

	// // handle change handles input field changes
  // handleChange = (event, fieldName) => {
  //   // console.log(`${fieldName}`, event);
  //   this.setState({ [fieldName]: event.target.value });
  // };
  
  handleChange = (event, feeling) =>{
    this.setState({
      feeling
    })
   
  }

  // submit info handles our form submission
  submitInfo = (event) => {
    let value = this.state.feeling;
    console.log("checking in submit info in feelingform",this.state.feeling)
    if ( value <0 || value > 6 ){
      alert ("please input a value between 0 and 6");
      return;
    }
    event.preventDefault();
    this.props.dispatch({ type: "UPDATE", payload: this.state });
    this.props.history.push("/understanding");
  };

  //do I need this?
  componentDidMount() {
		
  }

  // function valuetext(value) {
  //   return ${value};
  // }

  // componentWillUnmout is called when the client navigates away from the form page
  // componentWillUnmount() {
  //   console.log ("feeling payload", this.state)
  //   this.props.dispatch({ type: "UPDATE", payload: this.state });
  // }

  render() {
    const marks = [
      {
        value: 1,
        label: 'I feel pretty horrible',
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
        label: 'I feel great!',
      },
    ];
 
    return (
      <>
      
        <h2>How are you feeling today?</h2>
        <form onSubmit={this.submitInfo}>
        {/* <input required type = "number" onChange={(event) => this.handleChange(event, "feeling")}></input> */}
        <Slider id="feelingSlider"
  defaultValue={1}
  onChange={this.handleChange}
  aria-labelledby="discrete-slider-small-steps"
  step={1}
  marks
  min={1}
  max={6}
  valueLabelDisplay="auto"
  marks = {marks}
  
/> <br/>
        <Button color="primary" variant = "contained" type="submit" value="NEXT" id="submit">NEXT</Button>
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
