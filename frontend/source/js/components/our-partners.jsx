var React = require('react');
var Button = require('./button.jsx');
var TopBar = require('./top-bar.jsx');
var HomepageActionCreators = require('../actions/HomepageActionCreators.js');


var Homepage = React.createClass({
		handleRegisterAsADeveloperClick: function () {
				HomepageActionCreators.changePageToRegisterEmailPasswordDeveloper();
		},
		handleRegisterAsAnEmployerClick: function () {
			HomepageActionCreators.changePageToRegisterEmailPasswordEmployer();
		},
		render: function() {
			return 	<div>
								<TopBar />
								<div className="row img-rounded general-wrapper">
									<div className="homepage-info">
										<h1>Our Hiring Partners</h1>
										<div className="row">
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-1.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-2.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-3.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-4.png" class="img-responsive" alt="Responsive image"></img>
											</div>
										</div>
										<div className="row">
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-5.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-6.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-7.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-8.png" class="img-responsive" alt="Responsive image"></img>
											</div>
										</div>
										<div className="row">
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-9.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-10.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-11.png" class="img-responsive" alt="Responsive image"></img>
											</div>
											<div className="partner col-xs-4 col-sm-3 col-md-3 col-lg-3">
												<img src="./images/logo-12.png" class="img-responsive" alt="Responsive image"></img>
											</div>
										</div>
									</div>	
								</div>
							</div>;
		}
	});		

module.exports = Homepage;