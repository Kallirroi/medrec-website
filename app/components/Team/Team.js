import React from 'react';

const Team = function() {
	return (
		<div className="team-wrapper">
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/Andy.jpg'} alt={'Andy Lipman'} />
				<span className="team-info"> Andy Lipman <br/>  <span className="team-info-contact">  Principal Investigator <br/>contact </span> </span>
			</div>
			<div className="team-card">
				<img width={'140px'}  src={'/images/Ariel.jpg'} alt={'Ariel Ekblaw'} />
				<span className="team-info"> Ariel Ekblaw <br/> <span className="team-info-contact">  PhD candidate, MIT Media Lab  <br/> contact </span> </span>
			</div>
			<div className="team-card">
				<img width={'140px'}  src={'/images/Agnes.jpg'} alt={'Agnes Cameron'} />
				<span className="team-info"> Agnes Cameron <br/> <span className="team-info-contact"> MA candidate, MIT Media Lab  <br/>  contact </span> </span>
			</div>				
			<div className="team-card">
				<img width={'140px'}  src={'/images/Britney.jpg'} alt={'Britney Johnson'} />
				<span className="team-info"> Britney Johnson <br/> <span className="team-info-contact">  MA candidate, MIT Media Lab  <br/> contact </span> </span>
			</div>				
			<div className="team-card">
				<img width={'140px'}  src={'/images/Kalli.jpg'} alt={'Kalli Retzepi'} />
				<span className="team-info"> Kalli Retzepi <br/>  <span className="team-info-contact">  MA candidate, MIT Media Lab  <br/>contact </span> </span>
			</div>			
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/Nchinda.jpg'} alt={'Nchinda Nchinda'} />
				<span className="team-info"> Nchinda Nchinda <br/>   <span className="team-info-contact">  MA candidate, MIT  <br/> contact </span> </span>
			</div>
		</div>
	);
};

export default Team;
