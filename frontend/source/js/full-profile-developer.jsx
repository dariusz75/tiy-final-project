var React = require('react');
var Button = require('./button');

var FullProfileDeveloper = React.createClass({
		render: function() {
			return <div className="row img-rounded registration-developer-wrapper">													
							<p className="bold text-center">CANDIDATE'S PROFILE</p>
								<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
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
									
								
									<div className="border righthand-side-wrapper col-xs-12 col-sm-9 col-md-9 col-lg-9">
										<div className="border col-xs-12 col-sm-6 col-md-6 col-lg-6">
											<ul>
												<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-linkedin-square" aria-hidden="true"></i>
						 						LinkedIn</a></li>
												<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-github-square" aria-hidden="true"></i>
						 						Github</a></li>
						 						<li className="img-rounded"><a href="#" target="_blank" ><i className="fa fa-desktop" aria-hidden="true"></i>
						 						Portfolio</a></li>
											</ul>
										</div>
										<div className="border cv col-xs-12 col-sm-3 col-md-3 col-lg-3">
											<p> Download CV</p>
											<a href="#" target="_blank" ><div className="cv-icon"><i className="fa fa-file-pdf-o fa-4x" aria-hidden="true"></i></div>
						 						</a>
										</div>
										<div className="border col-xs-12 col-sm-3 col-md-3 col-lg-3">
											<p> 3333333 </p>
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