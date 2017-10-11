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
				<p>Electronic Health Records (EHRs) were never designed to manage the complexities of multi-institutional, lifetime medical records. As patients move between providers, their data becomes scattered across different organisations, losing easy access to past records. As providers — not patients — are the primary stewards of EHRs, patients face significant hurdles in viewing their reports and correcting erroneous data. This also forms an interoperability challenge between different provider and hospital systems, where IT providers can charge exorbitant prices for data exchange interfaces, as “information blocking” is economically incentivised. </p>

				<p>Medrec proposes a system that prioritises patient agency, giving a transparent and accessible view of medical history. Patients must be assured that 	their records (and the metadata associated with them) remain fully confidential, to retain trust and continued participation in the medical system.  The blockchain provides the means for this — as a ‘trustless’ model for storing transactions.</p>
				
				<h3> The blockchain</h3>

				<p>Developed as a means of recording financial transactions for digital currencies, the blockchain may be extended more generally as a platform for distributed computation. the blockchain uses public key cryptography to create a tamper-proof chain of content, supported not by a central server but a decentralised network of participating ‘nodes’. Each individual node works to solve a series of hashing exercises, which contribute to the formation of the chain — a process known as ‘mining’. </p>

				<p>The first implementation of Medrec was developed using the Ethereum blockchain. Ethereum uses a system called ‘smart contracts’ to execute scripts on the blockchain, extending bitcoin to a turing-complete language. This system of smart contracts significantly broadens the possibilities for decentralised computation using the blockchain, and it is this system which formed the backbone for the development of Medrec. </p>


				<h3>Implementation</h3>
				<p>Smart contracts act as an intelligent representation that links patients and providers to the addresses of existing medical records. Medrec does not ‘store’ the record directly; rather encodes metadata that allows records to be accessed securely by patients, unifying access to data across disparate providers. The metadata contains information about ownership, permission and the integrity of the data being requested. In order to implement this effectively, Medrec uses three kinds of smart contract to link different users of the system.</p>
				
				<img className="diagram" src={'/images/diagram.png'} alt={'Medrec schema'} />
				<h4>Registrar contract</h4>
				<p>The registrar contract maps participant IDs (patients, providers, insurers) to their Ethereum address identity (equivalent to a public key). The regulation of new identities can be encoded into the contract, ensuring that only certified institutions may append onto the blockchain. Each identity string is located at an address on the blockchain, where it is referenced by a Summary Contract. </p>

				<h4>Patient-provider relationship contract</h4>
				<p>The patient provider relationship contract links two nodes in the system, where one node stores and manages medical records for the other. This relationship could exist between a particular care provider and patient, but extends to cover any pairwise data stewardship interaction. </p>

				<h4>Summary contract</h4>
				<p>The summary contract serves as a trail of bread-crumbs, where each participant in the system can locate a summary of their relationships with each other participant. The summary contract encodes a list of references to Patient-Provider Relationship contracts, giving both current and previous engagements with other nodes on the system. This also enables user notifications, where each relationship stores a ‘status’ variable, indicating when the relationship was established, and whether it has been approved by the patient. The acceptation, rejection or deletion of relationships is controlled by the patient, giving full control over which records in their history they wish to acknowledge.</p>

				<h4>Economic Viability</h4>
				<p className="closing">The current implementation of Medrec envisions using the value of data to incentivise ‘mining’ of the Medrec blockchain, which is required for the system to scale and the chain to advance. The mining process — a computationally intensive hashing exercise — would be performed by healthcare providers, who in turn would gain access to aggregate and anonymised data that might be used to further medical research. In the current prototype, this exchange is encoded as a ‘bounty query’: any transaction that updates a patient provider record attaches a particular query (e.g. a request to return the average iron levels in blood tests done by the provider, across all patients in the previous week). When the block is mined, the block’s miner is appended as the author of nether query, allowing them to collect the data as part go the transaction. This enabling of population-level insights into healthcare outcomes, thus providing a positive benefit to medical research.</p>
				
			</div>
		</div>
	);
};

export default Landing;
