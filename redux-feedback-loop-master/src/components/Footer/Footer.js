import React, { Component } from "react";


class Footer extends Component {
	
  render() {
    let thisDate = new Date();
    let thisYear = thisDate.getFullYear();
    const copyright = "\u00A9";
    return (
      <footer className="App-footer">
        <p>
          {copyright}  Kyle Hagler {thisYear}
        </p>
      </footer>
    ); // end return
  } // end render
} // end class Footer

export default Footer;