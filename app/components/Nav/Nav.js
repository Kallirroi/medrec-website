import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {

	const toggleStyle = function(e) {
		var elem = e.target;
		// elem.className = 'navbar navbar-active';
	};

	return (
		<div className="navbar">
			<Link to={'/'} onClick={toggleStyle} >About</Link>
			<Link to={'/team'} onClick={toggleStyle}>Team</Link>
			<Link to={'/signup'} onClick={toggleStyle} >Signup</Link>
			<a href={'http://dci.mit.edu/assets/papers/eckblaw.pdf'} target="_blank">Read the publication</a>
		</div>
	);
};

export default NavBar;
