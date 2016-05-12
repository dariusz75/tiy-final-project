var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./components/button.jsx');
var Homepage = require('./components/homepage.jsx');
var Checkboxes = require('./components/check-box.jsx');
var Miniprofile = require('./components/miniprofile.jsx');
var FindSection = require('./components/find-section.jsx');
var RegistrationEmailPasswordDeveloper = require('./components/registration-email-password-developer.jsx');
var RegistrationEmailPasswordEmployer = require('./components/registration-email-password-employer.jsx');
var RegistrationDetailsDeveloper = require('./components/registration-details-developer.jsx');
var RegistrationSkillsDeveloper = require('./components/registration-skills-developer.jsx');
var RegistrationAboutMeDeveloper = require('./components/registration-about-me-developer.jsx');
var BackendPanelDeveloper = require('./components/backend-panel-developer.jsx');
var BackendPanelEmployer = require('./components/backend-panel-employer.jsx');
var FullProfileDeveloper = require('./components/full-profile-developer.jsx');
var LogIn = require('./components/log-in.jsx');
var Contact = require('./components/contact.jsx');
var YouHaveRegisteredMessage = require('./components/you-have-registered-message.jsx');
var Application = require('./components/application.jsx');
var TopBar = require('./components/top-bar.jsx');

var parentElement = document.querySelector('.target');
var element = React.createElement(Button);


ReactDOM.render(<BackendPanelDeveloper />, parentElement);


