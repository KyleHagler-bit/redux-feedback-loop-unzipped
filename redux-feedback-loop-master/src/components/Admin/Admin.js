import React from "react";
import './Admin.css';
import axios from "axios";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { withRouter } from "react-router";
import { Table, Button } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


class Admin extends React.Component {
  //here in review on submit is when the data should be sent to the database....


  componentDidMount() {
    // react Component method
    this.getFeedback();
  }

  getFeedback = () => {

    const { dispatch } = this.props;

    // axios server request
    axios.get("/api/review")
      .then((response) => {
        dispatch({ type: "GET_ADMIN", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }; // end GET

  deleteEntry = (id) => {
    const { admin } = this.props;
    axios.delete(`/api/review/${id}`)
      .then((response) => {
        this.props.dispatch({ type: "REMOVE_ENTRY", payload: admin });
        this.getFeedback(); //need to repopulate page
      })
      .catch((error) => {
        console.log("deleteFailure");
        console.log(error);
      })
  }

  render() {
    const { admin } = this.props;
    console.log(admin.length)

    return (
      <>
        <Table id="adminTable">
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Flag</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {(admin.length === 0) && <tr><td colSpan={6}><h2>No entries at this time</h2></td></tr>}
            {admin.map(item => <tr key={item.id}>

              <td style={{ width: "12%" }}>{item.feeling}</td>
              <td style={{ width: "12%" }}>{item.understanding}</td>
              <td style={{ width: "12%" }}> {item.support}</td>
              <td style={{ width: "30%" }}>{item.comments}</td>
              <td style={{ width: "8%" }}><input type="checkbox"></input></td>
              <td style={{ width: "8%" }}> <DeleteForeverIcon id="deleteBtn" onClick={() => this.deleteEntry(item.id)}>
              </DeleteForeverIcon>
              </td>
            </tr>)}
          </tbody>
        </Table>
      </>
    ); // end return
  } // end render
} // end class 

const mapStateToProps = (state) => {

  return {
    admin: state.admin
  };

};

export default withRouter(connect(mapStateToProps)(Admin));