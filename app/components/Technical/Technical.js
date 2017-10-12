import React from 'react';

const Technical = function() {
	
	return (
		<div className="main"> 
			
      <a className="PDF" href="/images/medrec_technical_documentation.pdf"  download="medrec_technical_documentation" >Download PDF</a>
      
      <br/>
      <br/>
      <br/>
      <h3> Overview</h3>
      <p> This section of the site lists the proposed architecture of MedRec 2.0 in detail, along with a background that covers the original implementation, and an overview of technology underpinning the decisions we’ve made. This is intended to be a working document, and will grow as the new codebase develops. MedRec 2.0 is currently under development, but we hope to have an open-source version up and running very soon (to be notified of this, sign up here using the Signup tab above). 
      </p>
      <h3> MedRec 1.0 </h3>
      <p> MedRec’s first implementation, designed by Ariel Ekblaw and Asaph Azaria is detailed in the white paper “A Case Study for Blockchain in Healthcare”. This was the implementation piloted in August 2016 At the Beth Israel Deaconess Medical Centre. This implementation forms an architectural basis for MedRec 2.0, but with significant changes. In particular, MedRec 2.0 is developed using Go-ethereum (Geth) and Solidity — as opposed to the Pyethereum and Serpent libraries in which the original was developed and changes are made to the amount of information stored on the blockchain, with a view to improve both the scaling and privacy properties of the transaction. </p>

      <img width={'100%'} src={'/images/story.png'} alt={'story'} />


      <p> MedRec 1.0 was not built on the live Ethereum network, instead creating a small- scale private blockchain with extensive, specific APIs. In order to maintain the flexibility of this platform, modifications (such as wait time before accepting new blocks and the ‘difficulty’ of the Proof-of-Work consensus mechanism) were made to a number of otherwise rigid blockchain parameters. Since the original chain was forked from Ethereum, the official client has changed to a point where the MedRec app could not be returned to the public blockchain (as was originally intended), and the code has become obsolete. A discussion of public, private and consortium models for blockchain management is explored later on. </p>

      <h3> The Ethereum Blockchain</h3>
      <p> MedRec is built on the Ethereum blockchain,  released by founder by Vitalik Buterin in 2015. Though not the first to propose them, Ethereum is associated with the use of ‘smart contracts’ — scripts that enable the exchange of value without deference to a middleman -- which allow more complex transactions to be executed on the blockchain. This significantly broadens the scope of the Bitcoin blockchain from a purely transactional set of operations to a Turing-complete language that supports diverse applications. 
Ethereum consists of a system of nodes (personal computers, clusters, virtual machines) in a decentralised network which.. Smart contracts are not a replacement for contracts in the traditional sense, rather they are agreements to execute some action or code given a set of conditions. In the case of MedRec, these contracts can be used to encode a set of pointers to the locations of medical data. 
</p>

      <h3>Smart Contract Structure </h3>
      <p>Medrec does not store EHRs directly on the Ethereum blockchain, instead using a relational set of smart contracts to encode pointers, which may be used to locate and authenticate to record locations. MedRec defines three main kinds of smart contract, within which there is some variation between contracts belonging to patients, providers and other forms of user.</p>

      <h3> Registrar Contract  </h3>
      <p>The registrar contract maps participant IDs (patients, providers, insurers) to their Ethereum address identity (equivalent to a public key). The regulation of new identities can be encoded into the contract, ensuring that only certified institutions may add new information onto the blockchain. In turn, new information concerning a patient (e.g., a new relationship) is only added with the approval of that patient. Each identity string is located at an address on the blockchain, where it is referenced by a Summary Contract. This raises some questions about the suitability of a global system of IDs, which is addressed later on in a discussion of privacy. </p>

      <h3>Patient-Provider Relationship Contract  </h3>
      <p>The patient provider relationship contract links two nodes in the system, where one node stores and manages medical records for the other. This relationship could exist between a particular care provider and patient, but extends to cover any pairwise data stewardship interaction. </p>


      <h3>Summary Contract  </h3>
      <p>The summary contract serves as a trail of bread-crumbs, where each participant in the system can locate a summary of their relationships with each other participant. The summary contract encodes a list of references to Patient-Provider Relationship contracts, giving both current and previous engagements with other nodes on the system. Each relationship also stores a ‘status’ variable, indicating when the relationship was established, and whether it has been approved by the patient. The acceptation, rejection or deletion of relationships is controlled by the patient, giving full control over which records in their history they wish to acknowledge. This feature of MedRec is key to satisfying its usability criterion: pointer to fragmented records are drawn together in a single, dedicated location. </p>
      <p>A diagram showing the possible relationships between different patient and provider contracts is shown below. Note that the ‘status’ variable of a particular contract can hold different values depending on the permissions it allows (e.g., the status variable for the Patient A -> Provider X PPR encodes permissions for Provider Y to view, but the Patient A -> Provider Y PPR does not encode those same permissions for Provider X). Note also that the contracts are only used to provide pointers: the database queries that return the records themselves are handled off- chain. </p>
      
      <img  width={'100%'}  src={'/images/diagram.png'} alt={'diagram'} />


      <h3>Data Handling </h3>

      <p>When a patient requests access to a particular medical record, it sends a request to the provider’s Database Gatekeeper, part of the off-chain infrastructure of MedRec. The Database Gatekeeper implements an access interface to the patient node’s local database, governed by permissions stored on the blockchain. The Gatekeeper runs a server listening to query requests, which are cryptographically signed by the issuer, from clients on the network. The cryptographic signature allows the gatekeeper to confirm identities, and then check the blockchain contracts to verify if the address issuing the request is allowed access to the query. If the address is valid, it runs the query on the node’s local database and returns the result over to the client. </p>
      <p>Here, we assume that many ‘provider’ nodes, especially those associated with care providers, already store data on networked servers with a high degree of security. MedRec also defines a modular interoperability protocol, which can interface with any provider backend and UI implementation. Patient nodes also contain a local database, though more lightweight, which functions as a cache storage of the patient’s data. The patient node implementation is a ‘light’ node, which could be executed on a PC or mobile phone</p>

      <h3>Public and Private Blockchains  </h3>

      <p>MedRec does not seek to build directly on the public Ethereum blockchain, instead constructing a private peer-to-peer network of trusted, verified nodes. It is this private client that defines a Global Registrar (a contract mapping all public identities to Ethereum addresses), ensuring that only registered healthcare providers are permitted to append blocks to the MedRec blockchain. Though this use of a centralised arbiter of a ‘provider whitelist’ to determine the validity of each potential sealer contradicts the decentralised spirit of blockchain technology, we believe that this level of centralised trust in healthcare providers is not unreasonable, as patients already place a high degree of trust in their healthcare providers. </p>
      <p>If a private blockchain is used, we may also use a different consensus mechanism to the main Ethereum blockchain. Here we only allow verified sealers to vote on appended blocks, rather than the Proof-of-Work algorithm, which requires the computation of hashes to contribute to the maintenance of a distributed ledger. Mining mechanisms to sustain the distributed ledger would still be required: this could be a requirement of provider nodes, who could use spare computing power (this would be relatively less intensive than proof-of-work). Another suggestion, made by MedRec 1.0 would be to incentivise mining from providers and academic institutions, who would in turn receive anonymised, aggregate medical data that could be used in data analysis. </p>


      <h3>Privacy  </h3>

      <p>Blockchain technologies introduce a number of privacy limitations, some of which are mitigated by the use of a permissioned read access structure and private blockchain. A key issue is that, even without the direct disclosure of a patient name, inference about who a particular patient is could be drawn from metadata of one ethereum address with multiple others. Even with a private blockchain, we must consider mining nodes, who process this sensitive metadata. One solution is to require all miners to be fully-permissioned, and require medical researchers running mining nodes only to do so on secured systems. One future goal of the project is to perform a full k-anonymity analysis of the query structure to ensure that privacy is preserved. In addition, MedRec proposes the addition of encryption in the off- blockchain synchronisation steps, safeguarding against accidental or malicious content access.</p>
      <p>A proposed solution to the problem of privacy is to use a system of ‘delegated contracts’, where each provider creates a separate Ethereum identity for each new Patient Provider Relationship. This means that, instead of a single provider address, from which relationships with particular patients could easily be derived, the provider’s identity is distributed across the network. In order for the relationship to be created securely, however, the provider could not append the fresh block containing this new address itself (as it would be simple to trace back each of these delegate addresses to the original). Thus, on creating a new delegate account, the provider performs an off-blockchain transaction with another verified provider at random, giving them the details of the new delegate account, which they may append as a verified account to the blockchain.</p>

      <h3>Security   </h3>      
      <p>The decentralised nature of blockchain-based systems gives MedRec the advantage of robustness both in the maintenance of authorisation data (which is maintained in every node in the network), and in the storage of records themselves (which are persisted in both patient and relevant provider nodes). As many entities participate in the system, consensus mechanisms also mean that single points of failure are avoided. As the medical data and the global authorisation log are distributed, there is no central target for attack or failure, and the network is robust to tampering (as an altered node would be in conflict with the other, unaltered nodes and would not pass a consensus). </p>
      <p>MedRec does not seek to address the security concerns at the level of provider databases (which must be properly managed by the provider’s IT admin), and neither is end-point security addressed (a compromised patient computer could potentially allow data to be stolen). MedRec also assumes that nodes are bound by external regulation governing data copying, and does not seek to address this in its own right. </p>
      <p>MedRec 1.0 never underwent a full security review (although measures were taken to avoid obvious attacks such as SQL injection), and in implementing MedRec 2.0 we will need to address the potential for vulnerability in the smart contracts, particularly in the wake of the DAO hack. </p>

      <h3>Scalability   </h3>

      <p>Scalability is an ongoing concern in the Ethereum community and one that has yet to be fully resolved. One of the key issues is that any event stored at any time on the blockchain will appear in every subsequent block. Though this is also a property of the Bitcoin blockchain, as Ethereum provides the potential for both data storage and more complex operations, the repercussions of this growth are more of an issue. </p>
      <p>One advantage of a private blockchain is that the app only needs to track back to the genesis of the private chain, not Ethereum as a whole. However, MedRec must still address its own scaling. A key architectural modification between MedRec 1.0 and 2.0 is to bypass the blockchain for patient notifications. This prevents an ‘event’ needing to be recorded on the blockchain every time a medical record undergoes a change of state (which could happen up to several times a day, per PPR, for a patient under constant medical attention), and instead restricts blockchain storage to the creation and modification of identities and relationships, rather than the metadata surrounding them. </p>
      <p>This change also means that the pseudonymity issue associated with communication between patients and providers is somewhat mitigated. Looking at the blockchain, an external observer might view a relationship between patient A and provider X, but would not be able to determine the frequency by which the 2 communicated, as that interaction. </p>
      <p>The alternative approach (changed between MedRec 1.0 and 2.0) is detailed in the diagram below:</p>
        
        <img width={'100%'}  src={'/images/architecture.png'} alt={'architecture'} />
		</div>
	);
};

export default Technical;
