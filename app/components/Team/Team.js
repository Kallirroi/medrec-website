import React from 'react';

const Team = function() {
	return (
		<div className="team-wrapper">
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/Andy.jpg'} alt={'Andy Lipman'} />
				<span className="team-info"> Andy Lipman <br/> Principal Investigator <br/> <span className="team-info-contact"> contact </span> </span>
			</div>
			<div className="team-card">
				<img width={'140px'}  src={'/images/Ariel.jpg'} alt={'Ariel Ekblaw'} />
				<span className="team-info"> Ariel Ekblaw <br/> PhD candidate, MIT Media Lab  <br/> <span className="team-info-contact"> contact </span> </span>
			</div>
			<div className="team-card">
				<img width={'140px'}  src={'/images/Agnes.jpg'} alt={'Agnes Cameron'} />
				<span className="team-info"> Agnes Cameron <br/> MA candidate, MIT Media Lab  <br/> <span className="team-info-contact"> contact </span> </span>
			</div>				
			<div className="team-card">
				<img width={'140px'}  src={'/images/Britney.jpg'} alt={'Britney Johnson'} />
				<span className="team-info"> Britney Johnson <br/> MA candidate, MIT Media Lab  <br/> <span className="team-info-contact"> contact </span> </span>
			</div>				
			<div className="team-card">
				<img width={'140px'}  src={'/images/Kalli.jpg'} alt={'Kalli Retzepi'} />
				<span className="team-info"> Kalli Retzepi <br/> MA candidate, MIT Media Lab  <br/> <span className="team-info-contact"> contact </span> </span>
			</div>			
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/Nchinda.jpg'} alt={'Nchinda Nchinda'} />
				<span className="team-info"> Nchinda Nchinda <br/> MA candidate, MIT  <br/>  <span className="team-info-contact"> contact </span> </span>
			</div>
		</div>
	);
};

export default Team;
