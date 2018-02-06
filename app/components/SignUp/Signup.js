import React from 'react';

const Signup = function() {
	
	return (
		<div className="main"> 
			<p>If you are interested in receiving updates about MedRec, please provide your information using the form below.</p>
			<p className="signupSection"> 

	<div>
        {/* Begin MailChimp Signup Form */}
        <link href="https://us16.admin.mailchimp.com/release/1.1.135a5f5fbe3f348c1668850e802e9cdafdea0e913/css/less/template-editor.css" rel="stylesheet" type="text/css" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "#mc_embed_signup{background:#fff; font:14px Helvetica Neue,sans-serif;  width:350px;} " }} />
        <div id="mc_embed_signup">
          <form action="//mit.us16.list-manage.com/subscribe/post?u=a85f4a07fc37513e4c4ff668b&id=a9fb20c374" 
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
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
              </div>  
              <div style={{position: 'absolute', left: '-5000px'}} ><input type="text" name="b_a85f4a07fc37513e4c4ff668b_a9fb20c374" tabIndex={-1} defaultValue /></div>
              <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>
      </div>


			</p>
		</div>
	);
};

export default Signup;
