import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
// import Async from 'react-code-splitting';
import Nav from 'components/Nav/Nav';
import Landing from 'components/Landing/Landing';
import Team from 'components/Team/Team';
import Signup from 'components/SignUp/Signup';
import NoMatch from 'components/NoMatch/NoMatch';

require('./app.scss');


const App = function() {
	return (
		<div>
			<Helmet>
				<title>MEDREC</title>
				<meta name="description" content="Medrec website" />
			</Helmet>
			<div className="logo"> 
				<img width={'150px'} src={'/images/logo.png'} alt={'Logo'} />
			</div>
			<Nav />			
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/team" component={Team} />
				<Route path="/signup" component={Signup} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>
			<div className="social"> 
				<a href={'https://twitter.com/medialab'} target="_blank"> 
					<img width={'20px'} src={'/images/twitter.png'} alt={'twitter'} />
				</a>
				<a href={'https://www.media.mit.edu/'} target="_blank"> 
					<img width={'30px'} src={'/images/medialab.png'} alt={'medialab'} />
				</a>
			</div>
		</div>
	);
};

export default withRouter(App);
