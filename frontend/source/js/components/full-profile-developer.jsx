var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');


var FullProfileDeveloper = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">													
							<p className="bold text-center">CANDIDATE'S PROFILE</p>
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<div className="basic-details-wrapper img-rounded">
								<p>John Smith</p>
								<p>Frontend Developer</p>
								<p>john@hotmail.com</p>
								<p>07708473329</p>
								</div>
									<div className="full-profile-skills-list img-rounded ">
										<p>Skills:</p>
										<ul>
											<li>HTML</li>
											<li>CSS</li>
											<li>Javascript</li>
											<li>jQuery</li>
											<li>Node.js</li>
											<li>Git</li>
											<li>Github</li>
										</ul>
									</div>
								</div>
									
								
									<div className="img-rounded righthand-side-wrapper col-xs-12 col-sm-8 col-md-8 col-lg-8">
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
											<ul>
												<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-linkedin-square" aria-hidden="true"></i>
						 						LinkedIn</a></li>
												<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-github-square" aria-hidden="true"></i>
						 						Github</a></li>
						 						<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-desktop" aria-hidden="true"></i>
						 						Portfolio</a></li>
						 						<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-file-pdf-o" aria-hidden="true"></i>
						 						CV</a></li>
											</ul>
										</div>
										<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
											<img className="img-rounded" src="images/photo1.jpg" alt="Smiley face" height="180" ></img>

										</div>
										<div className="about-me-wrapper img-rounded col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
											sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
											Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
											nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
											ui officia deserunt mollit anim id est laborum.
											</p>
										</div>
									</div>										
	  					<div>
	  						<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow " text="BOOKMARK THIS PROFILE" />
								<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow " text="BACK TO LIST OF TALENTS" />
	  					</div>	
						 </div>;
		}
	});		

module.exports = FullProfileDeveloper;