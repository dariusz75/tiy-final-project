var React = require('react');
var TopBarActionCreators = require('../actions/TopBarActionCreators.js');


var TopBar = React.createClass({

		handleOurMissionClick: function () {
				TopBarActionCreators.changePageToHomepage();
		},

		handleListOfTalentsClick: function () {
				TopBarActionCreators.changePageToFindSection();
		},

		handleOurPartnersClick: function () {
				TopBarActionCreators.changePageToOurPartners();
		},

		handleContactUsClick: function () {
				TopBarActionCreators.changePageToContact();
		},

		handleLogInClick: function () {
				TopBarActionCreators.changePageToLogIn();
		},
	
		render: function() {
			return <div className="container">
							<div className="navbar navbar-default navbar-fixed-top">
					    <div className="container-fluid">
					      <div className="navbar-header">
					        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-content">
					         <span className="icon-bar"></span>
					         <span className="icon-bar"></span> 
					         <span className="icon-bar"></span>  
					        </button>          
					        <a className="navbar-brand" href="#" class="scroll-link " data-id="#">LONDON SOFTWARE JUNIORS</a>
					      </div>      

					      <div className="collapse navbar-collapse navbar-right" id="navbar-content">
					        <ul className="nav navbar-nav" id="ul_navigation">
					          <li className="active"><a data-toggle="collapse" data-target=".navbar-collapse" data-id="top" href="#" className="scroll-link" onClick={this.handleOurMissionClick} ><i className="fa fa-book" aria-hidden="true"></i>
										Our Mission</a></li>
					          <li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" className="scroll-link" onClick={this.handleListOfTalentsClick} ><i className="fa fa-list" aria-hidden="true"></i>
										List of Talents</a></li>
										<li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" className="scroll-link" onClick={this.handleOurPartnersClick} ><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
										Our Partners</a></li>
										<li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" className="scroll-link" onClick={this.handleContactUsClick} ><i className="fa fa-envelope" aria-hidden="true"></i>
										Contact Us</a></li>
					          <li><span data-toggle="collapse" data-target=".navbar-collapse" data-id="contact" href="#contact" className="scroll-link" onClick={this.handleLogInClick} ><button type="button" className="btn btn-default navbar-btn"><i className="fa fa-list-alt" aria-hidden="true"></i>
										Log In</button></span></li>
					        </ul>          
					      </div>
					    </div>
    				 </div>
    				</div>
		  
		}
	});		

module.exports = TopBar;