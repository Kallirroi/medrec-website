import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	return (
		<div>
			<div className="main">
				<div className="GIF"> 
					<img width={'180px'} src={'/images/shape.gif'} alt={'GIF'} />
				</div>	
				<div className="sidebar"> 
					<b>Resources</b>
					<p>
						<a href="http://dci.mit.edu/" target="_blank">MIT Digital Currency Initiative</a> 
						<br/>
						<a href="https://medium.com/blockchannel/a-beginners-guide-to-ethereum-5e7e132a854d" target="_blank">A beginner's guide to ethereum</a> 
						<br/>
						<a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank">The Ethereum white paper</a> 
						<br/>
						<a href="https://hbr.org/2017/03/the-blockchain-will-do-to-banks-and-law-firms-what-the-internet-did-to-mediar" target="_blank">Harvard Business Review on Blockchain</a> 
					</p>
				</div>
				<h3> What is Medrec?</h3>
				<p>Electronic Health Records (EHRs) were never designed to manage the complexities of multi-institutional, lifetime medical records. As patients move between providers, their data becomes scattered across different organizations, losing easy access to past records. As providers — not patients — are the primary stewards of EHRs, patients face significant hurdles in viewing their reports, correcting erroneous data, and distributing the information. The situation is much like consumer finance, where an individual may have several bank accounts, credit cards, loans, and assets but no unified way to access and control them. In the case of finance, however,  there is an infrastructure in place that greases the wheels: currency.  With medical information we are still in the age of barter.</p>

				<p>MedRec is the combination of a social need with a technological enabler. We proposes a system that prioritizes patient agency, giving a transparent and accessible view of medical history, owned and controlled by them. Most important, patients must be assured that their records (and the metadata associated with them) remain fully confidential, to retain trust and continued participation in the medical system. To continue the banking analogy, financial systems may contain multiple different depositories of currency, perhaps one for each provider network.  Here the problem is that health records are not fungible; each is an individual’s unique imprint.  There is no like-for-like trade possible as we can do with money.  Whereas competition and multiplicity often results in lower consumer costs, here it risks a mass of incompatible or inaccessible barriers to interchange and control.  </p>

				<p>We propose an alternative:  a distributed access and validation system using the blockchain to replace centralized intermediaries.</p>
				

				
			</div>
		</div>
	);
};

export default Landing;
