var React = require('react');
var ViewStore = require('../stores/ViewStore.js');
var Homepage = require('./homepage.jsx');
var RegistrationEmailPasswordDeveloper = require('./registration-email-password-developer.jsx');
var RegistrationEmailPasswordEmployer = require('./registration-email-password-employer.jsx');
var RegistrationDetailsDeveloper = require('./registration-details-developer.jsx');
var RegistrationSkillsDeveloper = require('./registration-skills-developer.jsx');
var RegistrationAboutMeDeveloper = require('./registration-about-me-developer.jsx');
var BackendPanelEmployer = require('./backend-panel-employer.jsx');
var BackendPanelDeveloper = require('./backend-panel-developer.jsx');
var FullProfileDeveloper = require('./full-profile-developer.jsx');
var YouHaveRegisteredMessage = require('./you-have-registered-message.jsx');
var FindSection = require('./find-section.jsx');
var TopBar = require('./top-bar.jsx');
var OurPartners = require('./our-partners.jsx');
var Contact = require('./contact.jsx');
var LogIn = require('./log-in.jsx');
var YouHaveLoggedInMessage = require('./you-have-logged-in-message.jsx');
var TopBarLogOut = require('./top-bar-log-out.jsx');


var Application = React.createClass({

	 getInitialState: function () {
    return {
    	renderedPage: ViewStore.getCurrentPage()
    };
  },
 
  componentDidMount: function () {
  	ViewStore.addChangeListener(this.changePage);
  },

  changePage: function () {
  	this.setState({
  		renderedPage: ViewStore.getCurrentPage()
  	});
  },

	render: function() {
		if (this.state.renderedPage === 'Homepage') {
			return <Homepage />;
		} else if (this.state.renderedPage === 'RegistrationEmailPasswordDeveloper') {
			return <RegistrationEmailPasswordDeveloper />;
		} else if (this.state.renderedPage === 'RegistrationEmailPasswordEmployer') {
      return <RegistrationEmailPasswordEmployer />;
    } else if (this.state.renderedPage === 'RegistrationDetailsDeveloper') {
      return <RegistrationDetailsDeveloper />;
    } else if (this.state.renderedPage === 'RegistrationSkillsDeveloper') {
      return <RegistrationSkillsDeveloper />;
    } else if (this.state.renderedPage === 'RegistrationAboutMeDeveloper') {
      return <RegistrationAboutMeDeveloper />;
    } else if (this.state.renderedPage === 'BackendPanelEmployer') {
      return <BackendPanelEmployer />;
    } else if (this.state.renderedPage === 'FullProfileDeveloper') {
      return <FullProfileDeveloper />;
    } else if (this.state.renderedPage === 'BackendPanelDeveloper') {
      return <BackendPanelDeveloper />;
    } else if (this.state.renderedPage === 'YouHaveRegisteredMessage') {
      return <YouHaveRegisteredMessage />;
    } else if (this.state.renderedPage === 'FindSection') {
      return <FindSection />;
    } else if (this.state.renderedPage === 'OurPartners') {
      return <OurPartners />;
    } else if (this.state.renderedPage === 'Contact') {
      return <Contact />;
    } else if (this.state.renderedPage === 'LogIn') {
      return <LogIn />;
    } else if (this.state.renderedPage === 'YouHaveLoggedInMessage') {
      return <YouHaveLoggedInMessage />;
    } else if (this.state.renderedPage === 'FullProfileDeveloper') {
      return <FullProfileDeveloper />;
    } else if (this.state.renderedPage === 'BackendPanelEmployer') {
      return <BackendPanelEmployer />;
    }

	}
});


module.exports = Application;

