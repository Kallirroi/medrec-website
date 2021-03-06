import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	return (
		<div>
			<div className="main">
				<div className="sidebar"> 
					<b>Resources</b>
					<p>
						<a href="https://medium.com/blockchannel/a-beginners-guide-to-ethereum-5e7e132a854d" target="_blank">A beginner's guide to ethereum</a> 
						<br/>
						<a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank">Ethereum white paper</a> 
						<br/>
						<a href="https://hbr.org/2017/03/the-blockchain-will-do-to-banks-and-law-firms-what-the-internet-did-to-media" target="_blank">Harvard Business Review on Blockchain</a> 
						<br/>
						<a href="http://dci.mit.edu/" target="_blank">MIT Digital Currency Initiative</a> 
						<br/>
						<a href={'http://dci.mit.edu/assets/papers/eckblaw.pdf'} target="_blank">Medrec 2016 White Paper</a>
					</p>
				</div>
				<br/>

				<h3> What is Medrec ?</h3>


				<br/>
				<br/>


				<p> Electronic Health Records (EHRs) were never designed to manage the complexities of multi-institutional, lifetime medical records. As patients move between providers, their data becomes scattered across different organizations, losing easy access to past records. As providers — not patients — are the primary stewards of EHRs, patients face significant hurdles in viewing their reports, correcting erroneous data, and distributing the information. The situation is much like consumer finance, where an individual may have several bank accounts, credit cards, loans, and assets but no unified way to access and control them. In the case of finance, however,  there is an infrastructure in place that greases the wheels: currency.  With medical information we are still in the age of barter. </p>
				<img width={'60%'} src={'/images/story.png'} alt={'story'} />
				
				<p>MedRec is the combination of a social need with a technological enabler: a system that prioritizes patient agency, giving a transparent and accessible view of medical history. To continue the banking analogy, financial systems may contain multiple different depositories of currency, perhaps one for each provider network.  The problem is that health records are not fungible; each is an individual’s unique imprint.  There is no like-for-like trade possible as we can do with money.  Whereas competition and multiplicity often results in lower consumer costs, here it risks a mass of incompatible or inaccessible barriers to interchange and control.  We propose an alternative:  a distributed access and validation system using the blockchain to replace centralized intermediaries.</p>
				

				<h3> What are the technologies we use? </h3>
				<p> Developed as a means of recording financial transactions for digital currencies, the blockchain may be extended more generally as a platform for distributed computation. the blockchain uses public key cryptography to create a tamper-proof chain of content, supported not by a central server but a decentralised network of participating ‘nodes’. Conventionally, each individual node works to solve a series of hashing exercises, which contribute to the formation of the chain — a process known as ‘mining’.   However, there are variations that are more efficient, as will be described later.</p>
				<p> The first implementation of Medrec was developed using the Ethereum blockchain. Ethereum uses a system called ‘smart contracts’ to execute scripts on the blockchain, extending bitcoin to a turing-complete language. This system of smart contracts significantly broadens the possibilities for decentralised computation using the blockchain, and it is this system which formed the backbone for the development of Medrec. </p>

				<h3> Does MedRec store patient data?  </h3>
				<p> Smart contracts act as an intelligent representation that links patients and providers to the addresses of existing medical records. Medrec does not ‘store’ the record directly; rather encodes metadata that allows records to be accessed securely by patients, unifying access to data across disparate providers. The metadata contains information about ownership, permission and the integrity of the data being requested. The full details of the smart contract structure and operation can be found in the technical documentation. </p>


				<h3> Is MedRec economically viable?  </h3>
				<p>The first  implementation of Medrec used the value of data to incentivise ‘mining’ of the Medrec blockchain, which is required for the system to scale and the chain to advance. The mining process — a computationally intensive hashing exercise — would be performed by medical researchers, who in turn would gain access to aggregate and anonymised data that might be used to further medical research.  </p>
				<p> In the current design, providers themselves maintain the blockchain. The rationale for this is that providers are already trusted keepers of medical data.  Extending this trust to make them also maintain the ledger of permission contracts is therefore reasonable. In addition, this closed group can form a consensus in an efficient manner, without the cost of mining. Providers use “proof of authority” to append blocks; any provider can  do so.  Providers also determine who is in their group. </p>
				
				<h3> Do we welcome external developers? </h3>
				<p>Currently, MedRec2.0 is implemented and tested on a database provided by Beth Israel Deaconess Medical Center.  The code is open source and is hosted here.  We are working with a newly-formed Healthcare Information Technology Center, under the direction of John Halamka at BIDMC to develop and build a deployed network.  </p>


				<h3> Who supports this project? </h3>
				<p> This project is supported by a grant from the Robert Wood Johnson Foundation, with additional support from the MIT Media Lab.</p>
			</div>
		</div>
	);
};

export default Landing;
