import React from "react";
import axios from "axios";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { withRouter } from "react-router";
// import { Input, TextField, Button, Select, MenuItem, Paper} from "@material-ui/core";

class Review extends React.Component {
 

  render() {
    const {feeling} = this.props.feeling;
    return (
      <div>
        <h2>Review Your Feedback</h2>
        Feelings:{feeling} <br/>
        Understanding: <br/>
        Support: <br/>
        Comments: <br/>
        <button>Submit</button>
      </div>
    ); // end return
  } // end render
} // end class 

const mapStateToProps = (state) => {
	// pull current order from Redux store
	return {
    feeling: state.feeling,
  };
};

export default withRouter(connect(mapStateToProps)(Review));