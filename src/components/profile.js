import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Days  from './Days';
import './profile.css'

class Profile extends Component {
  render() {
		return (
			<div className="Usernew">
        <Days/>
			</div>
		);
	}
}
export default Profile;
