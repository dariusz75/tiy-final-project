var React = require('react');
var Button = require('./button.jsx');
var RegistrationDeveloperActionCreators = require('../actions/RegistrationDeveloperActionCreators.js');
var TopBar = require('./top-bar.jsx');
var uuid = require('node-uuid');

var RegistrationEmailPasswordDeveloper = React.createClass({
	
		handleNextDeveloperClick: function () {
			var email = this.refs.email.value;
			var confirmEmail = this.refs.confirmEmail.value;
			var password = this.refs.password.value;
			var confirmPassword = this.refs.confirmPassword.value;
			var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
			var passwordRegex = /\w{5,10}/g;
			var emailResult = emailRegex.test(email);
			var confirmEmailResult = emailRegex.test(confirmEmail);
			var passwordResult = passwordRegex.test(password);
			var confirmPasswordResult = passwordRegex.test(confirmPassword);
			var developer = {
				id: uuid.v4(),
				email: email,
				password: password
			};

			if (!emailResult || email != confirmEmail) {
				console.log('Please entry valid email addresses and check if they match.');
			}	else if (!confirmEmail || confirmEmail != email) {
				console.log('Please entry valid email addresses and check if they match.');
			} else if (!passwordResult || password != confirmPassword) {
				console.log('Please entry valid passwords and check if they match.');
			} else if (!confirmPassword || confirmPassword != password) {
				console.log('Please entry valid passwords and check if they match.');
			} else {
				RegistrationDeveloperActionCreators.registerDeveloper(developer);
				console.log('Well done!');
			}

		},

		handleCancelDeveloperClick: function () {
			RegistrationDeveloperActionCreators.changePageToHomepageWhenCancelled();
		},

		render: function() {
			return	<div>
								<TopBar /> 
								<div className="row img-rounded general-wrapper">
									<div className="row">
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
			  							<label for="usr">Enter email address:</label>
			  							<input type="email" className="form-control" ref="email"></input>
										</div>
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
			  							<label for="usr">Confirm email address:</label>
			  							<input type="email" className="form-control" ref="confirmEmail"></input>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
			  							<label for="usr">Enter password.</label>
			  							<input type="password" className="form-control" ref="password"></input>
										</div>
										<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
			  							<label for="usr">Confirm password:</label>
			  							<input type="password" className="form-control" ref="confirmPassword"></input>
										</div>
									</div>	
									<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="NEXT" onClick={this.handleNextDeveloperClick} />
									<Button addClass="blue-bright fullwidth no-border button-text-style hvr-pulse-grow" text="CANCEL" onClick={this.handleCancelDeveloperClick} />	
								</div>
						 	</div>;
		}
	});		

module.exports = RegistrationEmailPasswordDeveloper;