import React from 'react';

const Signup = function() {
	
	return (
		<div className="main"> 
			<p>If you are interested in receiving updates about MedRec, please provide your information using the form below.</p>
			<div className="signupSection"> 
        <div id="mc_embed_signup">
          <form action="https://mit.us16.list-manage.com/subscribe/post?u=a85f4a07fc37513e4c4ff668b&id=a9fb20c374" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                </label>
                <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text"  name="FNAME" className id="mce-FNAME" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name  <span className="asterisk">*</span>
                </label>
                <input type="text"  name="LNAME" className="required" id="mce-LNAME" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}} />
                <div className="response" id="mce-success-response" style={{display: 'none'}} />
              </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_a85f4a07fc37513e4c4ff668b_a9fb20c374" tabIndex={-1} defaultValue /></div>
              <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>
			</div>
		</div>
	);
};

export default Signup;