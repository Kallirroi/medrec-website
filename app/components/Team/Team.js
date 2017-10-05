import React from 'react';

const Team = function() {
	return (
		<div className="team-wrapper">
			<div className="team-card">
				<img width={'140px'}  src={'/images/ariel.jpg'} alt={'Ariel Ekblaw'} />
				<span className="team-info"> Ariel Ekblaw <br/> <span className="team-info-contact"> contact </span> </span>
			</div>
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/safa.jpg'} alt={'Asaph Azaria'} />
				<span className="team-info"> Asaph Azaria <br/> <span className="team-info-contact"> contact </span> </span>
			</div>
			<div className="team-card"> 
				<img width={'140px'}  src={'/images/andy.jpeg'} alt={'Andy Lipman'} />
				<span className="team-info"> Andy Lipman <br/> <span className="team-info-contact"> contact </span> </span>
			</div>
		</div>
	);
};

export default Team;
