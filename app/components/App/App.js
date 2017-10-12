import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
// import Async from 'react-code-splitting';
import Nav from 'components/Nav/Nav';
import Landing from 'components/Landing/Landing';
import Team from 'components/Team/Team';
import Signup from 'components/SignUp/Signup';
import Technical from 'components/Technical/Technical';
import NoMatch from 'components/NoMatch/NoMatch';

require('./app.scss');


const App = function() {
	return (
		<div>
			<Helmet>
				<title>MedRec</title>
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
				<Route path="/technical" component={Technical} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>
			<div className="social"> 
				<a href={'https://www.media.mit.edu/'} target="_blank"> 
					<img height={'30px'} src={'/images/medialab.png'} alt={'medialab'} />
				</a>				
				<a href={'https://www.media.mit.edu/groups/viral-communications/overview/'} target="_blank"> 
					<img height={'30px'} src={'/images/viral_logo.png'} alt={'viral communications'} />
				</a>				
				<a href={'https://www.rwjf.org/'} target="_blank"> 
					<img height={'35px'} src={'/images/rwjf.png'} alt={'RWJF'} />
				</a>
		
			</div>
		</div>
	);
};

export default withRouter(App);
