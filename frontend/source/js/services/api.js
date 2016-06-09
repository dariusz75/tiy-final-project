var jQuery = require('jquery');


function registerEmployer(employer, callback) {

	var request =	jQuery.ajax({
			method: 'post',
			url: 'http://localhost:8080/api/employers',
			dataType: 'json'
		});

	request.done(function onSuccess(data) {
		callback(null, data);
	});

	request.fail(function onFailure(error) {
		callback(error, null);
	});
}


module.exports = {
	registerEmployer: registerEmployer
};
