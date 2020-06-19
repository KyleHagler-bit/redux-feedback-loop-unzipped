import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';




class App extends Component {

  getFeedback = () => {
    // grab the dispatch function from props
    const { dispatch } = this.props;
    
    // axios server request
    axios.get("/")
      .then((response) => {
        dispatch({ type: "GET_FEEDBACK", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }; // end getFeedback

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <br />
          <Switch>
            <Route exact path ="/">
            <FeelingForm/>
            </Route>
            <Route exact path ="/understanding">
            <UnderstandingForm/>
            </Route>
            <Route exact path ="/support">
            <SupportForm/>
            </Route>
            <Route exact path ="/comments">
            <CommentForm/>
            </Route>
            <Route exact path ="/review">
            <Review getFeedback = {this.getFeedback}/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
